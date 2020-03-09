import React, {useState} from 'react';
import Question from './components/Question';
import Form from './components/Form';


function App() {

  //define state
  const [inventory, saveInventory]=useState(0);
  const [lefting, saveLefting]= useState(0);
  const [showQuestion, updateQuestion] =useState(true);

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
                <Form />
                </div>
                <div className="one-half column">
                  2
                </div>
              </div>
          )}
            
           
            </div>
        </header>

      </div>
    );
}

export default App;
