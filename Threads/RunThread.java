package Main_Branch.Threads;

public class RunThread {
    public static void main(String[] args) throws InterruptedException {
        Thread t1 = new Thread("Thread 1");
        Thread t2 = new Thread("Thread 2");

        t1.run();
        t1.wait(500);

    }
}
