import React, { Fragment} from 'react';
import { checkInventory } from '../helper';
const InventoryControl= ({inventory, lefting}) => {
    return ( 
        <Fragment>
            <div className="alert alert-primary">
                Inventory: ${inventory}
            </div>
            <div className={checkInventory(inventory, lefting)}>
                Lefting: ${lefting}
            </div>
        </Fragment>
     );
} 
 
export default InventoryControl;