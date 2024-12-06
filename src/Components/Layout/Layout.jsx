import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

export default function Layout() {
  return (
    <>
      <NavBar />
      <div className="container min-h-[60vh] pb-10 pt-20">
        <Outlet />
      </div>
    </>
  );
}
