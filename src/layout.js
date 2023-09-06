import { useRoutes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ListRoutes from './listroutes';

const Layout = () => {
  const { currentUser } = useSelector((state) => state.sessionUser);
  const isaunthenticate = currentUser?.signedin || false;
  const routing = useRoutes(ListRoutes(isaunthenticate));
  return (
    <>
      {routing}
    </>
  );
};

export default Layout;
