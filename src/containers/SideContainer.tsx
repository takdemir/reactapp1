import React, {ReactElement, useEffect} from "react"
import {user} from "../Types/CommonTypes";

const SideContainer = (props: any): ReactElement => {
    const {user} = props

    useEffect(() => {

    },[])

    return (
        <div>SideContainer name: {user.name}</div>
    )
}

export default SideContainer


/*export class SideContainer2 extends React.Component<any, any>{

    _user: user | undefined;

    componentDidMount() {
        const {user} = this.props
        this._user = user
    }

    render() {
        return <div>SideContainer</div>;
    }
}*/
