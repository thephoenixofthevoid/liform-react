
const findTypeInSchema = (schema, path) => {
    if (!schema) return;
  
    if (path.length === 0) {
      if (schema.hasOwnProperty("type"))  return schema.type;
      if (schema.hasOwnProperty("allOf")) return "allOf";
      if (schema.hasOwnProperty("oneOf")) return "oneOf";
    }
  
    if (schema.type === "array") {
        return findTypeInSchema(schema.items, path.slice(1));
    }
  
    if (schema.hasOwnProperty("allOf")) {
        const subschema = { ...schema, ...merge.all(schema.allOf) };
        delete subschema.allOf;
        return findTypeInSchema(subschema, path);
    }
  
    if (schema.hasOwnProperty("oneOf")) {
      for (let item of schema.oneOf) {
        const subschema = { ...schema, item }
        delete subschema.oneOf;
        let type = findTypeInSchema(subschema, path);
        if (type) return type;
      }
    }
    
    const subschema = schema.properties[path[0]];
    return findTypeInSchema(subschema, path.slice(1));
};

export default findTypeInSchema