class Order {
    constructor() {
        this.items = [];
        this.Placed = false;
    }
    addItem(item) {
        if (!this.Placed) {
            this.items.push(item);
            console.log(`${item} додано до замовлення.`);
        } else {
            console.log("Не можна додавати товари після оформлення замовлення.");
        }
    }
    placeOrder() {
        if (this.items.length === 0) {
            console.log("Не можна оформити порожнє замовлення.");
        } else {
            this.Placed = true;
            console.log("Замовлення оформлено. Товари:", this.items.join(", "));
        }
    }
}

const myOrder = new Order();
myOrder.addItem("Ноутбук");
myOrder.addItem("Мишка");
myOrder.placeOrder();
myOrder.addItem("Клавіатура");