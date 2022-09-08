import React from 'react';

class MiComponentes extends React.Component{
    render(){
        let receta = {
            nombre:'pizza',
            ingredientes:['tomate','carne de pollo','pan con ajo'],
            calorias:400
        };

        return(
            <div className='componente'>
        <h1>{'receta: '+ receta.nombre}</h1>
        <h2>{'calorias : '+ receta.calorias}</h2>
<ol>
    {
        receta.ingredientes.map((ingredientes,i) => {
        console.log(ingredientes);
        return(
            <li key ={i}>
                {ingredientes}
            </li>
        );
        })
    }
</ol>
        </div>
    );
    }
}

export default MiComponentes;