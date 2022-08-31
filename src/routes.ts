import React, {lazy, ReactElement} from "react"
import {RouteType} from "./Types/CommonTypes"

const Error404 = lazy(() => import('./pages/Error/404/Error404'))
const HomePage = lazy(() => import('./pages/Home/Home'))
const AboutPage = lazy(() => import('./pages/About/About'))
const ContactPage = lazy(() => import('./pages/Contact/Contact'))

const routes: Array<RouteType> = [
    {path: "/404", element: Error404, pageName: "Error", isVisibleOnLink: false},
    {path: "/", element: HomePage, pageName: "Home", isVisibleOnLink: true},
    {path: "/about", element: AboutPage, pageName: "About", isVisibleOnLink: true},
    {path: "/contact/:id", element: ContactPage, pageName: "Contact", isVisibleOnLink: true},
]

export default routes
