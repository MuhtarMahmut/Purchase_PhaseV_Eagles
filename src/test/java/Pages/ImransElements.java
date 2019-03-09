package Pages;

import Utilities.Driver;
import Utilities.TestBase;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ImransElements extends TestBase {
    public ImransElements(){
        PageFactory.initElements(driver,this);
    }

    public @FindBy(linkText = "Add an item")
    WebElement AddanItem;

    public @FindBy(xpath = "//div[@name='product_id']//input[@type='text']")
    WebElement ProductDropDownBox;

    public @FindBy(partialLinkText = "Ice")
    WebElement RandomElementInProduct;

    public @FindBy(xpath = "//div[@class='o_form_buttons_edit']//button[@type='button'][contains(text(),'Save')]")
    WebElement SaveButton;

    public @FindBy(xpath = "//div[@class='o_notification_title']")
    WebElement VendorErrorMessage;

    public @FindBy(xpath = "//span[@name='price_subtotal']")
    WebElement Subtotal;

    public @FindBy(xpath = "//input[@name='price_unit']")
    WebElement UnitPrice;

    public @FindBy(xpath = "//td[@class='o_list_record_delete']")
    WebElement DeleteTheAddedItem;

    public @FindBy(linkText = "ACD")
    WebElement RandomElementInVendor;




}
