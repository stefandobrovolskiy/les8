const prompt = require('prompt-sync')();

const menu = [
  { id: 1, name: 'Бургер', price: 75 },
  { id: 2, name: 'Піца', price: 120 },
  { id: 3, name: 'Салат', price: 60 },
];

function displayMenu() {
  console.log('Меню:');
  menu.forEach(item => console.log(`${item.id}. ${item.name} - $${item.price}`));
}

function placeOrder() {
  const order = { items: [], total: 0 };

  while (true) {
    displayMenu();
    const itemId = prompt('Введіть ID страви, яку ви бажаєте замовити (або напишіть "done" щоб завершити замовлення): ');

    if (itemId.toLowerCase() === 'done') {
      break;
    }

    const selectedItem = menu.find(item => item.id === parseInt(itemId));
    if (selectedItem) {
      order.items.push(selectedItem);
      order.total += selectedItem.price;
      console.log(`Доданно ${selectedItem.name} до замовлення.`);
    } else {
      console.log('Невірне ID. Напишіть знову.');
    }
  }

  return order;
}

function main() {
  console.log('Вітаємо!');
  const customerName = prompt('Як вас звати?: ');

  console.log(`Доброго дня, ${customerName}! Давайте підготуємо ваше замовлення.`);

  const customerOrder = placeOrder();

  console.log('Сума замовлення:');
  customerOrder.items.forEach(item => console.log(`${item.name} - $${item.price}`));
  console.log(`Усього разом: $${customerOrder.total}`);

  console.log('Дякуємо, що замовляєте у нас! Ваша їда вже в дорозі');
}

main();