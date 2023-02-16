import s from "./css/Card.module.css"
import picLaloFreak from "../../images/LaloFreak.jpg"
import { useDispatch } from "react-redux"
import { resetOption } from "../../middlewares/redux/actions"

export const Profile = () => {
    const dispatch = useDispatch()
    return (
        <>
            <img className={s.imgProfile} src={picLaloFreak} alt="LaloFreak" width="150px" onClick={()=>{return dispatch(resetOption())}} />
            <h2 className={s.name} style={{color: "white", fontWeight: 'thin', fontSize:"25px", filter:'drop-shadow(0px 0px .1px yellow)'}}>Gerardo guarda</h2>
            <h3 className={s.alias} style={{color: "white", fontWeight: 'thin', fontSize:"15px"}}>lalofreak</h3>
        </>
    )
} 