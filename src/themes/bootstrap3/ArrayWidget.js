import React from "react";
import PropTypes from "prop-types";
import renderField from "../../renderField";
import { times as _times} from "lodash";
import ChoiceWidget from "./ChoiceWidget";
import { FieldArray } from "../Field"
import { ErrorBlock, FormGroup } from "./fragments"
import { preventDefault } from "../../utils/preventDefault"

function ArrayFieldButtons({ index, fields }) {
  const showUp   = index !== fields.length - 1;
  const showDown = index !== 0        ;

  const itemUp     = preventDefault(e => fields.swap(index, index + 1));
  const itemDown   = preventDefault(e => fields.swap(index, index - 1));
  const itemDelete = preventDefault(e => fields.remove(index));

  return <div className="btn-group pull-right ">
    {showUp && <button className="btn btn-primary" onClick={itemUp}>
      <span className="glyphicon glyphicon-arrow-down" />
    </button>}

    {showDown && <button className="btn btn-primary" onClick={itemDown}>
      <span className="glyphicon glyphicon-arrow-up" />
    </button>}

    <button className="btn btn-danger" onClick={itemDelete}>
      <span className="glyphicon glyphicon-trash" />
    </button>
  </div>
}

const renderArrayFields = ({ fieldName, fields, theme, context, schema }) => _times(fields.length, index => {
    return (
        <div key={index}>
          <ArrayFieldButtons index={index} fields={fields} />
          {renderField(
            { ...schema.items, showLabel: false },
            index.toString(),
            theme,
            fieldName + ".",
            context
          )}
        </div>
    );
});

const renderInput = field => {
  const hasError = field.meta.submitFailed && field.meta.error
  const addItem    = () => field.fields.push()

  return (
    <FormGroup {...field} hasError={hasError}>
      <legend className="control-label">{field.label}</legend>
      <ErrorBlock {...field}/>
      {renderArrayFields(field)}
      <button type="button" className="pull-right btn btn-primary" onClick={addItem}>Add</button>
      <div className="clearfix" />
    </FormGroup>
  );
};

const CollectionWidget = props => {
  return (
    <FieldArray
      component={renderInput}
      label={props.label}
      name={props.fieldName}
      fieldName={props.fieldName}
      schema={props.schema}
      values={props.values}
      theme={props.theme}
      context={props.context}
    />
  );
};

function isChoiceWidget(schema) {
  return schema.items.hasOwnProperty("enum") &&
    schema.hasOwnProperty("uniqueItems") &&
    schema.uniqueItems;
}



const ArrayWidget = props => {
  // Arrays are tricky because they can be multiselects or collections
  if (isChoiceWidget(props.schema)) {
    return ChoiceWidget({
      ...props,
      schema: props.schema.items,
      multiple: true
    });
  } else {
    return CollectionWidget(props);
  }
};

ArrayWidget.propTypes = {
  schema: PropTypes.object.isRequired,
  fieldName: PropTypes.string,
  label: PropTypes.string,
  theme: PropTypes.object,
  context: PropTypes.object
};

export default ArrayWidget;
