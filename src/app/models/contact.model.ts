export class Contact {

    constructor(
        public _id?: string,
        public name: string = '',
        public email: string = '',
        public phone: string = '',
        public transactionsNum: number = 0) { }

    setId?() {
        const pt1 = Date.now().toString(16)
        const pt2 = this.getRandomInt(1000, 9999).toString(16)
        const pt3 = this.getRandomInt(1000, 9999).toString(16)
        this._id = `${pt3}-${pt1}-${pt2}`.toUpperCase()
    }

    getRandomInt?(num1, num2) {
        var max = (num1 >= num2) ? num1 + 1 : num2 + 1;
        var min = (num1 <= num2) ? num1 : num2;
        return (Math.floor(Math.random() * (max - min)) + min);
    }
}
