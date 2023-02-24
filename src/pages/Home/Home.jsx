import { useAuth } from 'hooks/useAuth';
import {
  HeroTitle,
  HeroWrapper,
  InfoWrapper,
  Info,
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
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </HeroTitle>
      <InfoWrapper>
        <Info>
          Our app will make your life easier and save your contacts more
          convenient thanks to cloud storage. Therefore, you can access your
          contacts wherever you are and from any device.
        </Info>
        <div>
          <RegisterInfo>
            To use the application, you need to log in or register. To quickly
            check the functionality, you can log in with a test login. <br />
            Login: qwetest@qwe.com <br />
            Password: qweqwe123
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
};