import React, {ReactElement} from "react"

const SideContainer = (props: any): ReactElement => {
    const {user} = props

    return (
        <div>SideContainer name: {user.name}</div>
    )
}

export default SideContainer
