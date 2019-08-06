import React, { Component } from "react";
import PropTypes from "prop-types";
import { change } from "redux-form";
import { connect } from "react-redux";
import renderField from "../../renderField";
import { map as _map} from "lodash";
import { Label, FormGroup, DescriptionBlock } from "./fragments"

class OneOfChoiceWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choice: 0
    };
    this.renderOption = this.renderOption.bind(this);
    this.selectItem = this.selectItem.bind(this);
  }

  render() {
    const field = this.props;
    const schema = field.schema;
    const options = schema.oneOf;
    const id = "field-" + field.fieldName;

    return (
      <FormGroup {...field}>
        <Label label={schema.title} id={id}/>
        <select className="form-control" id={id} multiple={false} onChange={this.selectItem} required={field.required}>
          {_map(options, (item, idx) => {
            return (
              <option key={options.indexOf(item)} value={idx}>
                {item.title || idx}
              </option>
            );
          })}
        </select>
        <div>{this.renderOption()}</div>
        <DescriptionBlock {...field}/>
      </FormGroup>
    );
  }

  renderOption() {
    const field = this.props;
    const schema = field.schema.oneOf[this.state.choice];
    return renderField(
      schema,
      field.fieldName,
      field.theme,
      field.prefix,
      field.context
    );
  }

  selectItem(e) {
    const { schema, context, dispatch } = this.props;
    for (let property in schema.oneOf[this.state.choice].properties) {
      dispatch(change(context.formName, property, null));
    }
    this.setState({ choice: e.target.value });
  }
}

OneOfChoiceWidget.propTypes = {
  schema: PropTypes.object.isRequired,
  fieldName: PropTypes.string,
  label: PropTypes.string,
  theme: PropTypes.object,
  multiple: PropTypes.bool,
  required: PropTypes.bool
};

export default connect()(OneOfChoiceWidget);
