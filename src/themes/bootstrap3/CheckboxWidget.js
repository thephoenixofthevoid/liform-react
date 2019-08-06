import React from "react";
import PropTypes from "prop-types";
import cc from "classnames";
import { Field } from "../Field";

const renderInput = field => {
  const hasError = field.meta.touched && field.meta.error;
  const className = cc({ "form-group": true, "has-error": hasError });
  
  return <div className={className}>
      <div className="checkbox">
        <label>
          <input type="checkbox" id={field.id} required={field.required} {...field.input}/>{" "}
          {field.label}
        </label>
      </div>
      {hasError && (
        <span className="help-block">{field.meta.error}</span>
      )}
      {field.description && (
        <span className="help-block">{field.description}</span>
      )}
  </div>
  
};

const CheckboxWidget = props => {
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

CheckboxWidget.propTypes = {
  schema: PropTypes.object.isRequired,
  fieldName: PropTypes.string,
  label: PropTypes.string,
  theme: PropTypes.object
};

export default CheckboxWidget;
