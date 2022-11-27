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
import SignOutPage from '../../pages/sign-out/sign-out';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={PageLink.Main}
          element={
            <Main />
          }
        />
        <Route
          path={PageLink.SignIn}
          element={<SignInPage />}
        />
        <Route
          path={PageLink.MyList}
          element={
            <PrivateRoute>
              <MyListPage />
            </PrivateRoute>
          }
        />
        <Route
          path={PageLink.Film}
          element={<MoviePage />}
        />
        <Route
          path={PageLink.AddReview}
          element={<AddReviewPage />}
        />
        <Route
          path={PageLink.Player}
          element={<PlayerPage />}
        />
        <Route
          path={PageLink.SignOut}
          element={<SignOutPage />}
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
