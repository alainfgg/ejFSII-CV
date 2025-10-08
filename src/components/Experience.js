import React from "react";

function Experience() {
    // Arreglo de objetos con la información de las experiencias
    const experiencia = [
        {
            puesto: "Desarrollador",
            empresa: "Duroc",
            experiencia: "4 años"
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

    const responsanilidades = [
        {
            resp : "creación de:"
        }
    ];

    

    return (
        <div className="container">
            <h1>Experiencia Profesional</h1>
            <ul>
                {experiencia.map((trabajo, index) => (
                    <div key={index}>
                        <h3 className="h5-fw-bold text-dark md">{trabajo.puesto}</h3>
                        <h4 className="h6 text-primary mb-1">Empresa: {trabajo.empresa}</h4>
                        <p className="text-muted mb-2">Años de experiencia: {trabajo.experiencia}</p>

                    

                    </div>
                ))}
            </ul>
        </div>
    );
}



export default Experience;
