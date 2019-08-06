const isArray = Array.isArray;
const isObject = thing => typeof thing === "object" && thing !== null && !isArray(thing);

function mapObj(object, mapper) {
  let result = {};
  Object.keys(object).forEach(name => {
    result[name] = mapper(object[name], name, object);
  })
  return result;
}

function compileSchema(root) {
  return compile(root)

  function compile(schema) {
    if (isArray(schema)) {
      return schema.map(compile);
    }
    if (isObject(schema)) {
      if (!schema.$ref) return mapObj(schema, compile);
      return compile(resolveRef(schema.$ref, root));
    }
    return schema;
  }
}

function resolveRef(uri, schema) {
  uri = uri.replace("#/", "");
  const tokens = uri.split("/");
  const tip = tokens.reduce((obj, token) => obj[token], schema);

  return tip;
}

export default compileSchema;
