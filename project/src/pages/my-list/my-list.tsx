import Footer from '../../components/footer/footer';
import { myListPageMovieItems } from '../../mocks/movie-items';
import Logo from '../../components/logo/logo';
import UserAvatar from '../../components/user/user-avatar';
import SignOut from '../../components/sign-out/sign-out';

export default function MyListPage() {
  return (
    <div className='user-page'>
      <header className='page-header user-page__head'>
        <Logo href='main' />

        <h1 className='page-title user-page__title'>My list <span className='user-page__film-count'>9</span></h1>
        <ul className='user-block'>
          <li className='user-block__item'>
            <UserAvatar imageSource='img/avatar.jpg' />
          </li>
          <li className='user-block__item'>
            <SignOut />
          </li>
        </ul>
      </header>

      <section className='catalog'>
        <h2 className='catalog__title visually-hidden'>Catalog</h2>

        <div className='catalog__films-list'>
          {myListPageMovieItems}
        </div>
      </section>

      <Footer logoHref='main' />
    </div>
  );
}
