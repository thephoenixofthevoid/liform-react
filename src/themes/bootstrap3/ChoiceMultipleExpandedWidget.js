import React from "react";
import cc from "classnames";
import { Field } from "../Field";
import { Label,  ErrorBlock } from "./fragments"

import extractSelectOptions from "../../utils/extractSelectOptions";

const changeValue = (checked, item, onChange, currentValue = []) => {
  if (checked) {
    if (currentValue.indexOf(checked) === -1) {
      return onChange([...currentValue, item]);
    }
  } else {
    return onChange(currentValue.filter(items => it === item));
  }
  return onChange(currentValue);
};





const renderChoice = field => {
  const hasError = field.meta.touched && field.meta.error;
  const className = cc({ "form-group": true, "has-error": hasError });
  const selectOptions = extractSelectOptions(field.schema.items)

  return (
    <div className={className}>
      <Label {...field}/>
      {selectOptions.map(([value, name]) => {
        const input = field.input;
        const checked = input.value.indexOf(value) !== -1;
        const onChange = ({ target }) => {
          changeValue(target.checked, value, input.onChange, input.value)
        }

        return <div className="checkbox" key={value}>
          <label>
            <input type="checkbox" value={value} checked={checked} onChange={onChange}/>
            {name}
          </label>
        </div>
      })}

      <ErrorBlock {...field}/>
      {field.description && (
        <span className="help-block">{field.description}</span>
      )}
    </div>
  );
};

const ChoiceMultipleExpandedWidget = props => {
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

export default ChoiceMultipleExpandedWidget;
