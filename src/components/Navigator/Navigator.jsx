import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { resetOption, setOption } from "../../middlewares/redux/actions"
import s from "./css/Navigator.module.css"
import { disapear, optionActive } from "./js/functions"

export const Navigator = () => {
  const dispatch = useDispatch()
  const option = useSelector(state=>state.option)
  useEffect(()=>{
    optionActive(option? option : '')
    disapear()
  }, [option])
  return (
    <div className={s.navCont} id='navCont'>
      <ul className={s.ulCont}>
        <li>
          <div 
            className={s.profileImg}
            id='profile'
            onClick={()=>{return (
              document.querySelector('#profileLalo').style.transform='translateX(0)',
              document.querySelector('#navCont').style.transform='translateX(30vw)'
              )}}
            />
          <div 
            className={s.webImg}
            id='developer'
            onClick={()=>{return (
              dispatch(setOption('developer')),
              document.querySelector('#profileLalo').style.transform='translateX(-30vw)',
              document.querySelector('#navCont').style.transform='translateX(0vw)'
              )}}
            />
          <div 
            className={s.soundImg}
            id='sound'
            onClick={()=>{return (
              dispatch(setOption('sound')),
              document.querySelector('#profileLalo').style.transform='translateX(-30vw)',
              document.querySelector('#navCont').style.transform='translateX(0vw)'
              )}}
            />
          <div 
            className={s.designImg}
            id='design'
            onClick={()=>{return (
              dispatch(setOption('design')),
              document.querySelector('#profileLalo').style.transform='translateX(-30vw)',
              document.querySelector('#navCont').style.transform='translateX(0vw)'
              )}}
            />
          <div 
            className={s.contactImg}
            id='contact'
            onClick={()=>{return (
              dispatch(setOption('contact')),
              document.querySelector('#profileLalo').style.transform='translateX(-30vw)',
              document.querySelector('#navCont').style.transform='translateX(0vw)'
              )}}
            />
            <Link to='/'>
              <div className={s.logoutImg} onClick={()=>{return dispatch(resetOption())}} />
            </Link>
        </li>
      </ul>
    </div>
  )
}