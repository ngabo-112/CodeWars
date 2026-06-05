/* Create a BankAccount Class

Create a class that:

Starts with a balance
Has a deposit(amount) method
Has a withdraw(amount) method
Has a getBalance() method

Example:

const account = new BankAccount(100);

account.deposit(50);
account.withdraw(30);

account.getBalance(); // 120
Challenge

Prevent withdrawing more than the current balance. */

class BankAccount{
    constructor(balance){
        this.balance=balance;
    }
    deposit(money){
        this.money=money;
        return this.balance+=this.money;
    }
    withdraw(money) {
        if (money > this.balance) {
            return "Insufficient funds";
        }
         return this.balance -= money;
    }
    getBalance(){
        return this.balance;
    }
}

const account= new BankAccount(100);
 console.log(account.deposit(50));
 console.log(account.withdraw(30));
 console.log(account.getBalance());