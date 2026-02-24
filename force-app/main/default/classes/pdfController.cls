public with sharing class pdfController {
    @AuraEnabled
    public static Attachment generatePDF(Id recordId, String htmlData){
        Pagereference page = Page.renderAsPDF; // Visualforce page name
        page.getParameters().put('pdfText', htmlData); // Set the parameters of the Vf page

        Contact con = new Contact(Id=recordId); // Id of the contact record
        Attachment objAttachment = new Attachment(); // Creates new Attachment object record
        
        // Add values to fields of Attachment record:
        objAttachment.Name='invoice.pdf';
        objAttachment.ParentId = con.Id;
        objAttachment.Body = page.getContentaspdf();
        objAttachment.IsPrivate = false;
        
        insert objAttachment; // Insert the record
        return objAttachment; // return the record
    }
}