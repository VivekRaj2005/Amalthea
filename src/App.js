import React from "react";
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import Sponsor_Page from "./Screens/Sponsor_Page";
import Event_Page from "./Screens/Event_Page";
import Conclave_Page from "./Screens/Conclave_Page";
import Symposium_Page from "./Screens/Symposium_Page";
import Tech_Expo_Page from "./Screens/Tech_Expo_Page";
import Home_Page from "./Screens/Home_Page";

const router = createBrowserRouter([
    {path:'/' , element:<Home_Page/>},
    {path:'/Events' , element:<Event_Page/>},
    {path:'/Sponsors' , element:<Sponsor_Page/>},
    {path:'/Conclave', element:<Conclave_Page/>},
    {path:'/Symposium', element:<Symposium_Page/>},
    {path:'/Tech Expo', element:<Tech_Expo_Page/>}
])

const App = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default App;