export function zipObject(props, values) {
    return props.reduce(
        (prev, prop, i) => Object.assign(prev, { [prop]: values[i] }),
        {}
    )
}

export default zipObject