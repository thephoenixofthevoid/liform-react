import React from "react";
import PropTypes from "prop-types";
import { Field } from "../Field";
import { ErrorBlock, DescriptionBlock, FormGroup } from "./fragments"

const renderInput = field => {
  return <FormGroup {...field}>
      <div className="checkbox">
        <label>
          <input type="checkbox" id={field.id} required={field.required} {...field.input}/>{" "}
          {field.label}
        </label>
      </div>
      <ErrorBlock {...field}/>
      <DescriptionBlock {...field}/>
  </FormGroup>

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
