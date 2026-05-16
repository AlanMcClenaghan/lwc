public without sharing class InvitationController {
    
    // Get Invitation details by Id
    @AuraEnabled(cacheable=true)
    public static Invitation__c getInvitationDetailsById(String Id) {
        try {
            return [SELECT Id, Twitter_URL__c, Theme__c, Instagram_URL__c, 
            Greeting_Message__c, Facebook_URL__c, Event_Participants__c,
            Event_Introduction__c, Event_Date_and_Time__c 
            FROM Invitation__c 
            WHERE Id = :Id];
        } catch(Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    // Get Invitation details by Id
    @AuraEnabled(cacheable=true)
    public static List<Program_Detail__c> getProgramDetailsByInvitationId(String Id) {
        try {
            return [SELECT Id, Name, Program_Date__c, Program_Start_Time__c, Program_End_Time__c 
            FROM Program_Detail__c 
            WHERE Invitation__c = :Id];
        } catch(Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    //Get Invitation address By Id
    @AuraEnabled(cacheable=true)
    public static Invitation__c getInvitationAddress(String Id) {
        try {
            return [SELECT Id, Event_Address__c, Event_Map_URL__c, Contact_Number__c 
            FROM Invitation__c
            WHERE Id= : Id];
        } catch(Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    //Get RSVP details By Id
    @AuraEnabled(cacheable=true)
    public static Invitation__c getRSVPDetails(String Id){
        try{
            return [SELECT Id, RSVP_Accept_Message__c, RSVP_After_Date_Message__c, RSVP_Decline_Message__c, Respond_By__c 
            FROM Invitation__c 
            WHERE Id= : Id];
        } catch(Exception e){
            throw new AuraHandledException(e.getMessage());
        }
    }

    //Get Response picklist values
    @AuraEnabled(cacheable=true)
    public static List<String> getResponsePicklistValues(){
        //retrieve the picklist values
       List<String> picklistValues = new List<String>();
       for(Schema.PicklistEntry picklistEntry: Invitation_Response__c.Response__c.getDescribe().getPicklistValues()){
        picklistValues.add(picklistEntry.getValue());
       }
       return picklistValues;
    }

    // Submit Invitation Response
    @AuraEnabled
    public static Boolean submitResponse(Id InvitationId, String Name, String Email, String Phone, String Response, String additionalGuests, String additionalComment){
        try{
            if(InvitationId != null) {
               Invitation_Response__c responseRecord = new Invitation_Response__c(
                    Invitation__c = InvitationId,
                    Name__c = Name,
                    Email__c = Email, 
                    Phone__c = Phone,
                    Response__c = Response,
                    Number_of_Additional_Guests__c = Decimal.valueOf(additionalGuests),
                    Additional_Comments__c = additionalComment
                );
                insert responseRecord;
                return true;
            }
            return false;
        } catch(Exception e){
            throw new AuraHandledException(e.getMessage());
        }
    }

}