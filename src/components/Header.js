import React from "react";

function Header()
{
    const miNombre = "Juan Perez";
    const miTitulo = "Desarrollador Full Stack";
    const miFoto   = "https://images.icon-icons.com/10/PNG/256/user_person_customer_man_1532.png" 
    const miUbicacion = "Entre Tongoy y Los Vilos";

    return(
        <header className="bg-primary text-white py-5">
                <div className="container">
                    <div className="row aling-items-center">
                    {}
                        <div className="col-md-3 text-center-3 mb-md-0">
                        <img 
                            src={miFoto}
                            alt={`Foto de ${miNombre}`}
                            className="rounded-circle img-fluid border-white border-3"
                            style={{maxWidth:'150px'}}
                        />
                        </div>
                    <div className="col-md-9">
                            <h1 className="display-4 fw-bold mb-2">
                                {miNombre}
                            </h1>

                            <h2 className="h3 mb-3">
                                {miTitulo}
                            </h2>
                            <p className="mb-0">
                                {miUbicacion}
                            </p>
                        </div>
                    </div>
                </div>

        </header>
    )
}

export default Header;