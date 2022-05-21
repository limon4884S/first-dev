const user = { id: 11, name: 'Amir', job: 'actor' };
const stringified = JSON.stringify(user);
//console.log(user);
//console.log(stringified); id, name soho sob string "" hoye jabe .


const shop = {
    name: 'alia Store',
    addrss: 'ranvir road',
    product: ['laptop', 'mobile', 'pepsi'],
    price: 15000,
    isExpensive: false
}
const shopstringified = JSON.stringify(shop);
console.log(shop);
console.log(shopstringified);

const converted = JSON.parse(shopstringified);
//console.log(converted) // ager moto hoye jabe