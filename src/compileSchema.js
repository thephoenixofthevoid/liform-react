function isObject(thing) {
  return typeof thing === "object" && thing !== null && !Array.isArray(thing);
}

function compileSchema(schema, root) {
  if (!root) root = schema;
  
  if (isObject(schema) && schema.$ref) {
    const ref = schema.$ref;
    const resolved = resolveRef(ref, root)
    return compileSchema(resolved, root);
  }

  if (isObject(schema)) {
    let newSchema = {};
    for (let i in schema) if (schema.hasOwnProperty(i)) {
      newSchema[i] = compileSchema(schema[i], root);
    }
    return newSchema;
  }

  if (Array.isArray(schema)) {
    let newSchema = [];
    for (let i = 0; i < schema.length; i += 1) {
      newSchema[i] = compileSchema(schema[i], root);
    }
    return newSchema;
  }

  return schema;
}

function resolveRef(uri, schema) {
  uri = uri.replace("#/", "");
  const tokens = uri.split("/");
  const tip = tokens.reduce((obj, token) => obj[token], schema);

  return tip;
}

export default compileSchema;
