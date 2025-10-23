import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import AllGame from "../Pages/AllGame";


export const router = createBrowserRouter([
  {
    path: "/",
    Component:HomeLayout,
    children:[
           {
            index:true,
            path:'/',
            element: <Home></Home>
           },
           {
             path:'/all-game',
             element: <AllGame></AllGame>
           }
           
    ]
  },
]);
