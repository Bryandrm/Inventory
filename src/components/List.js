import React from 'react';
import Spend from './Spend'


const List = ( {spends}) => (
    <div className="gastos-realizados">
        <h2>List</h2>
        {spends.map(spend => (
            <Spend
                key={spend.id}
                spend={spend}
            />
        ))}

    </div>
)
 
export default List;