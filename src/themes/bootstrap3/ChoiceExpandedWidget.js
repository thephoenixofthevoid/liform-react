import React from "react";
import { Field } from "../Field";
import { Label,  ErrorBlock, DescriptionBlock, FormGroup } from "./fragments"

import extractSelectOptions from "../../utils/extractSelectOptions";

const renderChoice = field => {
  const selectOptions = extractSelectOptions(field.schema.items);

  return (
    <FormGroup {...field}>
      <Label {...field}/>
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

      <ErrorBlock {...field}/>
      <DescriptionBlock {...field}/>
    </FormGroup>
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
