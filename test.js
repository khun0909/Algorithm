function solution(n, k) {
    var answer = 0;
    
    const yangPrice = 12000;
    const drinkPrice = 2000;
    const serviceYang = 10;
    
    const totalYang = n * yangPrice;
    const totalDrink = k + drinkPrice;
    const serviceDrink = Math.trunc(n / serviceYang) * drinkPrice
    
    answer = totalYang + totalDrink - serviceDrink

    return answer;
}