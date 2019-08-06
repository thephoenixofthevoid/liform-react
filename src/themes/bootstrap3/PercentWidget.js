import React from "react";
import PropTypes from "prop-types";
import { Field } from "../Field";
import { Label,  ErrorBlock, DescriptionBlock, FormGroup } from "./fragments"

function PercentWidgetRender(field) {
  return <FormGroup {...field}>
    <Label {...field} />
    <div className="input-group">
      <input
        className="form-control"
        type="number"
        id={field.id}
        required={field.required}
        placeholder={field.placeholder}
        {...field.input}
      />
      <span className="input-group-addon"> %</span>
    </div>
    <ErrorBlock {...field} />
    <DescriptionBlock {...field} />
  </FormGroup>
}


const Widget = props => {
  return (
    <Field
      component={PercentWidgetRender}
      label={props.label}
      name={props.fieldName}
      required={props.required}
      id={"field-" + props.fieldName}
      placeholder={props.schema.default}
      description={props.schema.description}
      normalize={parseFloat}
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
