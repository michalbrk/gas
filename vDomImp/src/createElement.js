//a function returning a virtual element
//a default values for opts as elements might
//be created without options
export default (tagName, { attrs = {}, children =[] } = {}) => {
    return {
        tagName,
        attrs,
        children
    }
}
