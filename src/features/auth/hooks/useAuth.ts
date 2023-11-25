import { useAppSelector } from "app/store/hooks";

export function useIsAuth() {
  const { token, userDetails } = useAppSelector((state) => state.auth);

  return !!token && !!userDetails;
}

export function useLoggedInUser() {
  const user = useAppSelector((state) => state.auth.userDetails);

  return user;
}

export function useFormattedFullName() {
  const user = useAppSelector((state) => state.auth.userDetails);

  if (!user) return "";
  return `${user.firstname} ${user.lastname}`;
}
