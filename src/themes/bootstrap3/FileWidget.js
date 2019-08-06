import React from "react";
import { Field } from "../Field";
import cc from "classnames";
import { Label,  ErrorBlock } from "./fragments"

const processFile = (onChange, e) => {
  const files = e.target.files;
  return new Promise(() => {
    let reader = new FileReader();
    reader.addEventListener(
      "load",
      () => {
        onChange(reader.result);
      },
      false
    );
    reader.readAsDataURL(files[0]);
  });
};

const File = field => {
  const hasError = field.meta.touched && field.meta.error;
  const className = cc({ "form-group": true, "has-error": hasError });
  const onChange = processFile.bind(this, field.input.onChange);

  return (
    <div className={className}>
      <Label {...field}/>
      <input
        name={field.name}
        onBlur={field.onBlur}
        onChange={onChange}
        required={field.required}
        className="form-control"
        type="file"
      />
      <ErrorBlock {...field}/>
      {field.description && <span>{field.description}</span>}
    </div>
  );
};

const FileWidget = props => {
  return (
    <Field
      component={File}
      label={props.label}
      name={props.fieldName}
      required={props.required}
      id={"field-" + props.fieldName}
      placeholder={props.schema.default}
      description={props.schema.description}
      type={props.type}
    />
  );
};

export default FileWidget;
