import jwt_decode from "jwt-decode";
import { store } from "../redux/store";
import { loginUserAction } from "../features/auth/auth.types";

export const getTokenData = () => {
  if (localStorage.jwtToken) {
    const decoded = jwt_decode(localStorage.jwtToken);
    store.dispatch(loginUserAction(decoded));
  }
};
