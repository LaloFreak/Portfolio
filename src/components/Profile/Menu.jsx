import { useDispatch } from "react-redux"
import { setOption } from "../../middlewares/redux/actions"
import s from "./css/Card.module.css"

export const Menu = () => {
    const dispatch = useDispatch()
    return (
        <>
            <div 
                className={s.divH2}
                onClick={()=>{return dispatch(setOption('bio'))}}
            >
                <h2>Bio</h2>
            </div>

            <div 
                className={s.divH2}
                onClick={()=>{return dispatch(setOption('web developer'))}}
            >
                <h2>Web Developer</h2>
            </div>
            <div 
                className={s.divH2}
                onClick={()=>{return dispatch(setOption('sound'))}}
            >
                <h2>Sound</h2>
            </div>
            <div 
                className={s.divH2}
                onClick={()=>{return dispatch(setOption('design'))}}
            >
                <h2>Design</h2>
            </div>
        </>
    )
}