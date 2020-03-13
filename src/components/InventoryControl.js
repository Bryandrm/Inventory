import React, { Fragment} from 'react';

const InventoryControl= ({inventory, lefting}) => {
    return ( 
        <Fragment>
            <div className="alert alert-primary">
                Inventory: ${inventory}
            </div>
            <div className="alert">
                Lefting: ${lefting}
            </div>
        </Fragment>
     );
} 
 
export default InventoryControl;