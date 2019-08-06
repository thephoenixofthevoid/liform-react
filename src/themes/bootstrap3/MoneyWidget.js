import React from "react";
import PropTypes from "prop-types";
import { Field } from "../Field";
import { Label,  ErrorBlock, DescriptionBlock, FormGroup } from "./fragments"

const renderInput = field => {

  return (
    <FormGroup {...field}>
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
      <DescriptionBlock {...field}/>
    </FormGroup>
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
