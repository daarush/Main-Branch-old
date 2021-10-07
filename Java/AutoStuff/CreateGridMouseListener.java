package Java.AutoStuff;

import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

public class CreateGridMouseListener implements MouseListener {
    private boolean isClicked = false;
    public static JButton newbtn;
    private int gridSize = GridCreation.gridSize;
    private int totalGridBoxes = gridSize * gridSize;

    @Override
    public void mouseClicked(MouseEvent e) {
        int gridCount = 0;
        if (isClicked == false) {
            for (gridCount = 0; gridCount < totalGridBoxes; gridCount++) {
                newbtn = new JButton();
                GridCreation.gridPanel.add(newbtn);
                newbtn.setBackground(Color.lightGray);
                newbtn.addMouseListener(new GridButtonMouseListener());
                GridCreation.gridPanel.validate();
                newbtn.setVisible(true);
                isClicked = true;
            }
        } else if (isClicked == true){
            for (gridCount = 0; gridCount < totalGridBoxes; gridCount++) {
                newbtn.setVisible(false);
                isClicked = false;
            }
        }
    }

    @Override
    public void mousePressed(MouseEvent e) {
        // TODO Auto-generated method stub

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