function adjacentElementsProduct(inputArray) {
    var product;
    var maxProduct = -1000000;
    for (var i = 1; i < inputArray.length; i++) {   
        product = inputArray[i] * inputArray[i - 1];
        if (product > maxProduct) maxProduct = product;
    } 
    return maxProduct;
}
