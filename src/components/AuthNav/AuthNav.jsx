import { AuthNavLink, AuthNavWrapper } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavWrapper>
      <AuthNavLink to="/register">Register</AuthNavLink>
      <AuthNavLink to="/login">Log In</AuthNavLink>
    </AuthNavWrapper>
  );
};
