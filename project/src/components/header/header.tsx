import Logo from '../logo/logo';
import UserAvatar from '../user/user-avatar';
import SignOut from '../sign-out/sign-out';
import { ReactNode } from 'react';
import { useAppSelector } from '../../hooks/store-helpers';
import { AuthorizationStatus } from '../../constants';
import SignIn from '../sign-in/sign-in';

interface HeaderProps {
  userAvatarImageSource: string;
  logoHref?: string;
  navigation?: ReactNode;
}

interface UserLinkProps {
  authorizationStatus: AuthorizationStatus;
  userAvatarImageSource: string;
}

function UserBlockItems({authorizationStatus, userAvatarImageSource}: UserLinkProps) {
  if (authorizationStatus !== AuthorizationStatus.Auth) {
    return (
      <li className='user-block__item'>
        <SignIn/>
      </li>
    );
  }

  return (
    <>
      <li className='user-block__item'>
        <UserAvatar imageSource={userAvatarImageSource} />
      </li>
      <li className='user-block__item'>
        <SignOut />
      </li>
    </>
  );
}

export default function Header({userAvatarImageSource, logoHref, navigation}: HeaderProps) {
  const { authorizationStatus } = useAppSelector((state) => state.authorization);

  return (
    <header className='page-header film-card__head'>
      <Logo href={logoHref} />
      {navigation}
      <ul className='user-block'>
        <UserBlockItems
          authorizationStatus={authorizationStatus}
          userAvatarImageSource={userAvatarImageSource}
        />
      </ul>
    </header>
  );
}
