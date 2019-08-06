import zipObject from "./zipObject";

export function extractSelectOptions(schema) {
    // TODO: add support for schema.items.enumNames
    const options = schema.enum;
    const names   = schema.enum_titles || options;
  
    const selectOptions = zipObject(options, names)
  
    return Object.entries(selectOptions);
}

export default extractSelectOptions;