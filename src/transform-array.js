module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw Error();
    const transformed =[];
    const ACTIONS = ['--double-prev', '--double-next', '--discard-prev', '--discard-next'];
    for (let i = 0; i < arr.length; i++) {
        if(ACTIONS.includes(arr[i])){
            if (arr[i] === '--double-prev' && (i - 1 > 0)) {
                transformed.push(arr[i - 1]);
            } else if (arr[i] === '--double-next' && (i + 1 < arr.length)) {
                transformed.push(arr[i + 1]);
            } else if (arr[i] === '--discard-prev') {
                transformed.pop();
            } else if (arr[i] === '--discard-next' && (i + 2 < arr.length)) {
                ++i;
            }
        }else transformed.push(arr[i]);
    }
    return transformed;
};
