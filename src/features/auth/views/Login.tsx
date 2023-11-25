import { yupResolver } from "@hookform/resolvers/yup";
//import PasswordInput from "app/components/PasswordInput";
import { useAppDispatch, useAppSelector } from "app/store/hooks";
import Logo from "assets/svg/Logo.svg";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { Link as RouterLink } from "react-router-dom";

import { login } from "../api/auth-api";
import { loginFormSchema, TLoginForm } from "../form/login-form";
import { startTask } from "../redux/auth-slice";

function Login() {
  // const { error, status, successMsg } = useAppSelector((s) => s.auth);
  // const isLoading = useMemo(() => status === "pending", [status]);

  // const dispatch = useAppDispatch();

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors, isValid },
  // } = useForm<TLoginForm>({
  //   mode: "onChange",
  //   defaultValues: {
  //     email: "",
  //     password: "",
  //   },
  //   resolver: yupResolver(loginFormSchema),
  // });

  // const onSubmit = (data: TLoginForm) => {
  //   dispatch(startTask());
  //   dispatch(
  //     login({
  //       email: data.email,
  //       password: data.password,
  //     })
  //   );
  // };

  return (
    <>
      <div className="login-bg">
        <div className="login-modal">Login</div>
      </div>
    </>
  );
}

export default Login;
