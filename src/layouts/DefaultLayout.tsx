import { Link, Outlet } from 'react-router';

const DefaultLayout = () => {
  return (
    <div id="default-layout">
      <header>
        <Link to="/">Home</Link>
        <Link to="/todo">Todo</Link>
      </header>
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
