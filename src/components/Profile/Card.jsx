import s from "./css/Card.module.css"
import { Menu } from "./Menu"
import { Profile } from "./Profile"

export const Card = () => {
    return (
        <div className={s.contLandingPage}>
            <div className={s.bgCanvas}>
                <div className={s.profileLalo}>
                    <Profile/>
                    <Menu/>
                </div>
            </div>
        </div>
    )
} 