import React, {ReactElement} from 'react'
import logo from "../../logo.svg";
import './Header.css'
import routes from "../../routes";
import {NavLink} from "react-router-dom"
import {RouteType} from "../../Types/CommonTypes";

type Props = {}

const Header = (props: any): ReactElement => {
    return (
        <nav>
            <ul>
                {
                    routes.map((route: RouteType, index: number) => {
                        if (route.isVisibleOnLink) {
                            return (
                                <li key={`header-route-links-${index}`}>
                                    <NavLink to={route.path}>{route.pageName}</NavLink>
                                </li>)
                        }
                        return null
                    })
                }
                <li>Header state2: {props.state2} State3: {props.state3}</li>
            </ul>
        </nav>
    )
}

export default Header
