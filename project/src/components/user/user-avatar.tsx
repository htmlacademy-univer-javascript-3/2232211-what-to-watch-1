import { useNavigate } from 'react-router-dom';
import { PageLink } from '../../utils/links';

interface UserAvatarProps {
  imageSource: string;
}

export default function UserAvatar({imageSource}: UserAvatarProps) {
  const navigate = useNavigate();

  return (
    <div className='user-block__avatar' onClick={() => navigate(PageLink.MyList)}>
      <img src={imageSource} alt='User avatar' width='63' height='63'/>
    </div>
  );
}
