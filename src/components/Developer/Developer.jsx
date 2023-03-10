import { useSelector } from "react-redux"
import { OptionTitle } from "../Options/OptionTitle"
import s from "./css/Developer.module.css"

export const Developer = () => {
  const language = useSelector(state=>state.language)
  return (
    <div className={s.devCont}>
      <div className={s.webBg}/>
      <OptionTitle title={language==='EN'? 'portfolio: developer':'portafolio: desarrollador'}/>
      <div className={s.works}>
        <ul className={s.devUl}>
          <li key={1} className={s.devLi}>
            <a href='https://tv.laruinarecords.cl' target='_blank' rel="noreferrer">
              LA RUINA TV
            </a>
            <h4 style={{fontFamily:'Open Sans', fontSize:'12px'}}>
              {language==='EN'? 'Description: Multimedia Platform' : 'Descripción: Plataforma Multimedia'}
            </h4>
            <h4 style={{fontFamily:'Open Sans', fontSize:'12px'}}>
              {language==='EN'? 'Technologies: ReactJs, NodeJs, ExpressJs' : 'Tecnologías: ReactJs, NodeJs, ExpressJs'}
            </h4>
            <h4 style={{fontFamily:'Open Sans', fontSize:'12px'}}>
              {language==='EN'? 'Role: FullStack Developer, UI/UX Designer' : 'Rol: Desarrollador FullStack, Diseñador UI/UX'}
            </h4>
          </li>
          <li key={2} className={s.devLi}>
            <a href='https://merch.laruinarecords.cl' target='_blank' rel="noreferrer">
              LA RUINA MERCH
            </a>
            <h4 style={{fontFamily:'Open Sans', fontSize:'12px'}}>
              {language==='EN'? 'Description: ' : 'Descripción: '}
            </h4>
            <h4 style={{fontFamily:'Open Sans', fontSize:'12px'}}>
              {language==='EN'? 'Technologies: ' : 'Tecnologías: '}
            </h4>
            <h4 style={{fontFamily:'Open Sans', fontSize:'12px'}}>
              {language==='EN'? 'Role: FullStack Developer, UI/UX Designer' : 'Rol: Desarrollador FullStack, Diseñador UI/UX'}
            </h4>
          </li>
          <li key={3} className={s.devLi}>
            <a href='https://laruinarecords.cl' target='_blank' rel="noreferrer">
              LA RUINA RECORDS
            </a>
            <h4 style={{fontFamily:'Open Sans', fontSize:'12px'}}>
              {language==='EN'? 'Description: ' : 'Descripción: '}
            </h4>
            <h4 style={{fontFamily:'Open Sans', fontSize:'12px'}}>
              {language==='EN'? 'Technologies: ' : 'Tecnologías: '}
            </h4>
            <h4 style={{fontFamily:'Open Sans', fontSize:'12px'}}>
              {language==='EN'? 'Role: FullStack Developer, UI/UX Designer' : 'Rol: Desarrollador FullStack, Diseñador UI/UX'}
            </h4>
          </li>
          <li key={4} className={s.devLi}>
            <a href='https://worldofgwerh.laruinarecords.cl' target='_blank' rel="noreferrer">
              WORLD OF GWERH
            </a>
            <h4 style={{fontFamily:'Open Sans', fontSize:'12px'}}>
              {language==='EN'? 'Description: ' : 'Descripción: '}
            </h4>
            <h4 style={{fontFamily:'Open Sans', fontSize:'12px'}}>
              {language==='EN'? 'Technologies: ' : 'Tecnologías: '}
            </h4>
            <h4 style={{fontFamily:'Open Sans', fontSize:'12px'}}>
              {language==='EN'? 'Role: FullStack Developer, UI/UX Designer' : 'Rol: Desarrollador FullStack, Diseñador UI/UX'}
            </h4>
          </li>
          <li key={5} className={s.devLi}>
            <a href='http://projects.terminalkiller.site' target='_blank' rel="noreferrer">
              TERMINALKILLER PROJECT
            </a>
            <h4 style={{fontFamily:'Open Sans', fontSize:'12px'}}>
              {language==='EN'? 'Description: ' : 'Descripción: '}
            </h4>
            <h4 style={{fontFamily:'Open Sans', fontSize:'12px'}}>
              {language==='EN'? 'Technologies: ' : 'Tecnologías: '}
            </h4>
            <h4 style={{fontFamily:'Open Sans', fontSize:'12px'}}>
              {language==='EN'? 'Role: FullStack Developer, UI/UX Designer' : 'Rol: Desarrollador FullStack, Diseñador UI/UX'}
            </h4>
          </li>
        </ul>
      </div>
    </div>
  )
}