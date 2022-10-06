interface UserAvatarProps {
  imageSource: string;
}

export default function UserAvatar({imageSource}: UserAvatarProps) {
  return (
    <div className='user-block__avatar'>
      <img src={imageSource} alt='User avatar' width='63' height='63'/>
    </div>
  );
}
