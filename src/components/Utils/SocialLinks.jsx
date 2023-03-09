import s from './css/SocialLinks.module.css'
import linkedinIcon from "../../images/linkedin-icon.png"
import githubIcon from "../../images/github-icon.png"

export const SocialLinks = () =>{
  return(
    <div className={s.Container}>
      <div className={s.item}><a href='https://github.com/LaloFreak' target='_blank' rel="noreferrer"><img alt='img' src={githubIcon} className={s.icons} /></a></div>
      <div className={s.item}><a href='https://www.linkedin.com/in/gerardo-guarda-acosta-07a751261/' target='_blank' rel="noreferrer"><img alt='img' src={linkedinIcon} className={s.icons} /></a></div>
    </div>
)}