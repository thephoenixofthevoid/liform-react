import React from "react";
import PropTypes from "prop-types";
import { Field } from "../Field";

import { Label,  ErrorBlock, DescriptionBlock, FormGroup } from "./fragments"


const renderInput = field => {
  return (
    <FormGroup {...field}>
      <Label {...field}/>
      <textarea id={field.id} className="form-control"
        {...field.input}
        required={field.required}
        placeholder={field.placeholder}
      />
      <ErrorBlock {...field}/>
      <DescriptionBlock {...field}/>
    </FormGroup>
  );
};

const TextareaWidget = props => {
  return (
    <Field
      component={renderInput}
      label={props.label}
      name={props.fieldName}
      required={props.required}
      id={"field-" + props.fieldName}
      placeholder={props.schema.default}
      description={props.schema.description}
    />
  );
};

TextareaWidget.propTypes = {
  schema: PropTypes.object.isRequired,
  fieldName: PropTypes.string,
  label: PropTypes.string,
  theme: PropTypes.object,
  multiple: PropTypes.bool,
  required: PropTypes.bool
};

export default TextareaWidget;
