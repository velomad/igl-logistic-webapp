import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "../TextError";
import { AnimatedInput } from "./components";

const Input = (props) => {
  const { label, name, placeholder, ...rest } = props;

  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <Field
        placeholder={placeholder}
        className="border-2"
        id={name}
        name={name}
        label={label}
        as={AnimatedInput}
        {...rest}
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Input;
