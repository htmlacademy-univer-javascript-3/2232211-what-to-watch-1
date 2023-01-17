import { useAppSelector } from '../../hooks/store-helpers';
import { AuthorizationStatus } from '../../constants';
import { Navigate } from 'react-router-dom';
import { PageLink } from '../../utils/links';

type UnauthorizedRouteProps = {
  children: JSX.Element;
};

function UnauthorizedRoute({children}: UnauthorizedRouteProps): JSX.Element {
  const {authorizationStatus} = useAppSelector((state) => state.authorization);

  return authorizationStatus === AuthorizationStatus.Auth
    ? <Navigate to={PageLink.Main} />
    : children;
}

export default UnauthorizedRoute;
