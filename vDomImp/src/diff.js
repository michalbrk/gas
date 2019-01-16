import render from './render'

const diffAttrs = (oldAttrs, newAttrs) => {
    const patches = []

    //Setting new ones
    for(const [k, v] of Object.entries(newAttrs)) {
        patches.push($node => {
            $node.setAttribute(k, v)
            return $node
        })
    }

    //Removing old ones
    for(const k in oldAttrs) {
        if(!(k in newAttrs)) {
            patches.push($node => {
                $node.removeAttribute(k)
                return $node
            })
        }
    }

    return $node => {
        for(const patch of patches) {
            patch($node)
        }
        return $node
    }
}

const diffChildren = (oldVChildren, newVChildren) => {
    return $node => {
        return $node
    }
}

const diff = (oldVTree, newVTree) => {

    if(newVTree === 'undefined') {
        return $node => {

            //Patch should return a new root node
            $node.remove()
            return undefined
        }
    }

    if(typeof oldVTree === 'string' || typeof newVTree === 'string') {
        if(oldVTree !== newVTree) {

            //1. Both trees are strings and have different values
            //2. One of them is text node and 2nd the element node
            return $node => {
                const $newNode = render(newVTree)
                $node.replaceWith($newNode)
                return $newNode
            }
        } else {
            return $node => $node
        }
    }

    if(oldVTree.tagName !== newVTree.tagName) {

        //When tottaly different render the new tree
        //and mount it
        return $node => {
            const $newNode = render(newVTree)
            $node.replaceWith($newNode)
            return $newNode
        }
    }

    const patchAttrs = diffAttrs(oldVTree.attrs, newVTree.attrs)
    const patchCildren = diffChildren(oldVChildren.children, newVChildren.children)

    return $node => {
        patchAttrs($node)
        patchCildren($node)
        return $node
    }
}

export default diff