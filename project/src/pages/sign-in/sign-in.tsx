import Logo from '../../components/logo/logo';
import Footer from '../../components/footer/footer';
import { PageLink } from '../../utils/links';
import { FormEvent, useState } from 'react';
import { useAppDispatch } from '../../hooks/store-helpers';
import { useNavigate } from 'react-router-dom';
import { AuthData } from '../../types/auth-data';
import { loginAction } from '../../store/slices/authorization-slice';

interface SignInPageProps {
  showInvalidEmailError?: boolean;
  showCantRecognizeMessage?: boolean;
}

export default function SignInPage({showInvalidEmailError, showCantRecognizeMessage}: SignInPageProps) {
  const [emailField, setEmailField] = useState<string>('');
  const [passwordField, setPasswordField] = useState<string>('');

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (emailField && passwordField) {
      onSubmit({
        email: emailField,
        password: passwordField,
      });
      navigate(PageLink.Main);
    }
  };

  return (
    <div className='user-page'>
      <header className='page-header user-page__head'>
        <Logo href={PageLink.Main} />

        <h1 className='page-title user-page__title'>Sign in</h1>
      </header>

      <div className='sign-in user-page__content'>
        <form action='#' className='sign-in__form' onSubmit={handleSubmit}>
          {showInvalidEmailError &&
            <div className='sign-in__message'>
              <p>Please enter a valid email address</p>
            </div>}
          {showCantRecognizeMessage &&
            <div className='sign-in__message'>
              <p>
                We can’t recognize this email
                and password combination. Please try again.
              </p>
            </div>}
          <div className='sign-in__fields'>
            <div className={`sign-in__field ${showInvalidEmailError && 'sign-in__field--error'}`}>
              <input
                className='sign-in__input'
                type='email'
                placeholder='Email address'
                name='user-email'
                id='user-email'
                value={emailField}
                onChange={(event) => setEmailField(event.target.value)}
              />
              <label
                className='sign-in__label visually-hidden'
                htmlFor='user-email'
              >
                Email address
              </label>
            </div>
            <div className='sign-in__field'>
              <input
                className='sign-in__input'
                type='password'
                placeholder='Password'
                name='user-password'
                id='user-password'
                value={passwordField}
                onChange={(event) => setPasswordField(event.target.value)}
              />
              <label
                className='sign-in__label visually-hidden'
                htmlFor='user-password'
              >
                Password
              </label>
            </div>
          </div>
          <div className='sign-in__submit'>
            <button className='sign-in__btn' type='submit'>Sign in</button>
          </div>
        </form>
      </div>

      <Footer logoHref={PageLink.Main} />
    </div>
  );
}
