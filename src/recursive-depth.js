module.exports = class DepthCalculator {
    calculateDepth(arr, toReturn = 1) {
        return arr.some(i => Array.isArray(i)) ?
            this.calculateDepth(arr.flat(), toReturn+=1) :
            toReturn
    }
};
