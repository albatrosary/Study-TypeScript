class BankAccount {  
    constructor(public balance: number) {  
    }  
    deposit(credit: number) {  
        this.balance += credit;  
        return this.balance;  
    }  
}

class CheckingAccount extends BankAccount {  
    constructor(balance: number) {  
        super(balance);  
    }  
    writeCheck(debit: number) {  
        this.balance -= debit;  
    }  
}