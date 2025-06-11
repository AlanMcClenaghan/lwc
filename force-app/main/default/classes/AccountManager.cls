public with sharing class AccountManager {
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountsWireAdapter(){

        return [SELECT Id, Name, Phone FROM Account Limit 3];
        
    }

    @AuraEnabled
    public static List<Account> getAccountsImperatively(Integer numberOfRecords){

        return [SELECT Id, Name, Phone FROM Account Limit :numberOfRecords];
        
    }

}