package Pages;

import Utilities.Driver;
import Utilities.TestBase;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class IhtibarsElements extends TestBase {
    public IhtibarsElements(){
        PageFactory.initElements(driver,this);
    }

    public @FindBy(xpath="//th[@class='o_list_record_selector']//input[@type='checkbox']")
    WebElement ReferenceCheckbox;

    public  @FindBy(xpath="//td[@title='Total Untaxed amount']")
    WebElement totalUntaxtedAmount;

    public @FindBy(xpath = "//span[contains(text(),'Purchases')]")
    WebElement purchaseMoudle;

    public @FindBy(xpath = "//button[contains(text(),'Create')]")
    WebElement CreateButton;




}
