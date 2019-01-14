const renderEl = ({ tagName, attrs, children}) => {
    const $el = document.createElement(tagName)

    //Add all the attributes
    for(const [k, v] of Object.entries(attrs)) {
        $el.setAttribute(k, v)
    }

    //Append all the children
    for(const child of children) {
        $el.appendChild(render(child))
    }

    return $el
}

const render = vNode => {
    if(typeof vNode === 'string') {
        return document.createTextNode(vNode)
    }

    //Everything else is a virtual element
    return renderEl(vNode)
}

export default render