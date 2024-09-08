import React from 'react';

const Texto = ({Titulo, Parrafo}) => {
    return (
        <>
            <div className="Titulo" >
                <h1 className="text-5xl">{Titulo}</h1>
            </div>
            <div className="Parrafo">
                <p className="text-3xl">{Parrafo}</p>
            </div>
        </>
    )
}
export default Texto