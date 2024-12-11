import { createBrowserRouter, RouterProvider } from "react-router";
import SignUp from "./Pages/SignUp/SignUp";
import Layout from "./Components/Layout/Layout";
import { Toaster } from "react-hot-toast";
import SignIn from "./Pages/SignIn/SignIn";
import Home from "./Pages/Home/Home";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import GuestRoute from "./Components/GuestRoute/GuestRoute";
import UserProvider from "./Context/User.context";
import CartProvider from "./Context/Cart.context";
import Cart from "./Pages/Cart/Cart";
import Products from "./Pages/Products/Products";
import Categories from "./Pages/Categories/Categories";
import Brands from "./Pages/Brands/Brands";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Checkout from "./Pages/Checkout/Checkout";
import Orders from "./Pages/Orders/Orders";
import CategoryDetails from "./Pages/CategoryDetails/CategoryDetails";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import ResetCode from "./Pages/ResetCode/ResetCode";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";

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
        { path: "products", element: <Products /> },
        { path: "categories", element: <Categories /> },
        { path: "brands", element: <Brands /> },
        { path: "product/:id", element: <ProductDetails /> },
        { path: "checkout", element: <Checkout /> },
        { path: "allorders", element: <Orders /> },
        { path: "category/:id", element: <CategoryDetails /> },
        { path: "cart", element: <Cart /> },
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
        { path: "forgotPassword", element: <ForgotPassword /> },
        { path: "resetCode", element: <ResetCode /> },
        { path: "resetPassword", element: <ResetPassword /> },
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
