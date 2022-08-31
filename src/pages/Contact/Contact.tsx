import React, {ReactElement, useEffect} from "react"
import "./Contact.css"
import {useParams} from "react-router-dom"
import Header from "../../components/Header/Header";

const Contact = (): ReactElement => {
    const {id} = useParams();
    //console.log(id, 'params')

    useEffect(() => {

/*        axios.get("http://abc.com/contact/" + id)
            .then((result: any) => {

        })*/

        return () => {

        };
    }, []);


    return (
        <div>
            Contact page
        </div>
    )
}

export default Contact
