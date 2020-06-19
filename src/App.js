import React from "react";
import "./styles.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomToast = ({ closeToast }) => {
  return (
    <div>
      Something went wrong !!!
      <button onClick={closeToast}>Close</button>
    </div>
  );
};
toast.configure();
export default function App() {
  const notify = () => {
    toast("Basic Notification", { position: toast.POSITION.BOTTOM_LEFT });
    toast.success("Success Notification", {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 8000
    });
    toast.info("Info Notification", {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: false
    });
    toast.warn(<CustomToast />, {
      position: toast.POSITION.TOP_CENTER
    });
    toast.error("Error Notification", {
      position: toast.POSITION.TOP_LEFT
    });
    toast("Basic Notification", {
      position: toast.POSITION.TOP_RIGHT
    });
  };

  return (
    <div className="App">
      <h1>Testing Toast Notifications</h1>
      <h2>Click on the Notify button</h2>
      <button onClick={notify}>Notify</button>
    </div>
  );
}
