import React from "react";

function Education () {

    const educacion = [
        {
            titulo: "Ingeniería en informatiks",
            centro: "Duroc",
            duracion: "2012 a.C.-2014 b.C."
        },
        {
            titulo: "Software Engineer",
            centro: "Jarvar",
            duracion: "2019-2024"
        }
        
    ];


    return (
        <div className= "container">
            <h1>Educación</h1>
            <ul>
              
                {educacion.map((educacion, index) => (
                    <div key={index}>
                        <h3 className="h5-fw-bold text-dark md">{educacion.titulo}</h3>
                        <h4 className="h6 text-primary mb-1">Intitución: {educacion.centro}</h4>
                        <p className="text-muted mb-2">Años de educacion: {educacion.duracion}</p>
                    </div>
                ))}
            </ul>
        </div>
    );

}

export default Education;