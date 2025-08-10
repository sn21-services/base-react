import { Outlet } from 'react-router';

const AuthLayout = () => {
  return (
    <div id="auth-layout">
      login
      <Outlet />
    </div>
  );
};

export default AuthLayout;
