import React, {ReactElement} from "react"

const FooterContainer = (props: any): ReactElement => {

    return (
        <div>FooterContainer state2: {props.state2} state3: {props.state3}</div>
    )
}

export default React.memo(FooterContainer)
