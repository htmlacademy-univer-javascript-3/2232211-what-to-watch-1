import AddReviewPage from '../../pages/add-review/add-review';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../../pages/main/main';
import SignInPage from '../../pages/sign-in/sign-in';
import MyListPage from '../../pages/my-list/my-list';
import MoviePage from '../../pages/movie/movie';
import PlayerPage from '../../pages/player/player';
import NotFoundPage from '../../pages/not-found/not-found';
import { PageLink } from '../../utils/links';
import PrivateRoute from '../private-route/private-route';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={PageLink.main}
          element={
            <Main
              movieName='The Grand Budapest Hotel'
              movieBackgroundSource='img/bg-the-grand-budapest-hotel.jpg'
              moviePosterSource='img/the-grand-budapest-hotel-poster.jpg'
              movieGenre='Drama'
              movieReleaseYear={2014}
              moviesListCount={9}
            />
          }
        />
        <Route
          path={PageLink.signIn}
          element={<SignInPage />}
        />
        <Route
          path={PageLink.myList}
          element={
            <PrivateRoute>
              <MyListPage />
            </PrivateRoute>
          }
        />
        <Route
          path={PageLink.film}
          element={<MoviePage />}
        />
        <Route
          path={PageLink.addReview}
          element={<AddReviewPage />}
        />
        <Route
          path={PageLink.player}
          element={<PlayerPage />}
        />
        <Route
          path='*'
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
