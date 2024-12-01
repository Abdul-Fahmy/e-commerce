import { createBrowserRouter, RouterProvider } from "react-router";
import SignUp from "./Pages/SignUp/SignUp";
import Layout from "./Components/Layout/Layout";
import { Toaster } from "react-hot-toast";
import SignIn from "./Pages/SignIn/SignIn";
import Home from "./Pages/Home/Home";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import GuestRoute from "./Components/GuestRoute/GuestRoute";
import UserProvider from "./Context/User.context";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [{ index: true, element: <Home /> }],
    },
    {
      path: "/",
      element: (
        <GuestRoute>
          <Layout />
        </GuestRoute>
      ),
      children: [
        { path: "/signup", element: <SignUp /> },
        { path: "/signin", element: <SignIn /> },
      ],
    },
  ]);
  return (
    <>
      <UserProvider>
        <RouterProvider router={routes}></RouterProvider>
      </UserProvider>
      <Toaster />
    </>
  );
}

export default App;
