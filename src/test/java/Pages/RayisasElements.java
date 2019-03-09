package Pages;

import Utilities.Driver;
import Utilities.TestBase;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class RayisasElements extends TestBase {
    public RayisasElements(){
        PageFactory.initElements(driver,this);
    }

    public @FindBy(xpath = "//span[@name='amount_tax']")
    WebElement TaxesAmount;

    public @FindBy(xpath="//input[@name='product_qty']")
    WebElement QuantityBox;

    public @FindBy(xpath="//span[@name='qty_received']")
    WebElement RecievedQuantity;

    public @FindBy(xpath="//span[@name='qty_invoiced']")
    WebElement BilledQuantity;


}
