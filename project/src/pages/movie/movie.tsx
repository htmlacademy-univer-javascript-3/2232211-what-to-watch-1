import Logo from '../../components/logo/logo';
import Header from '../../components/header/header';
import MovieButton from '../../components/buttons/movie-button';
import PlayIcon from '../../components/icons/play-icon';
import AddIcon from '../../components/icons/add-icon';
import Copyright from '../../components/copyright/copyright';
import { moviePageMovieItems } from '../../mocks/movie-items';
import { firstColumnReviews, secondColumnReviews } from '../../mocks/reviews';

export default function MoviePage() {
  return (
    <>
      <section className='film-card film-card--full'>
        <div className='film-card__hero'>

          <h1 className='visually-hidden'>WTW</h1>

          <Header userAvatarImageSource='img/avatar.jpg' logoHref='main.html' />

          <div className='film-card__bg'>
            <img src='img/bg-the-grand-budapest-hotel.jpg' alt='The Grand Budapest Hotel'/>
          </div>

          <div className='film-card__wrap'>
            <div className='film-card__desc'>
              <h2 className='film-card__title'>The Grand Budapest Hotel</h2>
              <p className='film-card__meta'>
                <span className='film-card__genre'>Drama</span>
                <span className='film-card__year'>2014</span>
              </p>

              <div className='film-card__buttons'>
                <MovieButton icon={<PlayIcon/>}>
                  Play
                </MovieButton>
                <MovieButton icon={<AddIcon/>} moviesListCount={9}>
                  My list
                </MovieButton>
                <a href='add-review.html' className='btn film-card__button'>
                  Add review
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='film-card__wrap film-card__translate-top'>
          <div className='film-card__info'>
            <div className='film-card__poster film-card__poster--big'>
              <img src='img/the-grand-budapest-hotel-poster.jpg' alt='The Grand Budapest Hotel poster' width='218' height='327'/>
            </div>

            <div className='film-card__desc'>
              <nav className='film-nav film-card__nav'>
                <ul className='film-nav__list'>
                  <li className='film-nav__item film-nav__item--active'>
                    <a href='#' className='film-nav__link'>Overview</a>
                  </li>
                  <li className='film-nav__item'>
                    <a href='#' className='film-nav__link'>Details</a>
                  </li>
                  <li className='film-nav__item'>
                    <a href='#' className='film-nav__link'>Reviews</a>
                  </li>
                </ul>
              </nav>

              {/* Задел под state manager (в данном случае Redux) */}
              {/*<OverviewInfo />*/}
              {/*<DetailsInfo />*/}
              <ReviewsInfo />
            </div>
          </div>
        </div>
      </section>

      <div className='page-content'>
        <section className='catalog catalog--like-this'>
          <h2 className='catalog__title'>More like this</h2>

          <div className='catalog__films-list'>
            {moviePageMovieItems}
          </div>
        </section>

        <footer className='page-footer'>
          <Logo href='main.html' light />
          <Copyright />
        </footer>
      </div>
    </>
  );
}

// function OverviewInfo() {
//   return (
//     <>
//       <div className='film-rating'>
//         <div className='film-rating__score'>8,9</div>
//         <p className='film-rating__meta'>
//           <span className='film-rating__level'>Very good</span>
//           <span className='film-rating__count'>240 ratings</span>
//         </p>
//       </div>
//
//       <div className='film-card__text'>
//         <p>
//           In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge
//           Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.
//         </p>
//         <p>
//           Gustave prides himself on providing first-class service to the hotel&apos;s guests, including satisfying the
//           sexual needs of the many elderly women who stay there. When one of Gustave&apos;s lovers dies mysteriously,
//           Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.
//         </p>
//         <p className='film-card__director'>
//           <strong>Director: Wes Anderson</strong>
//         </p>
//         <p className='film-card__starring'>
//           <strong>Starring: Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other</strong>
//         </p>
//       </div>
//     </>
//   );
// }

// function DetailsInfo() {
//   return (
//     <div className='film-card__text film-card__row'>
//       <div className='film-card__text-col'>
//         <p className='film-card__details-item'>
//           <strong className='film-card__details-name'>
//             Director
//           </strong>
//           <span className='film-card__details-value'>
//             Wes&nbsp;Anderson
//           </span>
//         </p>
//         <p className='film-card__details-item'>
//           <strong className='film-card__details-name'>
//             Starring
//           </strong>
//           <span className='film-card__details-value'>
//             Bill&nbsp;Murray,
//             Edward&nbsp;Norton,
//             Jude&nbsp;Law,
//             Willem&nbsp;Dafoe,
//             Saoirse&nbsp;Ronan,
//             Tony&nbsp;Revoloru,
//             Tilda&nbsp;Swinton,
//             Tom&nbsp;Wilkinson,
//             Owen&nbsp;Wilkinson,
//             Adrien&nbsp;Brody,
//             Ralph&nbsp;Fiennes,
//             Jeff&nbsp;Goldblum
//           </span>
//         </p>
//       </div>
//
//       <div className='film-card__text-col'>
//         <p className='film-card__details-item'>
//           <strong className='film-card__details-name'>
//             Run&nbsp;Time
//           </strong>
//           <span className='film-card__details-value'>
//             1h&nbsp;39m
//           </span>
//         </p>
//         <p className='film-card__details-item'>
//           <strong className='film-card__details-name'>
//             Genre
//           </strong>
//           <span className='film-card__details-value'>
//             Comedy
//           </span>
//         </p>
//         <p className='film-card__details-item'>
//           <strong className='film-card__details-name'>
//             Released
//           </strong>
//           <span className='film-card__details-value'>
//             2014
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// }

function ReviewsInfo() {
  return (
    <div className='film-card__reviews film-card__row'>
      <div className='film-card__reviews-col'>
        {firstColumnReviews}
      </div>
      <div className='film-card__reviews-col'>
        {secondColumnReviews}
      </div>
    </div>
  );
}
