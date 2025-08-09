import { Outlet } from "react-router";

const BlankLayout = () => {
  return (
    <div id="blank-layout">
      <Outlet />
    </div>
  );
};

export default BlankLayout;
