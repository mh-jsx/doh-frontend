import { useState } from 'react';

function useAlert() {
  const [show, setShow] = useState(true);

  const showAlert = () => {
    setShow(true);
  };

  const hideAlert = () => {
    setShow(false);
  };
  return { showAlert, hideAlert, show };
}

export default useAlert;
