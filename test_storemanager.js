function main() {
    var increase = parseInt(readLine(), 10);
    var prices = [98.99, 15.2, 20, 1026];
    for (i=0; i<4; i++){
        prices [i] = increase + prices[i]
    }

    console.log(prices);
}
