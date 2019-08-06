import React from "react";
import { Field } from "../Field";
import cc from "classnames";

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
  return (
    <div className={className}>
      <label className="control-label" htmlFor={field.id}>
        {field.label}
      </label>
      <input
        name={field.name}
        onBlur={field.onBlur}
        onChange={processFile.bind(this, field.input.onChange)}
        required={field.required}
        className="form-control"
        type="file"
      />
      {hasError && (
        <span className="help-block">{field.meta.error}</span>
      )}
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
