import { Link } from 'react-router-dom'
import s from './css/Landing.module.css'
import { Profile } from '../Profile/Profile'

export const Landing = () => {
  return (
    <div className={s.landingCont}>
      <Profile />
      <Link to='/home'>
        <div className={s.enterBtn}>enter</div>
      </Link>
    </div>
  )
}