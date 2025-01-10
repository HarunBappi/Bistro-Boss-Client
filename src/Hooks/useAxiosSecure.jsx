import axios from "axios";
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});
export default function useAxiosSecure() {
  // Request interceptor to add authorization header for every secure call to the API
  const navigate = useNavigate()
  const {logOut} = useAuth()
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
    //   console.log("user stopped by Interceptors", token);
      config.headers.authorization = `bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  // Interceptors 401 and 403 response

  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      const status = error.response.status;
    //   console.log("status error in the interceptors", status);
    //   for 401 or 403 logout the user and move the login page 
      if(status === 401 || status === 403){
        await logOut();
        navigate('/login')
      }
      return Promise.reject(error);
    }
  );

  return axiosSecure;
}
