package Pages;

import Utilities.Driver;
import Utilities.ExcelReader;
import Utilities.TestBase;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;

public class LogInElements extends TestBase {
    public LogInElements(){
        PageFactory.initElements(driver,this);
    }

    public @FindBy(xpath = ".//*[@id='login']")
    WebElement Username;

    public  @FindBy(xpath = ".//*[@id='password']")
    WebElement PassWord;

    public @FindBy(xpath = ".//*[@id='oe_main_menu_navbar']/div[2]/ul[1]/li[9]/a/span")
    WebElement Purchases;

    public @FindBy(xpath = "//button[contains(text(),'Create')]")
    WebElement CreateButton;

    public @FindBy(xpath = "html/body/div[1]/div[2]/div[1]/div[2]/div[1]/div/button[2]")
    WebElement ImportButton;

    public @FindBy(partialLinkText = "Requests for Quota")
    WebElement RequestsForQuotation;

    public @FindBy(partialLinkText = "Purchase Order")
    WebElement PurchaseOrders;

    public @FindBy(xpath = "html/body/div[1]/div[1]/div[1]/div[9]/ul[1]/li[3]/a/span")
    WebElement Vendors;

    public @FindBy(xpath = "html/body/div[1]/div[1]/div[1]/div[9]/ul[1]/li[4]/a/span")
    WebElement Products;

    public @FindBy(xpath = "html/body/div[1]/div[1]/div[1]/div[9]/ul[2]/li[1]/a/span")
    WebElement IncomingProducts;

    public @FindBy(xpath = "html/body/div[1]/div[1]/div[1]/div[9]/ul[2]/li[2]/a/span")
    WebElement VendorBills;





}
