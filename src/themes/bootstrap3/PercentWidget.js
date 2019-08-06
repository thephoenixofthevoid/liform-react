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
      <div className="input-group">
        <input className="form-control" type="number" id={field.id} required={field.required} placeholder={field.placeholder} {...field.input}/>
        <span className="input-group-addon"> %</span>
      </div>
      {hasError && (
        <span className="help-block">{field.meta.error}</span>
      )}
      {field.description && (
        <span className="help-block">{field.description}</span>
      )}
    </div>
  );
};

const Widget = props => {
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

Widget.propTypes = {
  schema: PropTypes.object.isRequired,
  fieldName: PropTypes.string,
  label: PropTypes.string,
  theme: PropTypes.object,
  multiple: PropTypes.bool,
  required: PropTypes.bool
};

export default Widget;
