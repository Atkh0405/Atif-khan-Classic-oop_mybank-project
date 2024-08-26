// class
class BankAccount {
    accountNumber;
    accountBalance;
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.accountBalance = balance;
    }
    // publically credit
    credit(amount) {
        if (amount > 0) {
            this.accountBalance += amount;
            console.log("Credit successful. Your new balance is :" + this.accountBalance);
        }
        else {
            console.log("Credit unsuccessful");
        }
    }
    //  publically debit
    debit(amount) {
        if (amount > 0 && amount <= this.accountBalance) {
            this.accountBalance -= amount;
            console.log("Debit successful. Your new balance is:" + this.accountBalance);
        }
        else {
            console.log("Debit unsuccessfully");
        }
    }
}
// Customer Details
class Customer {
    person;
    age;
    gender;
    mobileNumber;
    bankAccount;
    constructor(person, age, gender, mobileNumber, bankAccount) {
        // this property utalization
        this.person = person;
        this.age = age;
        this.gender = gender;
        this.mobileNumber = mobileNumber;
        this.bankAccount = bankAccount;
    }
    // publically user access
    display() {
        console.log("Name:" + this.person.firstname + " " + this.person.lastname);
        console.log("Age:" + this.age);
        console.log("Gender:" + this.gender);
        console.log("Mobile Number:" + this.mobileNumber);
        console.log("Amount In Bank:" + this.bankAccount.accountBalance);
        console.log();
    }
}
const a1 = new BankAccount(0, 80000);
const c1 = new Customer({ firstname: "Atif Ullah", lastname: "Khan" }, 39, "male", 3162345992, a1);
c1.bankAccount.debit(500);
c1.display();
c1.bankAccount.debit(200);
console.log();
const a2 = new BankAccount(0, 80000);
const c2 = new Customer({ firstname: "Taimoor", lastname: "Ali" }, 35, "male", 3187678901, a2);
c2.bankAccount.debit(600);
c2.display();
c2.bankAccount.debit(200);
console.log();
export {};
