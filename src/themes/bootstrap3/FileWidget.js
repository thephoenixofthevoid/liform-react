import React from "react";
import { Field } from "../Field";
import { Label,  ErrorBlock, DescriptionBlock, FormGroup } from "./fragments"

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
  const onChange = processFile.bind(this, field.input.onChange);

  return (
    <FormGroup {...field}>
      <Label {...field}/>
      <input type="file" className="form-control"
        name={field.name}
        onBlur={field.onBlur}
        onChange={onChange}
        required={field.required}
      />
      <ErrorBlock {...field}/>
      <DescriptionBlock {...field}/>
    </FormGroup>
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
