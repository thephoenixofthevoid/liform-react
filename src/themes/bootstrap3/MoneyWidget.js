import React from "react";
import PropTypes from "prop-types";
import cc from "classnames";
import { Field } from "../Field";
import { Label,  ErrorBlock } from "./fragments"

const renderInput = field => {
  const hasError = field.meta.touched && field.meta.error;
  const className = cc({ "form-group": true, "has-error": hasError });

  return (
    <div className={className}>
      <Label {...field}/>
      <div className="input-group">
        <span className="input-group-addon">€ </span>
        <input
          {...field.input}
          type="number"
          className="form-control"
          id={field.id}
          required={field.required}
          placeholder={field.placeholder}
        />
      </div>
      <ErrorBlock {...field}/>
      {field.description && (
        <span className="help-block">{field.description}</span>
      )}
    </div>
  );
};

const MoneyWidget = props => {
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

MoneyWidget.propTypes = {
  schema: PropTypes.object.isRequired,
  fieldName: PropTypes.string,
  label: PropTypes.string,
  theme: PropTypes.object,
  multiple: PropTypes.bool,
  required: PropTypes.bool
};

export default MoneyWidget;
