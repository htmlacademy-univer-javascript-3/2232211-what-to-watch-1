import { Link } from 'react-router-dom';
import { memo } from 'react';

interface LogoProps {
  light?: boolean;
  href?: string;
}

function Logo({light, href}: LogoProps) {
  return (
    <div className='logo'>
      <Link to={href ?? '#'} className={`logo__link ${light && 'logo__link--light'}`}>
        <span className='logo__letter logo__letter--1'>W</span>
        <span className='logo__letter logo__letter--2'>T</span>
        <span className='logo__letter logo__letter--3'>W</span>
      </Link>
    </div>
  );
}

export default memo(Logo);
