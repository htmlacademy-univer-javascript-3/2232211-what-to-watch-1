import AddReviewPage from '../../pages/add-review/add-review';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../../pages/main/main';
import SignInPage from '../../pages/sign-in/sign-in';
import MyListPage from '../../pages/my-list/my-list';
import MoviePage from '../../pages/movie/movie';
import PlayerPage from '../../pages/player/player';
import NotFoundPage from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
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
          path='/login'
          element={<SignInPage />}
        />
        <Route
          path='/mylist'
          element={
            <PrivateRoute>
              <MyListPage />
            </PrivateRoute>
          }
        />
        <Route
          path='/films/:id'
          element={<MoviePage />}
        />
        <Route
          path='/films/:id/review'
          element={<AddReviewPage />}
        />
        <Route
          path='/player/:id'
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
