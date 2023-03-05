import { Link } from 'react-router-dom'
import s from './css/Landing.module.css'

export const Landing = () => {
  return (
    <div className={s.landingCont}>
      <Link to='/home'>
        <div className={s.enterBtn}>Enter</div>
      </Link>
    </div>
  )
}