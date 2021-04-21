function main() {
    var amount = parseFloat(readLine(), 10);
    var rate = parseFloat(readLine(), 10);
    function convert (a,b) {
        var c = a*b
        return c
    }
    console.log(convert(amount, rate));
}