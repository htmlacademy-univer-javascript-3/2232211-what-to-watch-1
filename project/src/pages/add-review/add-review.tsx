import Header from '../../components/header/header';
import Rating from '../../components/rating/rating';

function Navigation() {
  return (
    <nav className='breadcrumbs'>
      <ul className='breadcrumbs__list'>
        <li className='breadcrumbs__item'>
          <a href='film-page' className='breadcrumbs__link'>The Grand Budapest Hotel</a>
        </li>
        <li className='breadcrumbs__item'>
          <a className='breadcrumbs__link'>Add review</a>
        </li>
      </ul>
    </nav>
  );
}

export default function AddReviewPage() {
  return (
    <section className='film-card film-card--full'>
      <div className='film-card__header'>
        <div className='film-card__bg'>
          <img src='img/bg-the-grand-budapest-hotel.jpg' alt='The Grand Budapest Hotel'/>
        </div>

        <h1 className='visually-hidden'>WTW</h1>

        <Header logoHref='main' userAvatarImageSource='img/avatar.jpg' navigation={<Navigation />} />

        <div className='film-card__poster film-card__poster--small'>
          <img src='img/the-grand-budapest-hotel-poster.jpg' alt='The Grand Budapest Hotel poster' width='218' height='327'/>
        </div>
      </div>

      <div className='add-review'>
        <form action='#' className='add-review__form'>
          <Rating
            from={1}
            to={10}
            checked={8}
          />

          <div className='add-review__text'>
            <textarea className='add-review__textarea' name='review-text' id='review-text' placeholder='Review text'></textarea>
            <div className='add-review__submit'>
              <button className='add-review__btn' type='submit'>Post</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
