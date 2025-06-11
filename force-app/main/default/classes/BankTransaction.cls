public class BankTransaction {
    
    public String transactionId = '';
    public Date transactionDate;
    public Decimal amount = 0;
    public String transactionType = '';
    public String relatedAccount = '';
    
    public Decimal calculateTransactionFee() {
        return amount * 0.25 / 100;
    }
    
    public String getTransactionDetails() {
        return 'transactionId: ' + transactionId +
               'transactionDate: ' + transactionDate +
               'amount: ' + amount +
               'transactionType: ' + transactionType +
               'relatedAccount: ' + relatedAccount;
    }
    
}