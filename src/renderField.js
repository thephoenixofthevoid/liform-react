import React from "react";
import deepmerge from "deepmerge";

const guessWidget = (fieldSchema, theme) => {
  if (fieldSchema.widget) return fieldSchema.widget;
  if (fieldSchema.hasOwnProperty("enum")) return "choice";
  if (fieldSchema.hasOwnProperty("oneOf")) return "oneOf";
  if (theme[fieldSchema.format]) return fieldSchema.format;
  if (fieldSchema.type) return fieldSchema.type;
  return "object";
};

function mergeAllOffs(fieldSchema) {
  if (fieldSchema.hasOwnProperty("allOf")) {
    fieldSchema = { ...fieldSchema, ...deepmerge.all(fieldSchema.allOf) };
    delete fieldSchema.allOf;
  }
  return fieldSchema
}

const renderField = (fieldSchema, name, theme, prefix = "", context = {}, required = false) => {
  const schema = mergeAllOffs(fieldSchema);
  const widget = guessWidget(schema, theme);

  if (!theme[widget]) throw new Error("liform: " + widget + " is not defined in the theme");

  const key = name;
  const fieldName = widget === "oneOf" ? name : prefix ? prefix + name : name;
  const label = schema.showLabel === false ? "" : schema.title || name;

  const props = { key, fieldName, label, required, schema, theme, context, prefix };
  return React.createElement(theme[widget], props);
};

export default renderField;
