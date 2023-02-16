import { useSelector } from 'react-redux'
import { Bio } from './Bio'
import s from './css/Options.module.css'
import { OptionTitle } from './OptionTitle'

export const OptionCanvas = () => {
    const option = useSelector(state=>state.option)
    return (
        <div className={s.contOptions}>
            <OptionTitle title={option} />
            {option==='bio'?<Bio/>:null}
        </div>
    )
}