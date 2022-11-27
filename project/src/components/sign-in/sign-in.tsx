import { Link } from 'react-router-dom';
import { PageLink } from '../../utils/links';

export default function SignIn() {
  return (
    <Link to={PageLink.SignIn} className='user-block__link'>Sign in</Link>
  );
}
