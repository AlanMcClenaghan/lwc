public with sharing class ServiceVendorAccountsController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getServiceVendorAccounts() {
        return [
            SELECT Id, AnnualRevenue, BillingCity, Industry, RecordTypeId, Name 
            FROM Account
            WHERE RecordTypeId = '0124L000000gGeRQAU'
            WITH SECURITY_ENFORCED
            ORDER BY Name
        ];
        // throw new AuraHandledException('Forced error');
    }
}