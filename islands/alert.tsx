import { useState, useEffect } from "preact/hooks";

export default function Alert() {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (window.location.hash === "#success") {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 5000);
    }
  }, []);

  return (
    <div>
      {showAlert && <div class="alert alert-success mt-5 mx-5" role="alert">Message sent successfully</div>}
    </div>
  );
}
