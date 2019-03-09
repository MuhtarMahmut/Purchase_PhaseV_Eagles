package Pages;

import Utilities.Driver;
import Utilities.TestBase;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ShehlasElements extends TestBase {
    public ShehlasElements(){
        PageFactory.initElements(driver,this);
    }

    @FindBy(xpath = "//button[@class='btn btn-sm btn-default'][contains(text(),'Confirm Order')]")
    public WebElement confirm_order;

    @FindBy(xpath = "/html/body/div[1]/div[1]/div[1]/div[9]/ul[1]/li[4]/a/span")
    public WebElement products;

    @FindBy(xpath = "//li[@class='active']//a[@class='oe_menu_leaf']")
    public WebElement productsText;

    @FindBy(xpath = "/html/body/div[1]/div[2]/div[2]/div/div/div/div[1]/div[2]/strong/span")
    public WebElement Apple_In_Ear_Headphones;

    @FindBy(xpath = "//span[contains(text(),'$ 67.00')]")
    public WebElement price;

    public @FindBy(xpath = "/html/body/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/img")
    WebElement productBox;

    public @FindBy(xpath = "//span[@name='name']")
    WebElement itemDiscription;

    public @FindBy(xpath = "//span[contains(text(),'Apple Wireless Keyboard')]")
    WebElement productonpage;

    public @FindBy(xpath ="//button[contains(text(),'Edit')]" )
    WebElement editButton;

    public @FindBy(xpath = "//*[@class='o_input' and @type='text']")
    WebElement salesPriceBox;

    public @FindBy(xpath = "//div[@class='o_form_buttons_edit']//button[@type='button'][contains(text(),'Save')]")
    WebElement saveButton;



}
