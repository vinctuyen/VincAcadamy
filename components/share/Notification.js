import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { sagaActions } from "../../store/sagas/typeSagas";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function CustomizedSnackbars() {
  const dispatch = useDispatch();
  const notifies = useSelector((state) => state.notify.data);

  const handleClose = (e, reason, id) => {
    if (reason == "clickaway") {
      return;
    } else {
      dispatch({ type: sagaActions.REMOVE_NOTIFY, id });
    }
  };

  const getType = (status) => {
    if (status == 200) {
      return "success";
    } else {
      return "error";
    }
  };

  return (
    <div>
      {notifies.map((item) => {
        return (
          <Snackbar
            key={item.id}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={true}
            autoHideDuration={4000}
            onClose={(e, reason) => handleClose(e, reason, item.id)}
            transitionDuration={1000}
          >
            <Alert
              onClose={(e) => handleClose(e, "click", item.id)}
              severity={getType(item.status)}
            >
              {item.message}
              {notifies.length}
            </Alert>
          </Snackbar>
        );
      })}
    </div>
  );
}
