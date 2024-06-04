
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render( 
    <>
    <Encabezado />
    <Cuerpo />
 
    </>
);


function Encabezado(){
    return <h1 className='color'>soy el encabezado</h1>;
}

function Cuerpo (){
    return <h2>soy el cuerpo</h2>
}




