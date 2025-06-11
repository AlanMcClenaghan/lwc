public with sharing class technicianController {
    @AuraEnabled(Cacheable=true)
    public static Contact[] getTechnicians() {
        return [
            SELECT Id, RecordTypeId, Name, Certifications__c 
            FROM Contact
            WHERE RecordTypeId = '0124L000000gH0KQAU'
            WITH SECURITY_ENFORCED
            ORDER BY Name
            LIMIT 12
        ];
    }
    
    @AuraEnabled(Cacheable=true)
    public static Contact[] searchContacts(String searchTerm) {
        // Return all Technican Contacts when no search term
        searchTerm = searchTerm.trim();
        if (searchTerm == '') {
            return getTechnicians();
        }
        // Prepare query paramters
        searchTerm = '%' + searchTerm + '%';
        // Execute search query
        return [
            SELECT Id, RecordTypeId, Name, Certifications__c 
            FROM Contact
            WHERE Name LIKE :searchTerm
            AND RecordTypeId = '0124L000000gH0KQAU'
            WITH SECURITY_ENFORCED
            ORDER BY Name
        ];
    }
}