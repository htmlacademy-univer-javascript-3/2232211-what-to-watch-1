import { Navigate } from 'react-router-dom';
import { PageLink } from '../../utils/links';
import { AuthorizationStatus } from '../../constants';
import { useAppSelector } from '../../hooks/store-helpers';

type PrivateRouteProps = {
  children: JSX.Element;
};

function PrivateRoute({children}: PrivateRouteProps): JSX.Element {
  const {authorizationStatus} = useAppSelector((state) => state.authorization);

  return authorizationStatus === AuthorizationStatus.Auth
    ? children
    : <Navigate to={PageLink.SignIn} />;
}

export default PrivateRoute;
