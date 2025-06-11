public with sharing class TaskManagerController {
    @AuraEnabled(cacheable=true)
    public static List<Task> getTasks() {
        return [SELECT Id, Subject, ActivityDate, Status FROM Task WHERE OwnerId = :UserInfo.getUserId()];
    }

    @AuraEnabled
    public static void updateTask(Id taskId, String status) {
        Task task = [SELECT Id, Status FROM Task WHERE Id = :taskId LIMIT 1];
        task.Status = status;
        update task;
    }

    @AuraEnabled
    public static void createTask(Task task) {
        task.OwnerId = UserInfo.getUserId();
        insert task;
    }
}