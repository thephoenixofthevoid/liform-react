import renderField from "./renderField";

export const isRequired = (schema, fieldName) => {
  if (!schema.required) return false;
  return schema.required.indexOf(fieldName) !== -1;
};

function compareByOrder(a, b) {
  if (a.order > b.order) return 1;
  if (a.order < b.order) return -1;
  return 0;
}

function getPropertiesArray(schema) {
  let props = [];
  for (let name in schema.properties) {
    const field    = schema.properties[name];
    const order    = field.propertyOrder;
    const required = isRequired(schema, name)
    props.push({ name, order, required, field });
  }
  return props.sort(compareByOrder);
}

const renderFields = (schema, theme, prefix = null, context = {}) => {
  return getPropertiesArray(schema).map(function (item) {
    return renderField(item.field, item.name, theme, prefix, context, item.required)
  });
};

export default renderFields;
