import Logo from '../logo/logo';
import Copyright from '../copyright/copyright';

interface FooterProps {
  logoHref?: string;
}

export default function Footer({logoHref}: FooterProps) {
  return (
    <footer className='page-footer'>
      <Logo href={logoHref} light/>
      <Copyright/>
    </footer>
  );
}
