public with sharing class serviceVendorsController {
    @AuraEnabled(Cacheable=true)
    public static Account[] getServiceVendors() {
        return [
            SELECT Id, AnnualRevenue, BillingCity, Industry, RecordTypeId, Name 
            FROM Account
            WHERE RecordTypeId = '0124L000000gGeRQAU'
            WITH SECURITY_ENFORCED
            ORDER BY Name
            LIMIT 12
        ];
    }
    
    @AuraEnabled(Cacheable=true)
    public static Account[] searchAccounts(String searchTerm) {
        // Return all Service Vendor Accounts when no search term
        searchTerm = searchTerm.trim();
        if (searchTerm == '') {
            return getServiceVendors();
        }
        // Prepare query paramters
        searchTerm = '%' + searchTerm + '%';
        // Execute search query
        return [
            SELECT Id, AnnualRevenue, BillingCity, Industry, RecordTypeId, Name 
            FROM Account
            WHERE Name LIKE :searchTerm
            AND RecordTypeId = '0124L000000gGeRQAU'
            WITH SECURITY_ENFORCED
            ORDER BY Name
        ];
    }
}