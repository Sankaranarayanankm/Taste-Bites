import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/slices/auth-slice";

function useLoadLocalStorage() {
  const dispatch = useDispatch();
  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) {
      const parsedData = JSON.parse(data);
      console.log(parsedData);
      dispatch(authActions.login(parsedData));
    }
  }, []);
}

export default useLoadLocalStorage;
