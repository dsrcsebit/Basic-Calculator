var flag = false;

//TO DO for clear on = press
function clear(key) {
    if (flag == true) {
        return key;
    }
}

function calculate(expr) {
    var chars = expr.split("");
    var n = [],
        op = [],
        index = 0,
        oplast = true;
    decimal = false;
    n[index] = "";
    // Parse the expression
    for (var c = 0; c < chars.length; c++) {
        if (isNaN(parseInt(chars[c])) && chars[c] !== "." && !oplast) {
            op[index] = chars[c];
            index++;
            n[index] = "";
            decimal = false;
            oplast = true;
        } else {

            if (decimal == true && chars[c] == ".") {
                return NaN;   //Bug-For double decimal
            }
            if (chars[c] == ".") {
                decimal = true;
            }
            n[index] += chars[c];
            oplast = false;
        }
    }
    // Calculate the expression
    expr = parseFloat(n[0]);
    for (var o = 0; o < op.length; o++) {
        var num = parseFloat(n[o + 1]);
        switch (op[o]) {
            case "+":
                expr = expr + num;
                break;
            case "-":
                expr = expr - num;
                break;
            case "*":
                expr = expr * num;
                break;
            case "/":
                expr = expr / num;
                break;
        }
    }
    return (parseFloat(expr.toPrecision(6))); //Bug float precision
}
