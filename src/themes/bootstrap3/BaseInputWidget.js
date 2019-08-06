import React from "react";
import PropTypes from "prop-types";
import { Field } from "../Field";
import { Label,  ErrorBlock, DescriptionBlock, FormGroup } from "./fragments"

const renderInput = field => {
  return (
    <FormGroup {...field}>
      <Label {...field}/>
      <input className="form-control"
        {...field.input}
        type={field.type}
        required={field.required}
        placeholder={field.placeholder}
      />
      <ErrorBlock {...field}/>
      <DescriptionBlock {...field}/>
    </FormGroup>
  );
};

const BaseInputWidget = props => {
  return (
    <Field
      component={renderInput}
      label={props.label}
      name={props.fieldName}
      required={props.required}
      id={"field-" + props.fieldName}
      placeholder={props.schema.default}
      description={props.schema.description}
      type={props.type}
      normalize={props.normalizer}
    />
  );
};

BaseInputWidget.propTypes = {
  schema: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  required: PropTypes.bool,
  fieldName: PropTypes.string,
  label: PropTypes.string,
  normalizer: PropTypes.func
};

export default BaseInputWidget;
