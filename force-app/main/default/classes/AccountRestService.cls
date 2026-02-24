// Annotate this class as a REST reource
// Note: urlMapping is case-sensitive
@RestResource(urlMapping='/AccountApi/*')

// global keyword is required for REST classes
global with sharing class AccountRestService {
    
    // Define expected HTTP format
	@HttpGet
    // global and static keywords is required for exposed methods
    global static Account getAccountById() {
        RestRequest req = RestContext.request;
        String accountId = req.requestURI.substring(req.requestURI.lastIndexOf('/') + 1);

        return [SELECT Id, Name FROM Account WHERE Id = :accountId LIMIT 1];
    }

    // Define expected HTTP format
    @HttpPost
    // global and static keywords is required for exposed methods
    global static String createAccount(String name) {
        Account acc = new Account(Name = name);
        insert acc;
        return acc.Id;
    }
     
}