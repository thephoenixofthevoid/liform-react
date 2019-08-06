import Ajv from "ajv";
import merge from "deepmerge";
import { set as _set } from "lodash";

import findTypeInSchema from "./utils/findTypeInSchema"

const setError = schema => error => {
  // convert property accessor (.xxx[].xxx) notation to jsonPointers notation
  if (error.dataPath.charAt(0) === ".") {
    error.dataPath = error.dataPath.replace(/[.[]/gi, "/").replace(/[\]]/gi, "");
  }
  const dataPathParts = error.dataPath.split("/").slice(1);
  const dataPath = error.dataPath.slice(1).replace(/\//g, ".");
  const type = findTypeInSchema(schema, dataPathParts);

  let errors = {};

  if (type === "array" || type === "allOf" || type === "oneOf") {
    _set(errors, dataPath, { _error: error.message });
  } else {
    _set(errors, dataPath, error.message);
  }
  
  return errors;
};


const buildSyncValidation = (schema, ajv = null) => {
  ajv = ajv || new Ajv({
    errorDataPath: "property",
    allErrors: true,
    jsonPointers: false
  })

  const mapper = setError(schema)

  return values => {
    const valid = ajv.validate(schema, values);
    if (valid) return {};
    let errors = ajv.errors.map(mapper)
    // We need at least two elements
    return merge.all(errors);
  };
};

export default buildSyncValidation;

