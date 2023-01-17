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
import { useAppSelector } from '../../hooks/store-helpers';
import { AuthorizationStatus } from '../../constants';
import Spinner from '../spinner/spinner';

function AppRoutes() {
  return useRoutes(
    [
      {path: PageLink.Main, element: <Main />},
      {path: PageLink.SignIn, element: <SignInPage />},
      {path: PageLink.MyList, element: <PrivateRoute><MyListPage /></PrivateRoute>},
      {path: PageLink.Film, element: <MoviePage />},
      {path: PageLink.AddReview, element: <PrivateRoute><AddReviewPage /></PrivateRoute>},
      {path: PageLink.Player, element: <PlayerPage />},
      {path: PageLink.Film, element: <MoviePage />},
      {path: PageLink.SignOut, element: <SignOutPage />},
      {path: '*', element: <NotFoundPage/>}
    ]
  );
}

function App(): JSX.Element {
  const {authorizationStatus} = useAppSelector((state) => state.authorization);

  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return <Spinner>Waiting authorization..</Spinner>;
  }

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
