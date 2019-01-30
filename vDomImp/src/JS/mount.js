//Mounting point for the App.

export default ($node, $target) => {

    //Replacing empty div element with the
    //$app one
    $target.replaceWith($node)
    return $node
}