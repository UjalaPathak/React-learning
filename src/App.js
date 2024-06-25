import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
//import AboutUs from "./Components/AboutUs";
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

//lazy loading
//chunking
//dynamic bundling
//on demand loading
//code splitting
//in this case index.js will not have the gorcery code  for that another bundler will be created as grocery.js which you can see in dist file s
//distruibut the application into smaller chunks(about.js and gorcery.js their indiviual bunndlers)
const Gorcery = lazy(() => import("./Gorcery"));
const AboutUs = lazy(() => import("./Components/AboutUs"));
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
        element: (
          <Suspense fallback={<h1>Loading ....</h1>}>
            <AboutUs />
          </Suspense>
        ),
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
