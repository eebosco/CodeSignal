function checkPalindrome(inputString) {
    const reversed = inputString.split("").reverse().join("");
    return inputString == reversed ? true : false;
}
