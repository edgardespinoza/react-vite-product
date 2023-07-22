import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);

  const handleClose = () => setAlertVisible(false);

  return (
    <div>
      {alertVisible && <Alert onClose={handleClose}>My alert</Alert>}
      <Button color="primary" onClick={() => setAlertVisible(true)}>
        My button
      </Button>
    </div>
  );
}

export default App;
