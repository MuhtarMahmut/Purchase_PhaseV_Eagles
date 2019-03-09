package TestSteps;

import Utilities.TestBase;
import cucumber.api.java.en.*;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import java.util.List;

public class ImransSteps extends TestBase{


    @Then("click the save buttons")
    public void click_the_save_buttons() {
        Imran.SaveButton.click();

    }

    @Then("the error message will be displayed.")
    public void the_error_message_will_be_displayed() {
        Assert.assertTrue(Imran.VendorErrorMessage.getText().contains("The following fields are invalid"));

    }

    @Then("Click the Add an Item")
    public void click_the_Add_an_Item() {
        Imran.AddanItem.click();
    }

    @Then("new subtotal should be dispayed")
    public void new_subtotal_should_be_dispayed() {
        Assert.assertTrue(Imran.Subtotal.isDisplayed());
    }

    @Then("should be able to select item from Product Drop Down Box")
    public void should_be_able_to_select_item_from_Product_Drop_Down_Box() {
        Imran.ProductDropDownBox.click();
        new Actions(driver).moveToElement(Imran.RandomElementInProduct).click().perform();

    }

    @Then("the Unit Price Box should be Empty")
    public void the_Unit_Price_Box_should_be_Empty() {
        Assert.assertTrue(Imran.UnitPrice.getText().isEmpty());

    }

    @Then("Delete The item")
    public void delete_The_item() {
        Imran.DeleteTheAddedItem.click();
    }

    @Then("Click The Vendor drop down box and select random vendor")
    public void click_The_Vendor_drop_down_box_and_select_random_vendor() {
        List<WebElement> myele = driver.findElements(By.xpath(".//*[@class='o_input ui-autocomplete-input' and @autocomplete='off']"));
        myele.get(0).click();
        Imran.RandomElementInVendor.click();
    }




}
