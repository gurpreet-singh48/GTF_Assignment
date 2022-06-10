/*
This class stores the current amount bank has at any point of time 
and handles features such as debit, credit, check balance and exit
*/
export class Bank {
  #currentAmount;
  constructor() {
    this.#currentAmount = 0;
  }

  // This function takes care of the debit functionality
  debit(amountToBeDebited) {
    if (this.#currentAmount < amountToBeDebited) {
      console.log("Insufficient Balance.");
    } else {
      this.#currentAmount -= amountToBeDebited;
      console.log(`Successfully debited $${amountToBeDebited}`);
    }
  }

  //This function takes care of the credit functionality
  credit(amountToBeCredited) {
    if (this.#currentAmount + amountToBeCredited > 10e9) {
      console.log("Amount exceeding the maximum limit.");
    } else {
      this.#currentAmount += amountToBeCredited;
      console.log(this.#currentAmount);
      console.log(`Successfully credited $${amountToBeCredited}`);
    }
  }

  //This function takes care of the check balance functionality
  checkBalance() {
    const amount = this.#currentAmount;
    const dollars = parseInt(amount);
    const cents = parseInt((amount - Math.floor(amount)) * 100);
    console.log(`Current Balance is ${dollars}D ${cents}C`);
  }
}
