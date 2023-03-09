import { Link } from 'react-router-dom'
import s from './css/Landing.module.css'
import { Profile } from '../Profile/Profile'
import { useSelector } from 'react-redux'
import { SocialLinks } from '../Utils/SocialLinks'

export const Landing = () => {
  const language = useSelector(state=>state.language)
  return (
    <div className={s.landingCont}>
      <div className={s.webBg}/>
      <Profile />
      <p style={{color:'white'}}>
        {
          language==='EN'?
          'Programation, Design & Sound':
          'Programación, Diseño & Sonido'
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
      <div className={s.contSL}><SocialLinks/></div>
    </div>
  )
}