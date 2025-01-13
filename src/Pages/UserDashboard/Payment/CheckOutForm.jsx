import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "./../../../Hooks/useAxiosSecure";
import useCart from "./../../../Hooks/useCart";

const CheckOutForm = () => {
  const stripe = useStripe();
  const [error, setError] = useState("");
  const [transactionId, setTransactionId] = useState('')
  const [clientSecret, setClientSecret] = useState("");
  const elements = useElements();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [cart, refetch] = useCart();
  const navigate = useNavigate()
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  //   Payment Load data in UseEffetc
  useEffect(() => {
   if(totalPrice > 0){
    axiosSecure
    .post("/create-payment-intent", { price: totalPrice })
    .then((res) => {
      console.log("save client secret",res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    });
   }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("patment error", error);
      setError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setError("");
    }
    // Confirm Payment

    const {paymentIntent, error : confirmError} = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || 'anonymous',
          name: user?.displayName || 'anonymous',
        },
      },
    });
    if(confirmError){
        console.log("confirm error", confirmError)
    }
    else{
        console.log("payment intent", paymentIntent)
        if(paymentIntent.status === 'succeeded'){
            console.log('transaction id', paymentIntent.id)
            setTransactionId(paymentIntent.id);

            // Now save the payment in the Database
            const payment = {
                email : user.email,
                price : totalPrice,
                transactionId : paymentIntent.id,
                date : new Date(), //UTC date convert.. use moment js
                cartIds : cart.map(item => item._id),
                menuIds : cart.map(item => item.menuId),
                status : 'pending'
            }
            const res = await axiosSecure.post('/payments', payment)
            console.log("payment save", res.data);
            refetch();
            if(res.data?.paymentResult?.insertedId){
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `Payment has been Successfull!`,
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/dashboard/paymentHistory')
            }
        }
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="btn btn-sm btn-primary my-3"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      {transactionId && <p className="text-green-500">Your Transaction ID: {transactionId}</p> }
      <p className="text-red-500">{error}</p>
    </form>
  );
};

export default CheckOutForm;
