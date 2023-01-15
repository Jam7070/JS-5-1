let obj = receipt()
console.log(obj);
let menu = "Вы заказали ";
let delivery = 9000

for(let key in obj){
    menu = `${menu} ${key}`
    for(let newKey in obj[key]){
    menu  = newKey == "info" ? menu + `${obj[key][newKey]}` : menu;
    delivery = newKey == "price" ? delivery + obj[key][newKey] : delivery
    }
}
console.log(`${menu} | общая стоимость ; ${delivery} сумма`);