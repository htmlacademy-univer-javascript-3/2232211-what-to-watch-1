import AddReviewPage from '../../pages/add-review/add-review';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import Main from '../../pages/main/main';
import SignInPage from '../../pages/sign-in/sign-in';
import MyListPage from '../../pages/my-list/my-list';
import MoviePage from '../../pages/movie/movie';
import PlayerPage from '../../pages/player/player';
import NotFoundPage from '../../pages/not-found/not-found';
import { PageLink } from '../../utils/links';
import PrivateRoute from '../private-route/private-route';
import SignOutPage from '../../pages/sign-out/sign-out';
import { useAppDispatch, useAppSelector } from '../../hooks/store-helpers';
import { AuthorizationStatus } from '../../constants';
import Spinner from '../spinner/spinner';
import UnauthorizedRoute from '../unauthorized-route/unauthorized-route';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import React from 'react';
import { getFavoriteMoviesAction } from '../../store/slices/favorite-movies-slice';

function AppRoutes() {
  return useRoutes(
    [
      {path: PageLink.Main, element: <Main />},
      {path: PageLink.SignIn, element: <UnauthorizedRoute><SignInPage /></UnauthorizedRoute>},
      {path: PageLink.MyList, element: <PrivateRoute><MyListPage /></PrivateRoute>},
      {path: PageLink.Film, element: <MoviePage />},
      {path: PageLink.AddReview, element: <PrivateRoute><AddReviewPage /></PrivateRoute>},
      {path: PageLink.Player, element: <PlayerPage />},
      {path: PageLink.SignOut, element: <PrivateRoute><SignOutPage /></PrivateRoute>},
      {path: '*', element: <NotFoundPage/>}
    ]
  );
}

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  const { authorizationStatus } = useAppSelector((state) => state.authorization);
  if (authorizationStatus === AuthorizationStatus.Auth) {
    dispatch(getFavoriteMoviesAction());
  }

  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return <Spinner>Waiting authorization..</Spinner>;
  }

  return (
    <BrowserRouter>
      <AppRoutes />
      <ToastContainer
        position='top-center'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover
        theme='light'
      />
    </BrowserRouter>
  );
}

export default App;
