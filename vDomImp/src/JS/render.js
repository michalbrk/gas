//Render function, taking the virtual node
//and returning the corresponding DOM node.

const renderEl = ({ tagName, attrs, children}) => {
//The {tagName, attrs, children} represents
//the ElementNode in DOM.

    const $el = document.createElement(tagName)

    //Add all the attributes
    //as is vNode.attrs
    for(const [k, v] of Object.entries(attrs)) {
        $el.setAttribute(k, v)
    }

    //Append all the children
    //as in vNode.children
    for(const child of children) {
        $el.appendChild(render(child))
    }

    return $el
}

//Supporting rendering of TextNodes too
//by checking type of vNode
const render = vNode => {
    if(typeof vNode === 'string') {
        return document.createTextNode(vNode)
    }

    //Everything else is a virtual element
    return renderEl(vNode)
}

export default render