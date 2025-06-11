public class Customer {
    
    public String customerId = '';
    public String name = '';
    public String contactInfo = '';
    public BankAccount primaryAccount;
    public BankAccount secondaryAccount;

    // Calculate the total balance across both accounts
    public Decimal calculateTotalBalance() {
        
        Decimal total = 0;
        
        if (primaryAccount != null) {
            total += primaryAccount.balance;
        }
        
        if (secondaryAccount != null) {
            total += secondaryAccount.balance;
        }
        
        return total;
        
    }
    
    // Associate a primary bank account
    public void setPrimaryAccount(BankAccount account) {
		this.primaryAccount = account;
    }
    
    // Associate a secondary bank account
    public void setSecondaryAccount(BankAccount account) {
        this.secondaryAccount = account;
    }
    
    // Return a formatted summary of the customer
    public String getCustomerSummary() {
        return 'Customer: ' + name + 
               ' | Total Balance: £' + calculateTotalBalance();
    }
}