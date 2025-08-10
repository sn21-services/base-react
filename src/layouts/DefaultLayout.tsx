import { Link, Outlet } from 'react-router';

const DefaultLayout = () => {
  return (
    <div id="default-layout">
      <header>
        <Link to="/">Home</Link>
        <Link to="/todo">Todo</Link>
      </header>
      <Outlet />

      <footer>Footer</footer>
    </div>
  );
};

export default DefaultLayout;
