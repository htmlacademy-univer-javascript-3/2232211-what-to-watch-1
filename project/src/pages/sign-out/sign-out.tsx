import { useAppDispatch } from '../../hooks/store-helpers';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { logoutAction } from '../../store/slices/authorization-slice';
import { PageLink } from '../../utils/links';

export default function SignOutPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(logoutAction())
      .then(() => {
        navigate(PageLink.Main, { replace: true });
      });
  }, [dispatch, navigate]);

  return <span />;
}
