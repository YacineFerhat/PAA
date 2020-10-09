import React from "react";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

const Alert = ({ type, status, displayAlert }) => {
  return (
    <div
      style={{
        marginTop: "2%",
        display: displayAlert ? "" : "none",
      }}
    >
      {status === 201 || status === 200 ? (
        <MuiAlert severity="success" elevation={6} variant="filled">
          {type} avec succès
        </MuiAlert>
      ) : (
        <MuiAlert severity="error" elevation={6} variant="filled">
          erreur {type}
        </MuiAlert>
      )}
    </div>
  );
};

export default Alert;
