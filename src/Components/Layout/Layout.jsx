import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

export default function Layout() {
  return (
    <>
      <NavBar />
      <div className="container min-h-[70vh] pb-10 pt-20 ">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
