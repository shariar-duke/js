class BankAccount {
  #balance; // Private property

  constructor(accountHolder, balance) {
    this.accountHolder = accountHolder;
    this.#balance = balance; // Private balance
  }

  // Public method that clients can use
  deposit(amount) {
    if (amount > 0) {
      this.#updateBalance(amount); // Calls private method
      console.log(`Deposited ${amount}. New balance: ${this.#balance}`);
    } else {
      console.log("Invalid deposit amount");
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#updateBalance(-amount); // Calls private method
      console.log(`Withdrawn ${amount}. Remaining balance: ${this.#balance}`);
    } else {
      console.log("Invalid withdrawal amount");
    }
  }

  getBalance() {
    return `Balance for ${this.accountHolder}: ${this.#balance}`;
  }

  // Private method (not accessible outside)
  #updateBalance(amount) {
    this.#balance += amount;
  }
}

const account = new BankAccount("John Doe", 1000);

// ❌ account.#updateBalance(500); // ERROR: Private method cannot be accessed directly
account.deposit(500); // ✅ Calls deposit(), which internally calls #updateBalance()
console.log(account.getBalance()); // ✅ Retrieves balance safely
