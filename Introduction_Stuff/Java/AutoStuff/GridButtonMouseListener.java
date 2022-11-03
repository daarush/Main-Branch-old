package Introduction_Stuff.Java.AutoStuff;

import java.awt.Color;
import java.awt.event.*;
import javax.swing.*;

/**
 * GridButtonMouseListener
 */
public class GridButtonMouseListener implements MouseListener {
    private boolean isClicked = false;
    private JButton btn = CreateGridMouseListener.newbtn;
    public static int boxesCounter = 0;

    @Override
    public void mouseClicked(MouseEvent e) {
        if (isClicked == false) {
            isClicked = true;
            btn.setBackground(Color.yellow);
            boxesCounter++;
            GridCreation.gridCountLabel.setText("Boxes Total: " + Integer.toString(boxesCounter));
        } else if (isClicked == true) {
            isClicked = false;
            btn.setBackground(Color.lightGray);
            boxesCounter--;
            GridCreation.gridCountLabel.setText("Boxes Total: " + Integer.toString(boxesCounter));
        }
    }

    public static int getNumberOfBoxes() {
        return boxesCounter;
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
