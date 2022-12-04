import { Link } from 'react-router-dom';
import { PageLink } from '../../utils/links';

export default function SignOut() {
  return (
    <Link to={PageLink.SignOut} className='user-block__link'>Sign out</Link>
  );
}
