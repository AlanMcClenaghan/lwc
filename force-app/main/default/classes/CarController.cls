public with sharing class CarController {

    // Wrapper class
    public class Filters {
        @AuraEnabled
        public  String searchKey {get;set;}
        @AuraEnabled
        public  Decimal maxPrice {get;set;}
        @AuraEnabled
        public  String[] categories {get;set;}
        @AuraEnabled
        public  String[] makes {get;set;}
    }

    @AuraEnabled(Cacheable=true)
    public static List<Car__c> getCars(Filters filters) {

        String key, whereClause = '';
        Decimal maxPrice;
        String[] categories, makes, criteria = new List<String>{};

        if (filters != null) {
            maxPrice = filters.maxPrice;
            categories = filters.categories;
            makes = filters.makes;
            if (!String.isEmpty(filters.searchKey)) {
                key = '%' + filters.searchKey + '%';
                criteria.add('Name LIKE :key');
            }
            if (filters.maxPrice >= 0) {
                criteria.add('MSRP__c <= :maxPrice');
            }
            if (filters.categories != null) {
                criteria.add('Category__c IN :categories');
            }
            if (filters.makes != null) {
                criteria.add('Make__c IN :makes');
            }
            if (criteria.size() > 0) {
                whereClause =  'WHERE ' + String.join(criteria, ' AND ');
            }
        }

        String query = 'SELECT Id, Name, MSRP__c, Description__c, Category__c, Control__c, Make__c, Picture_URL__c FROM Car__c ' + whereClause + ' WITH SECURITY_ENFORCED ORDER BY Name';
 
        return Database.query(query);
    }

    @AuraEnabled(Cacheable=true)
    public static Car__c[] getSimilarCars(Id carId, String[] make){
        return [SELECT Id, Name, MSRP__c, Description__c, Category__c, Picture_URL__c, Make__c FROM Car__c WHERE Make__c IN :make AND Id != :carId];    
    }
}