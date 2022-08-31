import React, {ReactElement, Suspense} from "react"
import {Route, Routes} from "react-router-dom";
import routes from "../routes";
import {RouteType} from "../Types/CommonTypes";

const loading = (
    <div>loading</div>
)

const ContentContainer = (props: any): ReactElement => {
    return (
        <Suspense fallback={loading}>
            <Routes>
                {
                    routes.map((route: RouteType, index: number) => {
                        return (
                            <Route
                                key={`routes-${index}`}
                                path={route.path}
                                element={<route.element/>}
                            />
                        )
                    })
                }
            </Routes>
        </Suspense>
    )
}

export default ContentContainer
