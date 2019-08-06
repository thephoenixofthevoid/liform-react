import React from "react";
import PropTypes from "prop-types";
import cc from "classnames";
import { Field } from "../Field";
import { Label,  ErrorBlock, DescriptionBlock } from "./fragments"

const renderInput = field => {
  const hasError = field.meta.touched && field.meta.error;
  const className = cc({ "form-group": true, "has-error": hasError });
  return (
    <div className={className}>
      <Label {...field}/>
      <div className="input-group">
        <input className="form-control" type="number" id={field.id} required={field.required} placeholder={field.placeholder} {...field.input}/>
        <span className="input-group-addon"> %</span>
      </div>
      <ErrorBlock {...field}/>
      <DescriptionBlock {...field}/>
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
