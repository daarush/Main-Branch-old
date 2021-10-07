package Java.AutoStuff;

import java.awt.event.*;
import javax.swing.*;

public class FinishButtonMouseListener implements MouseListener {
    private Boolean isClicked = false;
    private int numOfBoxes = 0;
    public static JLabel createCommand;

    @Override
    public void mouseClicked(MouseEvent e) {
        if (isClicked == false) {
            isClicked = true;
            System.out.println("true");
            createCommand = new JLabel();
            numOfBoxes = GridButtonMouseListener.getNumberOfBoxes();
            createCommand.setText("Move " + Integer.toString(numOfBoxes) +  " Feet");
            GridCreation.finishPanel.add(createCommand);
        } else if (isClicked == true) {   
            isClicked = false;         
            System.out.println("false");
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

}
