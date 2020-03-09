import React, { Fragment, useState } from 'react';
import Error from './Error'



const Question = ({saveInventory, saveLefting, updateQuestion}) => {
    //define inventory
    const [ cantidad, guardarCantidad]= useState(0);
    const [error, SaveError]= useState(false);

    // Read Inventory
    const definirPresupuesto = e => {
        guardarCantidad(parseInt(e.target.value, 10));
    }

    //submit to define inventory
    const agregarPresupuesto = e =>{
        e.preventDefault();

        //validate
        if(cantidad<1 || isNaN(cantidad)){
            SaveError(true);
            return
        }
        //success

        SaveError(false);
        saveInventory(cantidad)
        saveLefting(cantidad)
        updateQuestion(false);
    }

    return(
        <Fragment>
                <h2> Set your inventory </h2>

                {error ? <Error mensaje="Inventory is invalid" />: null}
                
            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"     
                    onChange={definirPresupuesto}       
                />

                <input 
                type="submit"
                className="button-primary u-full-width"
                value="Set Inventory"
                />

            </form>
        </Fragment>
    );
}

export default Question;