import { JuegoPM } from "../components/JuegoPM"

export const Profile = () => {
    return (
        <>
            <div className="containter">
                <div className="card bienvenida" style={{ 
                    width:"1300px",
                    height:"150px",
                    }}>
                    <h1>Bienvenido, Cansado de ver tantos proyectos ?</h1>
                    <h1>Aqui tienes un mini-juego para relajarte un momento !</h1>
                </div>
                <div className="">
                    <div className="col-12 d-flex justify-content-center">
                        <JuegoPM />
                    </div>
                    <div className="card bienvenida" style={{ 
                    width:"700px",
                    height:"100px",
                    }}>
                    <h3>Muchas gracias por jugar !</h3>
                    <h3>Si ya te vas no olvides <a href="/" className="color-boton">Cerrar session</a></h3>
                </div>
                </div>
            </div>
        </>
    )
}