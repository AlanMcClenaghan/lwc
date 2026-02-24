public class MyFirstBatchScheduler implements Schedulable {
    
    public void execute(SchedulableContext sc) {
        Database.executeBatch(new MyFirstBatch(), 200);
	}

}