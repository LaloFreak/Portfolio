import s from "./css/Card.module.css"

export const Menu = () => {
    return (
        <>
            <div className={s.divH2}>
                <h2>Desarrollo Web</h2>
            </div>
            <div className={s.divH2}>
                <h2>Sonido</h2>
            </div>
            <div className={s.divH2}>
                <h2>Diseño</h2>
            </div>
        </>
    )
}