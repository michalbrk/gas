//a function returning a virtual element
//ie. creating vDOM
//default values for opts as elements might
//be created without options
export default (tagName, { attrs = {}, children =[] } = {}) => {

    //A trully plain object that doesn't inherit
    //from Object.prototype but from null instead
    const vElem = Object.create(null)

    Object.assign(vElem, {
        tagName,
        attrs,
        children
    })
    
    return vElem
}
