import React from "react";
import PropTypes from "prop-types";
import { Field } from "../Field";
import extractSelectOptions from "../../utils/extractSelectOptions";
import { Label,  ErrorBlock, DescriptionBlock, FormGroup } from "./fragments"


const renderSelect = field => {
  const showNullOption = !field.required && !field.multiple;
  const selectOptions = extractSelectOptions(field.schema)

  return (
    <FormGroup {...field}>
      <Label {...field}/>
      <select className="form-control" id={field.id} {...field.input} required={field.required} multiple={field.multiple}>
        {showNullOption && (
          <option key={""} value={""}>{field.placeholder}</option>
        )}
        {selectOptions.map(
          ([name, value]) => <option key={value} value={value}>{name}</option>
        )}
      </select>

      <ErrorBlock {...field}/>
      <DescriptionBlock {...field}/>
    </FormGroup>
  );
};

const ChoiceWidget = props => {
  return (
    <Field
      component={renderSelect}
      label={props.label}
      name={props.fieldName}
      required={props.required}
      id={"field-" + props.fieldName}
      placeholder={props.schema.default}
      description={props.schema.description}
      schema={props.schema}
      multiple={props.multiple}
    />
  );
};

ChoiceWidget.propTypes = {
  schema: PropTypes.object.isRequired,
  fieldName: PropTypes.string,
  label: PropTypes.string,
  theme: PropTypes.object,
  multiple: PropTypes.bool,
  required: PropTypes.bool
};

export default ChoiceWidget;
