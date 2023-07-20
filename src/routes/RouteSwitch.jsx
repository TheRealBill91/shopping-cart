import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Shop } from "../pages/Shop/Shop";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import { Checkout } from "../pages/Checkout/Checkout";
import { Item } from "../pages/Shop/Item";
import { MainLayout } from "../components/MainLayout";
import { ThankYou } from "../pages/Thankyou/ThankYou";

export const RouteSwitch = (props) => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          element: <Home />,
          index: true,
        },
        {
          path: "/shop",
          children: [
            {
              index: true,
              element: <Shop />,
            },
            {
              path: ":watchName",
              element: <Item />,
            },
          ],
        },
        {
          path: "/checkout",
          element: <Checkout />,
        },
        {
          path: "/thankyou",
          element: <ThankYou />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
