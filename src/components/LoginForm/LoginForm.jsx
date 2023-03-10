import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import { Link } from 'react-router-dom';
import {
  FormTitle,
  FormWrapper,
  FormBtn,
  FormInfo,
  FormInput,
} from '../RegisterForm/RegisterForm.style';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormWrapper onSubmit={handleSubmit} autoComplete="off">
      <FormTitle>Log In</FormTitle>
      <FormInfo>
        Lod in account to enjoy all the services without any ads for free!
      </FormInfo>
      <label>
        <FormInput
          type="email"
          name="email"
          label="Email"
          size="small"
          required
        />
      </label>
      <label>
        <FormInput
          type="password"
          name="password"
          label="Password"
          size="small"
          required
        />
      </label>
      <FormBtn type="submit">Log In</FormBtn>
      <FormInfo>
        Don't Have An Account? <Link to="/register">Register</Link>
      </FormInfo>
    </FormWrapper>
  );
};
