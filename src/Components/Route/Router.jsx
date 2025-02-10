import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import DonationCampaign from "../Donation/DonationCampaign";
import Help from "../Help/Help";
import Login from "../Login/Login";
import Register from "../Register/Register";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
    errorElement: <ErrorPage />,
    children: [
        {
          path: "/",
          element: <Home/>,
        },{
            path:"/donations",
            element:<DonationCampaign></DonationCampaign>
        }
        ,{
            path:"/help",
            element:<Help></Help>
        },{
            path:'/login',
            element:<Login></Login>
        }
        ,{
            path:'/register',
            element:<Register></Register>
        }
      ],
    },
  ]);
  