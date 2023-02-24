import { AuthNavWrapper, AuthNavLink } from './AuthNav.styled'
export const AuthNav = () => {
    return (
        <AuthNavWrapper>
            <AuthNavLink to="/register">Register</AuthNavLink>
            <AuthNavLink to="/login">Login</AuthNavLink>
        </AuthNavWrapper>
    );
};