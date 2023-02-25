import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import { Link } from 'react-router-dom';
import {
  FormTitle,
  FormWrapper,
  FormBtn,
  FormInfo,
  FormInput,
} from './RegisterForm.style';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormWrapper onSubmit={handleSubmit} autoComplete="off">
      <FormTitle>Create An Account</FormTitle>
      <FormInfo>
        Create an account to enjoy all the services without any ads for free!
      </FormInfo>
      <label>
        <FormInput
          type="text"
          name="name"
          label="Username"
          size="small"
          required
        />
      </label>
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
      <FormBtn type="submit">Register</FormBtn>
      <FormInfo>
        Already Have An Account? <Link to="/login">Sign In</Link>
      </FormInfo>
    </FormWrapper>
  );
};
