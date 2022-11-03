package Introduction_Stuff.Threads;

public class Thread implements Runnable {
    String name;

    public Thread(String name) {
        this.name = name;
    }

    @Override
    public void run() {
        System.out.println(name + " is running");

        System.out.println(name + " is running after 500ms");
    }

}
