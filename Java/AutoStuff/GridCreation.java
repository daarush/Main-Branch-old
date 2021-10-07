package Java.AutoStuff;

import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
//add extends evenlistener, etc
public class GridCreation implements MouseListener, MouseMotionListener, ActionListener {
    static JFrame mainFrame;
    static JPanel sidePanel = new JPanel();
    public static JPanel gridPanel = new JPanel();
    public static JPanel finishPanel = new JPanel();

    public static JButton createGridButton = new JButton("Create Grid");
    public static JButton finishButton = new JButton("Finish");

    public static JLabel gridCountLabel = new JLabel();
    public static int gridSize = 16;

    public static void main(String[] args) {
        setUpJFrame();

        gridCountLabel.setForeground(Color.white);
        setUpSidePanel();
        mainFrame.add(sidePanel, BorderLayout.WEST);

        gridPanel.setLayout(new GridLayout(gridSize, gridSize));
        gridPanel.setBackground(Color.lightGray);
        mainFrame.add(gridPanel, BorderLayout.CENTER);

        finishPanel.setLayout(new BoxLayout(finishPanel, BoxLayout.Y_AXIS));
        finishPanel.add(Box.createRigidArea(new Dimension(15, 15)));
        finishPanel.setBorder(BorderFactory.createLineBorder(Color.black));
        finishPanel.setBackground(Color.magenta);
        sidePanel.add(finishPanel, BorderLayout.CENTER);
        
        createGridButton.addMouseListener(new CreateGridMouseListener());
        finishButton.addMouseListener(new FinishButtonMouseListener());

        mainFrame.setVisible(true); // <-- this need to be always last
        print("init Done");
    }

    public static void setUpJFrame() {
        mainFrame = new JFrame("Main Frame");
        mainFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);        
        mainFrame.setLayout(new BorderLayout());
        mainFrame.setSize(600, 400);
        mainFrame.setLocationRelativeTo(null);
    }

    public static void setUpSidePanel() {
        sidePanel.setLayout(new BoxLayout(sidePanel, BoxLayout.Y_AXIS));
        sidePanel.setBackground(Color.darkGray);
        sidePanel.setBorder(BorderFactory.createLineBorder(Color.black));        
        sidePanel.add(createGridButton);
        sidePanel.add(gridCountLabel);
        sidePanel.add(Box.createRigidArea(new Dimension(15, 15)));
        sidePanel.setBorder(BorderFactory.createLineBorder(Color.black));
        sidePanel.add(finishButton);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        // TODO Auto-generated method stub

    }

    @Override
    public void mouseDragged(MouseEvent e) {
        // TODO Auto-generated method stub

    }

    @Override
    public void mouseMoved(MouseEvent e) {
        // TODO Auto-generated method stub

    }

    @Override
    public void mouseClicked(MouseEvent e) {
        JButton newbtn;
        print("Is in");
        int gridCount = 0;
        for (gridCount =0; gridCount<17; gridCount++) {
            newbtn = new JButton(Integer.toString(gridCount));
            gridPanel.add(newbtn);
        }

    }

    @Override
    public void mousePressed(MouseEvent e) {

    }

    @Override
    public void mouseReleased(MouseEvent e) {
        // TODO Auto-generated method stub

    }

    @Override
    public void mouseEntered(MouseEvent e) {
        // TODO Auto-generated method stub

    }

    @Override
    public void mouseExited(MouseEvent e) {
        // TODO Auto-generated method stub

    }

    public static void print(String string) {
        System.out.println(string);
    }
}