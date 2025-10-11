import React from "react";

function About() {
    return (
        <div className="container">
            <h1>Acerca de mí</h1>
            
            {/* PARA QUE QUEDE ALINEADO SEGÚN EL ORDENAMIENTO */}
            {/* debemos envolver el contenido dentro de un ul*/}
            {/* AGREGAMOS el <ul> para replicar la estructura del componente Education */}
            <ul>
                <div> 
                    <h3 className="h5-fw-bold text-dark md">Mi Perfil Profesional</h3>
                    <h4 className="h6 text-primary mb-1">Rol: Desarrollador de Software</h4>
                    <p className="text-muted mb-2">
                        Soy un desarrollador apasionado por la tecnología, enfocado en el desarrollo Full-Stack con experiencia en React.
                    </p>
                </div>
                
                <div>
                    <h3 className="h5-fw-bold text-dark md">Habilidades Clave</h3>
                    <h4 className="h6 text-primary mb-1">Lenguajes y Frameworks</h4>
                    <p className="text-muted mb-2">
                        JavaScript, Python, React, Node.js, y manejo de bases de datos SQL y NoSQL.
                    </p>
                </div>
            </ul>
        </div>
    );
}

export default About;