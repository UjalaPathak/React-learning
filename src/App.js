import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import Cart from "./Components/Cart";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";


//import Gorcery from "./Gorcery"

//jsx->syntax (html or xml like)
const AppLayoutComponent = () => {
  return (
    <Provider store={appStore}>
   
    <div>
      <Header />
      <Outlet />
    </div>
    </Provider>
  );
};

const Gorcery = lazy(() => import("./Gorcery"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayoutComponent />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/resturant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/Gorcery",
        element: (
          <Suspense fallback={<h1>Loading ....</h1>}>
            <Gorcery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
