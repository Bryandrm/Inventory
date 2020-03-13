import React, {useState, useEffect} from 'react';
import Question from './components/Question';
import Form from './components/Form';
import List from './components/List';
import InventoryControl from './components/InventoryControl';


function App() {

  //define state
  const [inventory, saveInventory]=useState(0);
  const [lefting, saveLefting]= useState(0);
  const [showQuestion, updateQuestion] =useState(true);
  const [spends, saveSpends] = useState([]);
  const [spend, saveSpend] = useState({})
  const [createSpend, saveCreateSpend] = useState(false)

//useEffect update lefting

useEffect(() =>{
  if(createSpend){

    //adds new inventory 
    saveSpends([
      ...spends,
      spend
    ]);
    
    //reduce inventory

    const inventoryLefting = lefting -spend.quantity;
    saveLefting(inventoryLefting)

    //Reset to false
    saveCreateSpend(false)
    
    
  }
}, [spend, createSpend, spends, lefting]);

  // when user adds a new spend
  // const addNewSpend = spend => {
  //   saveSpends([
  //     ...spends,
  //   spend
  //   ])

  // }



  return (
      <div className="container">
        <header>
          
            <h1>Inventory</h1>
            <div className="contenido-principal contenido">
              {showQuestion ? 
                (<Question
                saveInventory={saveInventory}
                saveLefting={saveLefting}
                updateQuestion={updateQuestion}
                />) 
              : ( 
                <div className="row">
                  <div className="one-half column">
                  <Form
                    // addNewSpend={addNewSpend}
                    saveSpend={saveSpend}
                    saveCreateSpend={saveCreateSpend}
                  />
                  </div>
                  <div className="one-half column">
                  
                    <List
                      spends={spends}
                    />
                    <InventoryControl 
                      inventory={inventory}
                      lefting={lefting}
                    />

                  </div>
                </div>
                )
              }
            
           
            </div>
        </header>

      </div>
    );
}

export default App;
