import { useDispatch } from "react-redux"
import { resetOption, setOption } from "../../middlewares/redux/actions"
import s from "./css/Card.module.css"

export const Menu = () => {
    const dispatch = useDispatch()
    return (
        <>

            <div 
                className={s.divH2}
                onClick={()=>{return (
                    dispatch(resetOption()),
                    document.querySelector('#profileLalo').style.transform='translateX(-30vw)',
                    document.querySelector('#navCont').style.transform='translateX(0)'
                    )}}
            >
                <h2>Home</h2>
            </div>

            <div 
                className={s.divH2}
                onClick={()=>{return (
                    dispatch(setOption('bio')),
                    document.querySelector('#profileLalo').style.transform='translateX(-30vw)',
                    document.querySelector('#navCont').style.transform='translateX(0)'
                )}}
            >
                <h2>Bio</h2>
            </div>

            <div 
                className={s.divH2}
                onClick={()=>{return (
                    dispatch(setOption('contact')),
                    document.querySelector('#profileLalo').style.transform='translateX(-30vw)',
                    document.querySelector('#navCont').style.transform='translateX(0)'
                    )}}
            >
                <h2>Contact</h2>
            </div>
        </>
    )
}