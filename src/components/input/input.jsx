import React, { useReducer, useEffect } from "react";
import { validate } from "utils/validators";
import "./input.css";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "5%",
    fontFamily: "Autolinker",
    padding: "0% 2%",
  },
  errorCaption: {
    color: "red",
  },
  textField: {
    height: 40,
    minWidth: 250,
    borderRadius: 5,
  },
}));

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case "TOUCH": {
      return {
        ...state,
        isTouched: true,
      };
    }
    default:
      return state;
  }
};

const Input = (props) => {
  const classes = useStyles();
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || "",
    isTouched: false,
    isValid: props.initialValid || false,
  });

  const { id, onInput } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  const changeHandler = (event) => {
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: props.validators,
    });
  };

  const touchHandler = () => {
    dispatch({
      type: "TOUCH",
    });
  };

  const element =
    props.element === "input" ? (
      <input
        label={props.placeholder}
        id={props.id}
        type={props.type}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
        className={classes.textField}
      />
    ) : (
      <textarea
        multiline
        id={props.id}
        rows={props.rows || 4}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    );

  return (
    <div
      className={`form-control ${
        !inputState.isValid && inputState.isTouched && "form-control--invalid"
      }`}
    >
      <Typography
        className={
          !inputState.isValid && inputState.isTouched && classes.errorCaption
        }
        variant="h6"
        gutterBottom
        htmlFor={props.id}
      >
        {props.label} :
      </Typography>
      {element}

      {!inputState.isValid && inputState.isTouched && (
        <Typography
          className={classes.errorCaption}
          variant="caption"
          display="block"
          gutterBottom
        >
          {props.errorText}{" "}
        </Typography>
      )}
    </div>
  );
};

export default Input;
