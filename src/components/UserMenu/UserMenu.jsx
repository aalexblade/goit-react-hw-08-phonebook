import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { useAuth } from 'hooks/useAuth';
import { MenuWrapper, MenuText, MenuSettingItem } from './UserMenu.styled';
import {
  Box,
  Tooltip,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import { useState } from 'react';

export const UserMenu = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <MenuWrapper>
      <MenuText>Welcome, {user.email}</MenuText>

      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar
              alt={`${user.name}`}
              src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
            />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: '45px' }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          <MenuItem onClick={handleCloseUserMenu}>
            <Typography textAlign="center" component="div">
              {
                <MenuSettingItem
                  onClick={() => {
                    dispatch(logOut());
                  }}
                >
                  Logout
                </MenuSettingItem>
              }
            </Typography>
          </MenuItem>
        </Menu>
      </Box>

     
    </MenuWrapper>
  );
};