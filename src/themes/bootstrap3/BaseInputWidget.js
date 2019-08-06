import React from "react";
import PropTypes from "prop-types";
import cc from "classnames";
import { Field } from "../Field";

const renderInput = field => {
  const hasError = field.meta.touched && field.meta.error;
  const className = cc({ "form-group": true, "has-error": hasError });

  return (
    <div className={className}>
      <label className="control-label" htmlFor={field.id}>
        {field.label}
      </label>
      <input className="form-control"
        {...field.input}
        type={field.type}
        required={field.required}
        placeholder={field.placeholder}
      />
      {hasError && (
        <span className="help-block">{field.meta.error}</span>
      )}
      {field.description && (
        <span className="help-block">{field.description}</span>
      )}
    </div>
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
