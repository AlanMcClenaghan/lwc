public class BankAccount {
    
	public String accountNumber = '';
    public Decimal balance = 0;
    public String accountType = '';
    
    public void deposit(Decimal depositAmount) {
        
        if (depositAmount > 0) {
            balance += depositAmount;
        }
        
    }
    
    public void withdraw(Decimal withdrawalAmount) {
        balance -= withdrawalAmount;
    }
    
    public String getAccountDetails() {
        return 'Your account ' + accountNumber + ' is a ' + accountType + ' and has balance of ' + balance + '.';
    }
    
}