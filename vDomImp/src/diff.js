import render from './render'

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
}

export default diff