import { Navigation } from '@mui/icons-material';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { AppBarWrapper, Toolbar } from './AppBar.styled';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Container } from '@mui/material';
import { useAuth } from 'hooks/useAuth';

export const AppBar = () => {
    const { isLoggedIn } = useAuth();

    return (
        <AppBarWrapper position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    <Navigation />
                    {isLoggedIn ? <UserMenu /> : <AuthNav />}
                </Toolbar>
            </Container>
        </AppBarWrapper>
    );
};