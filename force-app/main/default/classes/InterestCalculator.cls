public class InterestCalculator {

    // Savings interest = balance * rate * (months / 12)
    public Decimal calculateSavingsInterest(BankAccount account, Decimal savingsRate, Decimal months) {
        if (account.accountType == 'Savings') {
            return account.balance * savingsRate * (months / 12);
        }
        return 0;
    }

    // Checking interest = balance * rate * (months / 12)
    public Decimal calculateCheckingInterest(BankAccount account, Decimal checkingRate, Decimal months) {
        if (account.accountType == 'Checking') {
            return account.balance * checkingRate * (months / 12);
        }
        return 0;
    }

    // Total interest = savings interest + checking interest
    public Decimal calculateTotalInterestEarned(
        BankAccount savingsAccount,
        BankAccount checkingAccount,
        Decimal savingsRate,
        Decimal checkingRate,
        Decimal months
    ) {
        Decimal savings = calculateSavingsInterest(savingsAccount, savingsRate, months);
        Decimal checking = calculateCheckingInterest(checkingAccount, checkingRate, months);
        return savings + checking;
    }
}