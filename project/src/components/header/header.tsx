import Logo from '../logo/logo';
import UserAvatar from '../user/user-avatar';
import SignOut from '../sign-out/sign-out';
import { ReactNode } from 'react';

interface HeaderProps {
  userAvatarImageSource: string;
  logoHref?: string;
  navigation?: ReactNode;
}

export default function Header({userAvatarImageSource, logoHref, navigation}: HeaderProps) {
  return (
    <header className='page-header film-card__head'>
      <Logo href={logoHref} />
      {navigation}
      <ul className='user-block'>
        <li className='user-block__item'>
          <UserAvatar imageSource={userAvatarImageSource} />
        </li>
        <li className='user-block__item'>
          <SignOut />
        </li>
      </ul>
    </header>
  );
}
