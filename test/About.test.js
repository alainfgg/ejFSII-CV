import About from "EJ/components/About";
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Componente About - Pruebas Front' , () => {
// DESCRIBE ^ EL TIPO DE TESTING

    //Prueba 1 : Renderizado sin errores
    test('Test 1: Componente Renderiza sin errores', ()=>{
        render(<About/>);
    });

    //Prueba 2 : Muestra título ok
    test('Test 2: Muestra titulo "Acerca de Mí"', () => {
        render(<About/>);

        const titulo = screen.getByText(/Acerca de Mí/i) 
        expect (titulo).toBeInTheDocument(); //agregamos en src un nuevo archivo para integrar la func para que JEST pueda leerla
    });

});
