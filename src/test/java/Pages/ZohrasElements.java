package Pages;

import Utilities.Driver;
import Utilities.TestBase;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ZohrasElements extends TestBase {
    public ZohrasElements(){
        PageFactory.initElements(driver,this);
    }

    public @FindBy(xpath = "//tbody//tr[2]//td[1]//div[1]//input[1]")
    WebElement RandomElemnt;

    public @FindBy(xpath="//button[contains(text(),'Action')]")
    WebElement ActionButton;

    public @FindBy(linkText="Delete")
    WebElement DeleteFromActionButton;

    public @FindBy(xpath="//div[@class='modal-body']")
    WebElement confirmTheDelete;

    public  @FindBy(xpath = "//th[@class='o_list_record_selector']//input[@type='checkbox']")
    WebElement ExpectedDateCheckBox;

    public @FindBy(xpath = "//span[@name='product_uom_qty']")
    WebElement QuantityOnRecipe;



}
