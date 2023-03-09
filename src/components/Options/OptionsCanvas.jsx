import { useDispatch, useSelector } from 'react-redux'
import { setOption } from '../../middlewares/redux/actions'
import { Bio } from './Bio'
import s from './css/Options.module.css'
import { Cv } from './Cv'
import { Home } from './Home'
import { OptionTitle } from './OptionTitle'
import arrowIcon from '../../images/arrow-icon.png'

export const OptionCanvas = () => {
    const option = useSelector(state=>state.option)
    const language = useSelector(state=>state.language)
    const dispatch = useDispatch()
    const langOption = (option) => {
        if(language==='ES' && option === 'programation, design & sound') return 'programacion, diseno & sonido'
        if(language==='ES' && option === 'developer') return 'desarrollador'
        if(language==='ES' && option === 'sound') return 'sonido'
        if(language==='ES' && option === 'design') return 'diseno '
        if(language==='ES' && option === 'contact') return 'contacto'
        else return option
    }
    return (
        <div className={s.contOptions}>
            <OptionTitle title={langOption(option)} />
            {option==='programation, design & sound'?
            <><Home/>
            <div className={s.btnsCont}>
                <img src='true' alt='' />
                <div style={{display:'flex'}}>
                    <h3 style={{fontFamily: 'Trajan', fontSize:'18px', marginRight:'10px'}}>bio</h3>
                    <img 
                        className={s.menuback} 
                        onClick={()=>{return dispatch(setOption('bio'))}}
                        src={arrowIcon} 
                        alt='next' 
                        width='30px'  
                    />
                </div>
            </div></>
            :null}
            {option==='bio'?
            <><Bio/>

            <div className={s.btnsCont}>
                <div style={{display:'flex'}}>
                    <img 
                    className={s.menuback} 
                    onClick={()=>{return dispatch(setOption('programation, design & sound'))}} 
                    src={arrowIcon} 
                    alt='next' 
                    width='30px'
                    style={{rotate: '180deg'}}
                    />
                    <h3 style={{fontFamily: 'Trajan', fontSize:'18px', marginLeft:'10px'}}>home</h3>
                </div>
                <div style={{display:'flex'}}>
                    <h3 style={{fontFamily: 'Trajan', fontSize:'18px', marginRight:'10px'}}>cv</h3>
                    <img 
                    className={s.menuback} 
                    onClick={()=>{return dispatch(setOption('cv'))}} 
                    src={arrowIcon} 
                    alt='next' 
                    width='30px'
                    />
                </div>
            </div></>
            :null}
            {option==='cv'?
            <><Cv/>
            <div className={s.btnsCont}>
                <div style={{display:'flex'}}>
                    <img 
                        className={s.menuback} 
                        onClick={()=>{return dispatch(setOption('bio'))}}
                        src={arrowIcon} 
                        alt='next' 
                        width='30px'
                        style={{rotate: '180deg'}}  
                    />
                    <h3 style={{fontFamily: 'Trajan', fontSize:'18px', marginLeft:'10px'}}>bio</h3>
                </div>
            </div></>
            :null}
        </div>
    )
}