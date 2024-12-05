import { createBrowserRouter, RouterProvider } from "react-router";
import SignUp from "./Pages/SignUp/SignUp";
import Layout from "./Components/Layout/Layout";
import { Toaster } from "react-hot-toast";
import SignIn from "./Pages/SignIn/SignIn";
import Home from "./Pages/Home/Home";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import GuestRoute from "./Components/GuestRoute/GuestRoute";
import UserProvider from "./Context/User.context";
import CartProvider from "./Context/Cart.contect";
import Cart from "./Pages/Cart/Cart";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        { index: true, element: <Home /> },
        { path: "/cart", element: <Cart /> },
      ],
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
        { path: "/signIn", element: <SignIn /> },
      ],
    },
  ]);
  return (
    <>
      <UserProvider>
        <CartProvider>
          <RouterProvider router={routes}></RouterProvider>
        </CartProvider>
      </UserProvider>
      <Toaster />
    </>
  );
}

export default App;
