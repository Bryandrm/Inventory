import React from 'react';

const Form =() => {

    

    return(
        <form>
            <h2>add your expenses here</h2>
            <div className="campo">
                <label>Expense</label>
                <input
                type="text"
                className="u-full-width"
                placeholder="Ej. Food "
                />
            </div>            
            <div className="campo">
                <label>Amount</label>
                <input
                type="number"
                className="u-full-width"
                placeholder="Ej. 300 "
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