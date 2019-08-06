import React from "react";
import BaseInputWidget from "./BaseInputWidget";

const NumberWidget = props => <BaseInputWidget type="number" {...props} normalizer={parseFloat} />;

export default NumberWidget;
