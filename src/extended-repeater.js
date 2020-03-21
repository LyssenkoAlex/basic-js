module.exports = function repeater( str, options ) {
    let inString = (options.hasOwnProperty("repeatTimes") && options["repeatTimes"] !== undefined) ? parseInt(options["repeatTimes"]) : 1;
    let repeatTimes = (options.hasOwnProperty("separator")) ? options["separator"] : "+";
    let addition = (options.hasOwnProperty("addition")) ? (options["addition"] === null) ? "null" : options["addition"] : "";
    let additionRepeat = (options.hasOwnProperty("additionRepeatTimes") && options["additionRepeatTimes"] !== undefined) ? parseInt(options["additionRepeatTimes"]) : 1;
    let additionSeparator = (options.hasOwnProperty("additionSeparator")) ? options["additionSeparator"] : "";
    let arrAdd = [addition];


    if (additionRepeat === 1) {
        str = str + addition;
    } else {
        for (let i = 2; i <= additionRepeat; i++) {
            arrAdd.push(addition);
        }
        str = str + arrAdd.join(additionSeparator);
    }

    let arrStr = [str];

    if (inString > 1) {
        for (var i = 2; i <= inString; i++) {
            arrStr.push(str);
        }
    }

    return arrStr.join(repeatTimes);
};
