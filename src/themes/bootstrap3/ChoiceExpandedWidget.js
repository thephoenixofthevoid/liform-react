import React from "react";
import cc from "classnames";
import { Field } from "../Field";

import extractSelectOptions from "../../utils/extractSelectOptions";

const renderChoice = field => {
  const hasError = field.meta.touched && field.meta.error;
  const className = cc({ "form-group": true, "has-error": hasError });
  const selectOptions = extractSelectOptions(field.schema.items);
  const id = field.id;

  return (
    <div className={className}>
      <label className="control-label" htmlFor={id}>
        {field.label}
      </label>
      {selectOptions.map(([value, name]) => (
        <div className="radio" key={value}>
          <label>
            <input type="radio"
              name={field.input.name}
              value={value}
              checked={field.input.value === value}
              onChange={e => field.input.onChange(value)}
            />
            {name}
          </label>
        </div>
      ))}

      {hasError && (
        <span className="help-block">{field.meta.error}</span>
      )}
      {field.description && (
        <span className="help-block">{field.description}</span>
      )}
    </div>
  );
};

const ChoiceExpandedWidget = props => {
  return (
    <Field
      component={renderChoice}
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

export default ChoiceExpandedWidget;
