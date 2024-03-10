function useBharatFormat(number) {
    let digits = number.toString().split('');
    let result = '';

    for (let i = digits.length - 1, j = 0; i >= 0; i--, j++) {
        result = digits[i] + result;
        if (j!==0 && j % 2 === 0 && i !== 0) {
            result = ',' + result;
        }
    }

    return result;
}
export default useBharatFormat