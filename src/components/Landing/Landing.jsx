import { Link } from 'react-router-dom'
import s from './css/Landing.module.css'
import { Profile } from '../Profile/Profile'
import { useSelector } from 'react-redux'

export const Landing = () => {
  const language = useSelector(state=>state.language)
  return (
    <div className={s.landingCont}>
      <Profile />
      <p style={{color:'white'}}>
        {
          language==='EN'?
          'Programation, Design & Sound':
          'Programación, Diseño y Sonido'
        }
      </p>
      <Link to='/home'>
        <div className={s.enterBtn}>
        {
          language==='EN'?
          'enter':
          'entrar'
        }        
        </div>
      </Link>
    </div>
  )
}