import { Transaction } from "./transaction.model";

export class User {

    constructor(
        public _id?: string,
        public name: string = '',
        public password: string = '',
        public balance?: number,
        public transactions?: Array<Transaction>) { }

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

    // _id ?: string
    // name: string
    // password: string
    // balance ?: number
    // transactions ?: Array<Transaction>
}
