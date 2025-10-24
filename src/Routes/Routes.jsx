import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import AllGame from "../Pages/AllGame";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NotFound from "../Pages/NotFound";
import Details from "../Pages/Details";
import PrivateRoutes from "../Provider/PrivateRoutes";
import Profile from "../Pages/Profile";
import About from "../Pages/About";
import Loading from "../Components/Loading/Loading";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:HomeLayout,
    children:[
           {
            index:true,
            path:'/',
            element: <Home></Home>,
            loader: ()=> fetch('/data.json'),
            hydrateFallbackElement: <Loading></Loading>
           },
           {
             path:'/all-game',
             element: <AllGame></AllGame>,
             loader: ()=> fetch('/data.json'),
             hydrateFallbackElement: <Loading></Loading>
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
            path:'/details/:id',
            element: <PrivateRoutes> <Details></Details> </PrivateRoutes> ,
            loader: ()=> fetch('/data.json'),
            hydrateFallbackElement: <Loading></Loading>
           },
           {

            path:'/profile',
            element: <PrivateRoutes> <Profile></Profile> </PrivateRoutes>

           },
           {

            path:'/about',
            element: <About></About>

           },
           {
            path:'/*',
            element: <NotFound></NotFound>
           }
           
    ]
  },
]);
