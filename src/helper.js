export const checkInventory = (inventory, lefting) => {
    let classType;

    if ( (inventory/4) > lefting){
        classType = 'alert alert-danger';
    }else if ( (inventory/2) > lefting){
        classType = 'alert alert-warning';
    }else{
        classType = 'alert alert-success';
    }

    return classType

}