import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <>
      <div>404 Not found.</div>
      <Link to='main'>Main page</Link>
    </>
  );
}
