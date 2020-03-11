import React, { useState } from 'react';
import Error from './Error';

const Form =() => {
    
    const [name, saveName] = useState('');
    const [quantity, saveQuantity] = useState(0);
    const [error, saveError] = useState(false); 
    
    //when user adds his spends

    const adSpend = e => {
        e.preventDefault();

        //validate 
        if( quantity <1 || isNaN(quantity) || name.trim() === '')
        {
            saveError(true);
            return;
        }

        saveError(false);

        //Build the spend

        //pass the spend to the main component.

        //Reset form 
    }

    return(
        <form
            onSubmit = {adSpend}        
        >
            <h2>add your expenses here</h2>

            {error ? <Error mensaje="Ambos campos son obligatorios o 
            Presupuesto Incorrecto" /> : null}


            <div className="campo">
                <label>Expense</label>

                <input
                type="text"
                className="u-full-width"
                placeholder="Ej. Food "
                value={name}
                onChange={e => saveName(e.target.value)}
                />
                
            </div>        

            <div className="campo">
                <label>Amount</label>
                <input
                type="number"
                className="u-full-width"
                placeholder="Ej. 300 "
                value={quantity}
                onChange={e=> saveQuantity(parseInt(e.target.value, 10))}
                />
            </div>
            
            <input
                type="submit"
                className="button-primary u-full-width"
                value="Add Expense"
                />
        </form>


    );
}

export default Form;