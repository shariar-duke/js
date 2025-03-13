class BankAccount {
  #balance; // Private property

  constructor(accountHolder, balance) {
    this.accountHolder = accountHolder;
    this.#balance = balance; // Private property initialization
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited ${amount}. New balance: ${this.#balance}`);
    } else {
      console.log("Invalid deposit amount");
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrawn ${amount}. Remaining balance: ${this.#balance}`);
    } else {
      console.log("Invalid withdrawal amount");
    }
  }

  getBalance() {
    return `Balance for ${this.accountHolder}: ${this.#balance}`;
  }
}

const account = new BankAccount("John Doe", 1000);

// Trying to modify balance directly
// ❌ account.#balance = -5000; // ERROR: Private field is not accessible

account.deposit(500); // ✅ Works as expected
account.withdraw(200); // ✅ Works as expected
console.log(account.getBalance()); // ✅ Safely retrieves balance
