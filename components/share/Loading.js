import React from "react";
import { useSelector } from "react-redux";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  backdrop: {
    zIndex: 10,
    color: "#fff",
  },
}));

export default function Loading() {
  const classes = useStyles();
  const loading = useSelector((state) => state.loading.data);
  return (
    <div>
      {loading && (
        <Backdrop className={classes.backdrop} open={true}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </div>
  );
}
