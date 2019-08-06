import React from "react";
import cc from "classnames";
import { Field } from "../Field";

const zipObject = (props, values) =>
  props.reduce(
    (prev, prop, i) => Object.assign(prev, { [prop]: values[i] }),
    {}
  );

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


function extractSelectOptions(schema) {
  // TODO: add support for schema.items.enumNames
  const options = schema.items.enum;
  const names   = schema.items.enum_titles || options;

  const selectOptions = zipObject(options, names)

  return Object.entries(selectOptions);
}


const renderChoice = field => {
  const hasError = field.meta.touched && field.meta.error;
  const className = cc({ "form-group": true, "has-error": hasError });
  const selectOptions = extractSelectOptions(field.schema)

  return (
    <div className={className}>
      <label className="control-label" htmlFor={"field-" + field.name}>
        {field.label}
      </label>
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

      {hasError && (
        <span className="help-block">{field.meta.error}</span>
      )}
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
