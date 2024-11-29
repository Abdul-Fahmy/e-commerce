import { createBrowserRouter, RouterProvider } from "react-router";
import SignUp from "./Pages/SignUp/SignUp";
import Layout from "./Components/Layout/Layout";
import { Toaster } from "react-hot-toast";
import SignIn from "./Pages/SignIn/SignIn";
import Home from "./Pages/Home/Home";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/signup", element: <SignUp /> },
        { path: "/signin", element: <SignIn /> },
        { index: true, element: <Home /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
      <Toaster />
    </>
  );
}

export default App;
