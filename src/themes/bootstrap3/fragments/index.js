import React from "react";
import cc from "classnames";

export function Label({ id, label }) {
    return  <label className="control-label" htmlFor={id}>{label}</label>
}

export function ErrorBlock({ meta }) {
    const hasError = meta.touched && meta.error;
    if (!hasError) return null
    return <span className="help-block">{meta.error}</span>
}

export function DescriptionBlock({ description }) {
    if (!description) return null 
    return <span className="help-block">{description}</span>
}