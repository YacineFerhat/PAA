import React, { useRef, useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  textError: {
    color: "red",
  },
  image: {
    height: 350,
    width: "100%",
    marginTop: "1%",
  },
  Simage: {
    height: 200,
    width: 200,
    marginTop: "1%",
  },
  button: {
    margin: "1% 0%",
  },
}));
const ImageUpload = (props) => {
  const classes = useStyles();
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const [isValid, setIsValid] = useState(false);
  const filePickerRef = useRef();

  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  const pickedHandler = (event) => {
    let pickedFile;
    let fileIsValid = isValid;
    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setFile(pickedFile);
      setIsValid(true);
      fileIsValid = true;
    } else {
      setIsValid(false);
      fileIsValid = false;
    }
    props.onInput(props.id, pickedFile, fileIsValid);
  };

  const pickImageHandler = () => {
    filePickerRef.current.click();
  };

  return (
    <div className="form-control">
      <input
        id={props.id}
        ref={filePickerRef}
        style={{ display: "none" }}
        type="file"
        accept=".jpg,.png,.jpeg"
        onChange={pickedHandler}
      />
      <div>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={pickImageHandler}
        >
          Choisissez une image
        </Button>
        <div>
          {previewUrl && (
            <img
              className={
                props.style === "small" ? classes.Simage : classes.image
              }
              src={previewUrl}
              alt="Preview"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
