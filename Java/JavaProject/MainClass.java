package JavaProject;

import java.awt.*;
import javax.swing.*;

public class MainClass {

    public static void main(String[] args) {
        JFrame window = new JFrame("Game Window");
        window.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        window.setSize(500, 300);
        window.setLocationRelativeTo(null);

        JPanel panel = new JPanel();
        panel.setBounds(4, 8, 20, 20);
        panel.setBackground(Color.gray);

        window.setVisible(true);
    }
}
