const user = { id: 11, name: 'amir', job: 'actor' };
const userStringified = JSON.stringify(user);
console.log(user);
console.log(userStringified);
const shop = {
    name: 'alia store',
    address: 'Ranbir Road',
    profit: 1500,
    products: ['laptop', 'mobile', 'pepsi'],
    actor: {
        name: 'Alia',
    },
    isExpensive: false
}
const shopStringified = JSON.stringify(shop);
console.log(shop);
console.log(shopStringified);
const converted = JSON.parse(shopStringified);
console.log(converted.actor.name);