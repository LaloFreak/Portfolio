import s from "./css/Card.module.css"
import picLaloFreak from "../../images/LaloFreak.jpg"

export const Profile = () => {
    return (
        <>
            <img className={s.imgProfile} src={picLaloFreak} alt="LaloFreak" width="150px" />
            <h2 style={{color: "white", fontWeight: 'thin', fontSize:"25px"}}>Gerardo guarda</h2>
            <h3 style={{color: "white", fontWeight: 'thin', fontSize:"15px"}}>lalofreak</h3>
        </>
    )
} 