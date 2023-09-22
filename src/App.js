import React  from "react"
import ReactDOM from "react-dom/client"
import "../index.css"
import Header from "./Components/Header"
import Body from "./Components/Body"
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import AboutUs from "./Components/AboutUs"
import ContactUs from "./Components/ContactUs"
import Cart from "./Components/Cart"


//jsx->syntax (html or xml like)
const AppLayoutComponent=()=>{
    return (
       <div>
       <Header/>
       <Body/>
       </div>
    );
};
const appRouter = createBrowserRouter( 
    [
        {
            path:'/',
            element:<AppLayoutComponent/>
        },
        {
            path:'/about',
            element:<AboutUs/>
        },
        {
            path:'/contact',
            element:<ContactUs/>
        },
        {
            path:'/cart',
            element:<Cart/>
        }
    ]
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)