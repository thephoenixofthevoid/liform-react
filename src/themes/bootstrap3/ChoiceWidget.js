import React from "react";
import PropTypes from "prop-types";
import cc from "classnames";
import { Field } from "../Field";
import { zipObject as _zipObject, map as _map } from "lodash";

const renderSelect = field => {
  const hasError = field.meta.touched && field.meta.error;
  const className = cc({ "form-group": true, "has-error": hasError });
  const options = field.schema.enum;
  const optionNames = field.schema.enum_titles || options;

  const showNullOption = !field.required && !field.multiple;
  const selectOptions = _zipObject(options, optionNames);
  return (
    <div className={className}>
      <label className="control-label" htmlFor={"field-" + field.name}>
        {field.label}
      </label>
      <select className="form-control"
        {...field.input}
        id={"field-" + field.name}
        required={field.required}
        multiple={field.multiple}
      >
        {showNullOption && (
          <option key={""} value={""}>{field.placeholder}</option>
        )}
        {_map(selectOptions,
          (name, value) => <option key={value} value={value}>{name}</option>
        )}
      </select>

      {hasError && (
        <span className="help-block">{field.meta.error}</span>
      )}
      {field.description && (
        <span className="help-block">{field.description}</span>
      )}
    </div>
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
