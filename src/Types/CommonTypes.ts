import React, {ReactElement} from "react";

export type RouteType = {
    path: string,
    element: React.LazyExoticComponent<() => ReactElement>,
    pageName: string,
    isVisibleOnLink: boolean
}

export type user = {name: string, lastName: string, age?: number | null}
