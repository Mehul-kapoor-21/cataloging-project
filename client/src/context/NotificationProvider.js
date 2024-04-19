import toast from "react-hot-toast";
import React, { createContext, useState } from "react";
export const NotificationContext = createContext();


let timeoutId;
export default function NotificationProvider({ children }) {
  const [notification, setNotification] = useState("");
  const [classes, setClasses] = useState("");

  const updateNotification = (type, value) => {
    if (timeoutId) clearTimeout(timeoutId);

    switch (type) {
      case "error":
        toast.error(value);
        break;
      case "success":
        toast.success(value);
        break;
      case "warning":
        toast.warning(value);
        break;
      default:
        toast.error(value);
    }
    //setNotification(value);

    // timeoutId = setTimeout(() => {
    //   setNotification("");
    // }, 3000);
  };

  // const showSuccess = (value) => {
  //   console.log("hi");
  //   toast.success(value, {
  //     position: "top-right",
  //     autoClose: 2000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "light",
  //   });
  // };

  // const showWarning = (value) => {
  //   toast.warn(value, {
  //     position: "top-right",
  //     autoClose: 3000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "light",
  //   });
  // };
  // const showError = (value) => {
  //   toast.error(value, {
  //     position: "top-right",
  //     autoClose: 3000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "light",
  //   });
  // };

  return (
    <NotificationContext.Provider
      value={{updateNotification }}
    >
      {/* <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      /> */}
      {children}
      {notification && (
        <div className="fixed left-1/2 -translate-x-1/2 top-24 ">
          <div className="bounce-custom shadow-md shadow-gray-400 rounded">
            <p className={classes + " text-white px-4 py-2 font-semibold"}>
              {notification}
            </p>
          </div>
        </div>
      )}
    </NotificationContext.Provider>
  );
}
