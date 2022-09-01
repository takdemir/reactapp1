import React, {ReactElement, useEffect} from "react"
import "./Contact.css"
import {useParams} from "react-router-dom"
import Header from "../../components/Header/Header"

import {useSelector} from "react-redux"
import {AuthStateType} from "../../redux/states/AuthState";
import {CommonStateType} from "../../redux/states/CommonState";

const Contact = (): ReactElement => {
    const {id} = useParams();
    //console.log(id, 'params')

    const auth: AuthStateType = useSelector((state: any) => state.AuthReducer)
    const common: CommonStateType = useSelector((state: any) => state.CommonReducer)

    useEffect(() => {

/*        axios.get("http://abc.com/contact/" + id)
            .then((result: any) => {

        })*/

        return () => {

        };
    }, []);


    return (
        <div>
            Contact page. Reducer token: {auth.token} -- {common.email}
        </div>
    )
}

export default Contact
