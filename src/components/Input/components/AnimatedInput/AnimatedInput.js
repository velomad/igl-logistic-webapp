import React from "react";
import {
  alpha,
  ThemeProvider,
  withStyles,
  makeStyles,
  createTheme
} from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { green } from "@material-ui/core/colors";

const CssTextField = withStyles({
  root: {
    width: "100%",
    "& label.Mui-focused": {
      color: "#01bd4f"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#01bd4f"
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#01bd4f"
      }
    }
  }
})(TextField);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing(1)
  }
}));

const AnimatedInput = (props) => {
  const { label, ...rest } = props;

  const classes = useStyles();

  return (
    <div>
      <form className={classes.root} noValidate>
        <CssTextField {...rest} id="custom-css-standard-input" label={label} />
      </form>
    </div>
  );
};

export default AnimatedInput;
