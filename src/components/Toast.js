import { ToastContainer } from "@pancakeswap-libs/uikit";
import { useEffect, useState } from "react";
import * as toastActions from "../actions";
import { connect } from "react-redux";

const Toast = (props) => {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    props.createToast(toast);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const toast = (title, description) => {
    const randomToast = {
      id: Date.now(),
      title,
      description,
      type: "success",
    };

    setToasts((prevToasts) => [randomToast, ...prevToasts]);
  };

  const handleRemove = (id) => {
    setToasts((prevToasts) =>
      prevToasts.filter((prevToast) => prevToast.id !== id)
    );
  };

  return <ToastContainer toasts={toasts} onRemove={handleRemove} />;
};

const mapDispatchToProps = (dispatch) => {
  return {
    createToast: (toast) => dispatch(toastActions.createToast(toast)),
  };
};

export default connect(null, mapDispatchToProps)(Toast);
