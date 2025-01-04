import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


export default function useAuth() {
  const auth = useContext(AuthContext)
  return auth
}
