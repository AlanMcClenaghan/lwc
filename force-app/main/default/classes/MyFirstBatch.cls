public class MyFirstBatch implements Database.Batchable<Account>, Database.Stateful {
    
    public Integer processedCount = 0;
    
    // 1) start: tells Salesforce *which records* to process
    public Iterable<Account> start(Database.BatchableContext bc) {
        return [SELECT Id, Name, Description FROM Account LIMIT 1000];
    }
    
    
    // 2) execute: processes one *chunk* (aka scope) of records
    public void execute(Database.BatchableContext bc, List<Account> scope) {
        System.debug('Chunk size = ' + scope.size());
		if (!scope.isEmpty()) System.debug('First Account in chunk = ' + scope[0].Id + ' : ' + scope[0].Name);
        for (Account a : scope) {
    	a.Description = 'Processed by MyFirstBatch at ' + String.valueOf(Datetime.now());
		}
		update scope;
        processedCount += scope.size();
    }
    
    // 3) finish: runs once after all chunks are done
    public void finish(Database.BatchableContext bc) {
        System.debug('Total processed by MyFirstBatch: ' + processedCount);
    }

}