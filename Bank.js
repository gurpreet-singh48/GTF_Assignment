/*
This class stores the current amount bank has at any point of time 
and handles features such as debit, credit, check balance and exit
*/
export class Bank {
    #currentAmount;
    constructor(initialAmount) {
        this.#currentAmount = initialAmount;
    }

    // This function takes care of the debit functionality
    debit(amountToBeDebited) {
        if(this.#currentAmount < amountToBeDebited) {
            console.log("Insufficient Balance.");
        } else {
            this.#currentAmount -= amountToBeDebited;
            console.log(`Successfully debited $${amountToBeDebited}`);
        }
    }
}