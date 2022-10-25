import Logo from '../../components/logo/logo';
import { Link } from 'react-router-dom';
import { PageLink } from '../../utils/links';

export default function HeadGuestPage() {
  return (
    <section className='film-card'>
      <div className='film-card__bg'>
        <img src='img/bg-header.jpg' alt='Header background'/>
      </div>

      <h1 className='visually-hidden'>WTW</h1>

      <header className='page-header'>
        <Logo />

        <div className='user-block'>
          <Link to={PageLink.signIn} className='user-block__link'>Sign in</Link>
        </div>
      </header>
    </section>
  );
}
