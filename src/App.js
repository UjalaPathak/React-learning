import React  from "react"
import ReactDOM from "react-dom/client"
import "../index.css"
import Header from "./Components/Header"
import Body from "./Components/Body"
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"
import AboutUs from "./Components/AboutUs"
import ContactUs from "./Components/ContactUs"
import Cart from "./Components/Cart"
import Error from "./Components/Error"


//jsx->syntax (html or xml like)
const AppLayoutComponent=()=>{
    return (
       <div>
       <Header/>
       <Outlet/>
       </div>
    );
};
const appRouter = createBrowserRouter( 
    [
        {
            path:'/',
            element:<AppLayoutComponent/>,
            children:[
                {
                    path:'/',
                    element:<Body/>
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
            ],
            errorElement:<Error/>
        },
       
    ]
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)