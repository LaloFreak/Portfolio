import s from "./css/Cards.module.css"
import picLaloFreak from "../images/LaloFreak.jpg"

export const Card = () => {
    return (
        <div className={s.contLandingPage}>
            <div className={s.bgCanvas}>
                <div className={s.profileLalo}>
                    <img className={s.imgProfile} src={picLaloFreak} alt="LaloFreak" width="150px" />
                    <h2 style={{color: "white", fontWeight: "thin", fontSize:"25px"}}>Gerardo guarda</h2>
                    <h3 style={{color: "white", fontWeight: "thin", fontSize:"15px"}}>lalofreak</h3>
                    <h2 style={{color: "white", fontWeight: "thin", fontFamily: "Open Sans", fontSize:"10px"}}>Desarrollo Web</h2>
                    <h2 style={{color: "white", fontWeight: "thin", fontFamily: "Open Sans", fontSize:"10px"}}>Sonido</h2>
                    <h2 style={{color: "white", fontWeight: "thin", fontFamily: "Open Sans", fontSize:"10px"}}>Diseño</h2>
                </div>
            </div>
        </div>
    )
} 