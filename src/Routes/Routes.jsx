import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import AllGame from "../Pages/AllGame";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NotFound from "../Pages/NotFound";


export const router = createBrowserRouter([
  {
    path: "/",
    Component:HomeLayout,
    children:[
           {
            index:true,
            path:'/',
            element: <Home></Home>,
            loader: ()=> fetch('/data.json')
           },
           {
             path:'/all-game',
             element: <AllGame></AllGame>,
             loader: ()=> fetch('/data.json')
           },
           {
            path:'/login',
            element: <Login></Login>
           },
           {
            path:'/register',
            element: <Register></Register>
           },
           {
            path:'/*',
            element: <NotFound></NotFound>
           }
           
    ]
  },
]);
