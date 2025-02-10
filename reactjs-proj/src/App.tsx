import React, { useState } from "react";
import Alert from "./components/Alerts";
import Button from "./components/Button";




function App(){
  const [alertVisible, setAlertVisibility] = useState(false);
  return(
    <div>
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>You Clicked it?!?!</Alert>}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>Click Here!</Button>
    </div>
  )
}

export default App;