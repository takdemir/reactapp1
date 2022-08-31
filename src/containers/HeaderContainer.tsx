import React, {ReactElement} from "react"

import Header from "../components/Header/Header";

const HeaderContainer = (props: any): ReactElement => {
    return (<Header {...props} />)
}

export default HeaderContainer
