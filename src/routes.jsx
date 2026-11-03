import React from 'react'
import { createBrowserRouter } from 'react-router'
import RootLayout from './features/customer/components/layout/RootLayout'
import Home from "./features/customer/pages/Home"
import PageCourse from "./features/customer/pages/Course"
import Login from './features/customer/pages/Login'
import Register from './features/customer/pages/Register'
import AboutUs from './features/customer/pages/AboutUs'
import ContactUs from './features/customer/pages/ContactUs'
import Chapter from './features/customer/pages/Chapter'
import Buy from './features/customer/pages/Buy'
import BasketShop from './features/customer/pages/BasketShop'
import Payment from './features/customer/pages/Payment'
import FinalPayment from './features/customer/pages/FinalPayment'
import PanelUser from './features/customer/pages/PanelUser'
import Alows from './features/customer/pages/Alows'
import Regulation from './features/customer/pages/Regulation'
import AdminLogin from './features/admin/pages/AdminLogin'

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children:[
            {
                index: true,
                element: <Home/>
            },
            {
                path: "year/:yearId",
                element: <PageCourse/>
            },

            {
                path: "login",
                element: <Login/>,
                handle:{hideHeaderFooter:true}
            },
            {
                path: "register",
                element: <Register/>,
                handle: {hideHeaderFooter:true}
            },
            {
                path: "aboutUs",
                element: <AboutUs/>
            },
            {
                path: "contactUs",
                element: <ContactUs/>
            },
            {
                path: "year/:yearId/:titleCase/:numChapter",
                element: <Chapter/>
            },
            {
                path: "year/buy/:yearId",
                element: <Buy/>
            },
            {
                path: "basket-shop",
                element: <BasketShop/>
            },
            {
                path: 'get-address',
                element: <Payment/>
            },
            {
                path: "final-payment",
                element: <FinalPayment/>
            },
            {
                path: "panel-user",
                element: <PanelUser/>,
                handle:{hideHeaderFooter:true}
            },
            {
                path: "page-alows",
                element: <Alows/>
            },
            {
                path: "regulation-site",
                element: <Regulation/>
            }
            
        ]
    },
    {
        path: "/admin/login",
        element: <AdminLogin/>
    },

    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
            {
            index: true,
            element: <AdminDashboard />,
            },
            {
            path: "users",
            element: <Users />,
            },
            {
            path: "books",
            element: <Books />,
            },
            {
            path: "transactions",
            element: <Transactions />,
            },
        ],
    }

])


export default router