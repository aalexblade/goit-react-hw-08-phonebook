import { useAuth } from 'hooks/useAuth';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { NavWrapper, HomeLogo, NavItem, LogoText } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavWrapper>
      <HomeLogo to="/">
        <PinterestIcon  />
        <LogoText
          variant="h6"
          noWrap
          style={{ textDecoration: 'none', color: '#fff', fontSize: '24px' }}
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.1rem',
          }}
        >
          PhoneBook
        </LogoText>
      </HomeLogo>

      {isLoggedIn && <NavItem to="/contacts">Contacts</NavItem>}
    </NavWrapper>
  );
};