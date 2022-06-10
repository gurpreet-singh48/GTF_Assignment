//import readline module
import reader from "readline-sync";
import { Bank } from "./Bank.js";

export class UserInteractions {
  #selectedOption;

  constructor() {
    this.#selectedOption = "4"; //by default - 4 ==> exit
    //create bank object
    this.bank = new Bank();
  }

  selectMenuOption() {
    // question user to select option
    this.#selectedOption = reader.question(
      "Select an option:\n\t1. Credit\n\t2. Debit\n\t3. Check Balance\n\t4. Exit\n => "
    );
  }

  getMenuOption() {
    return this.#selectedOption;
  }

  showOptionsBasedOnSelectedMenu() {
    switch (this.#selectedOption) {
      case "1":
        this.bank.credit(this.getAmountFromUser());
        break;
      case "2":
        this.bank.debit(this.getAmountFromUser());
        break;
      case "3":
        this.bank.checkBalance();
        break;
      case "4":
        break;
    }
  }

  getAmountFromUser() {
    let enteredAmount = reader.question("Enter Amount:\n => ");

    const [dollar, cents] = enteredAmount.split(" ");
    return (
      +dollar.substring(0, dollar.length - 1) +
      +cents.substring(0, cents.length - 1) / 100
    );
  }
}
