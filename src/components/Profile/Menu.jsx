import { useDispatch, useSelector } from "react-redux"
import { resetOption, setOption } from "../../middlewares/redux/actions"
import { SocialLinks } from "../Utils/SocialLinks"
import s from "./css/Card.module.css"

export const Menu = () => {
    const dispatch = useDispatch()
    const language = useSelector(state=>state.language)
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
                <h2>
                    {
                        language==='EN'?
                        'Home' : 'Inicio'
                    }
                </h2>
            </div>

            <div 
                className={s.divH2}
                onClick={()=>{return (
                    dispatch(setOption('bio')),
                    document.querySelector('#profileLalo').style.transform='translateX(-30vw)',
                    document.querySelector('#navCont').style.transform='translateX(0)'
                )}}
            >
                <h2>
                    Bio
                </h2>
            </div>

            <div 
                className={s.divH2}
                onClick={()=>{return (
                    dispatch(setOption('cv')),
                    document.querySelector('#profileLalo').style.transform='translateX(-30vw)',
                    document.querySelector('#navCont').style.transform='translateX(0)'
                    )}}
            >
                <h2>CV</h2>
            </div>
            <div className={s.contSL}>
                <SocialLinks/>
            </div>        
        </>
    )
}