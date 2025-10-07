|import React from "react";

function Education () {

    const educacion = [
        {
            titulo: "Ingeniería en medioambiente",
            centro: "Duroc",
            duracion: "2012-2014"
        },
        {
            puesto: "Ingeniero junior",
            empresa: "TechSoft",
            experiencia: "3 años"
        },
        {
            puesto: "Desarrollador Fullstack",
            empresa: "WebSystems",
            experiencia: "2 años"
        }
    ];


    return (
        <div>
            <h1>Educación</h1>
            <ul>
                {educacion.map((educacion, index) => (
                    <div key={index}>
                        <h3 className="h5-fw-bold text-dark md">{educacion.puesto}</h3>
                        <h4 className="h6 text-primary mb-1">Empresa: {educacion.empresa}</h4>
                        <p className="text-muted mb-2">Años de educacion: {educacion.educacion}</p>

        

                    </div>
                ))}
            </ul>
        </div>
    );

}

export default Education;