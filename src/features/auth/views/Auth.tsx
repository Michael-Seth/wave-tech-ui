import { lazy, useEffect } from "react";
import {
  Navigate,
  Route,
  Routes,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

import { useIsAuth } from "../hooks/useAuth";

const Login = lazy(() => import("./Login"));
// const ForgotPassword = lazy(() => import('./ForgotPassword'));
// const ResetPassword = lazy(() => import('./ResetPassword'));
// const Register = lazy(() => import('./Register'));

function Auth() {
  const navigate = useNavigate();
  const isAuth = useIsAuth();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (isAuth) {
      const redirectTo = searchParams.get("redirectTo");
      if (redirectTo) {
        navigate(redirectTo, { replace: true });
      } else {
        navigate("/app", { replace: true });
      }
    }
  }, [isAuth, navigate, searchParams]);
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      {/* <Route
        path="forgot-password"
        element={
          <SuspensedWithFallback>
            <ForgotPassword />
          </SuspensedWithFallback>
        }
      />

      <Route
        path="reset-password"
        element={
          <SuspensedWithFallback>
            <ResetPassword />
          </SuspensedWithFallback>
        }
      /> */}

      <Route path="*" element={<Navigate to="login" />} />
    </Routes>
  );
}

export default Auth;
