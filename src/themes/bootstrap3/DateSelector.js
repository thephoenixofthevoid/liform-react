import React from "react";

const DateSelector = props => {
  const hasEmptyOption = !props.required;
  const value = props.extractField(props.input.value);
  const id = "props-" + props.name

  return <select className="form-control" value={value}
      onBlur={props.onBlur}
      onChange={props.onChange}
      id={id}
      required={props.required}
    >
      {hasEmptyOption && (
        <option key={""} value={""}>{props.emptyOption}</option>
      )}
      {props.range.map(idx => <option key={idx} value={idx}>{idx}</option>)}
  </select>
};

export default DateSelector;
