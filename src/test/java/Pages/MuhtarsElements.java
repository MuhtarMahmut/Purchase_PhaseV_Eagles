package Pages;

import Utilities.Driver;
import Utilities.TestBase;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class MuhtarsElements extends TestBase {

    public MuhtarsElements(){
        PageFactory.initElements(driver,this);
    }

    public @FindBy(xpath="//ol[@class='breadcrumb']")
    WebElement headerText;

    public @FindBy(xpath = "//input[@name='price_unit']")
    WebElement UnitPrice;

    public @FindBy(xpath = "//span[@name='amount_total']")
    WebElement Total;

    public @FindBy(xpath="//div[@name='taxes_id']//input[@type='text']")
    WebElement TaxesDropDownBox;

    public @FindBy(xpath = "//span[@name='price_subtotal']")
    WebElement Subtotal;

    public @FindBy(xpath = "//span[@name='amount_tax']")
    WebElement TaxesAmount;



}

