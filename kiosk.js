class KioskCalc {
    constructor(fruit, quantity) {
        this.fruit="orange";
        this.price=30;
        this.quantity=2;
        this.fruit1="mango";
        this.price1=15;
        this.fruit2="ovacado";
        this.price2=40;
    }
getTotalCost() {
    return `${this.quantity} ${this.fruit} for KES ${this.price*this.quantity}`;
}
}
var kioskCalc=new KioskCalc("orange",2)
console.log(kioskCalc.getTotalCost());