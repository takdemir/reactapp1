import React, {useState, useMemo, useEffect, useCallback} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import './App.css'
import HeaderContainer from "./containers/HeaderContainer"
import ContentContainer from "./containers/ContentContainer"
import SideContainer from "./containers/SideContainer"
import FooterContainer from "./containers/FooterContainer"
import {setToken} from "./redux/actions/AuthActions"
import {setEmail} from "./redux/actions/CommonActions"


const App = () => {

    /*    const _handleClick = (event: React.MouseEvent, message: string): void => {
            event.preventDefault()
            alert(message);
        }*/

    //console.log(window.location.href)
    const navigate = useNavigate();
    const location = useLocation();
    //console.log(location, 'location')
    const [page, setPage] = useState<number>(1)
    const [state1, setState1] = useState<string>("")

    const [state2, setState2] = useState<number>(0)
    const [state3, setState3] = useState<number>(0)
    const [user, setUser] = useState<{name: string, lastName: string, age?: number | null}>({
        name: "Taner",
        lastName: "Akdemir",
        age: 41
    })

    const [user2, setUser2] = useState<{name: string, lastName: string, age?: number | null}>({
        name: "Taner",
        lastName: "Akdemir",
        age: 41
    })

    useEffect(() => {
        /*setTimeout(() => {
            setPage(page + 1)
        }, 2000)*/
        //console.log("use effect-1")
        //setPage(page + 1)


        // Component Unmount
        return () => {
            //console.log("Change")
            setUser2(prevState => {
                return {
                    ...prevState,
                    name: "",
                    lastName: "",
                    age: null
                }
            })
        };
    }, []);

    // Component Did Mount
    useEffect(() => {
        /*setTimeout(() => {
            setPage(page + 1)
        }, 2000)*/

        //console.log("New Page: " + page)

    }, [page]);

    useEffect(() => {
        /*setTimeout(() => {
            setPage(page + 1)
        }, 2000)*/

        //console.log("New state1: " + state1)

    }, [state1]);


    const increaseNumber = useCallback(() => {
        console.log(state2)
    }, [state2])

    increaseNumber()

    const Footer = useMemo(() => {
        return <FooterContainer state2={state2} state3={state3}/>
    }, [state2])

    const Header = useMemo(() => {
        return <HeaderContainer state2={state2} state3={state3}/>
    }, [state3])

    const _handleIncreaseState2 = () => {
        setState2(state2 + 1)

    }

    const _handleIncreaseState3 = () => {
        setState3(state3 + 1)
        setPage(page + 1)
    }

    const _handleChangeUsername = () => {
        //let newUser = {...user, ...{name: "Salih Can", age: 40}}
        setUser(prevState => {
            return {
                ...prevState,
                name: "Salih Can"
            }
        })

        setUser2(prevState => {
            return {
                ...prevState,
                name: "Veli"
            }
        })
    }



    return (
        <div>
            {Header}
            <ContentContainer/>
            <SideContainer user={user}/>
            {Footer}
            <button onClick={() => _handleIncreaseState2()}>Increase State2</button>
            <button onClick={() => _handleIncreaseState3()}>Increase State3</button>
            <button onClick={() => _handleChangeUsername()}>Change Username</button>
            <button onClick={() => setEmail("abc@def.com")}>Set Redux Email</button>
            <button onClick={() => setToken("abcd123*yydd3883")}>Set Redux Token</button>
            <button onClick={() => setToken(null)}>Reset Redux Token</button>
            <span>Page Number: {page}</span>
        </div>

    )
}

export default App
