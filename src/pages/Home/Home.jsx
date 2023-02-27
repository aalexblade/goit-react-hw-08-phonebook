import { useAuth } from 'hooks/useAuth';
import {
  HeroTitle,
  HeroWrapper,
  InfoWrapper,
  BtnList,
  RegisterInfo,
  HeroBtn,
} from './Home.styled';

export default function Home() {
  const { isLoggedIn } = useAuth();

  return (
    <HeroWrapper>
      <HeroTitle>
        Welcome to PhoneBook{' '}
        {/* <span role="img" aria-label="Greeting icon">
          💻
        </span> */}
      </HeroTitle>
      <InfoWrapper>
          <div>
          <RegisterInfo>
            To use the application, you need to log in or register. To quickly
            check the functionality, you can log in with a test login. <br />
            Login:  world@hello.com <br />
            Password: qweqweqwe
          </RegisterInfo>
          {!isLoggedIn && (
            <BtnList>
              <li>
                <HeroBtn to="/login">Log In</HeroBtn>
              </li>
              <li>
                <HeroBtn to="/register">Register</HeroBtn>
              </li>
            </BtnList>
          )}
        </div>
      </InfoWrapper>
    </HeroWrapper>
  );
}
