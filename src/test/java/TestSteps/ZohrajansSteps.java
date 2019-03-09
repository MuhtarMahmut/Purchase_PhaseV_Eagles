package TestSteps;

import Utilities.TestBase;
import cucumber.api.java.en.*;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;

import java.util.List;

public class ZohrajansSteps extends TestBase {

    @When("Click Vendor Bill link.")
    public void click_Vendor_Bill_link() {
        log.VendorBills.click();
        wait.until(ExpectedConditions.titleContains("Bills"));

    }

    @Then("Page title should contain {string}")
    public void page_title_should_contain(String string) {
        Assert.assertTrue(driver.getTitle().contains(string));
    }

    @When("Click the Incoming Products")
    public void click_the_Incoming_Products() {
            log.IncomingProducts.click();
            wait.until(ExpectedConditions.titleContains("Incoming Pro"));
    }

    @When("Click the Products link")
    public void click_the_Products_link() {
      log.Products.click();
      wait.until(ExpectedConditions.titleContains("Produc"));
    }

    @Then("Select the Random product")
    public void select_the_Random_product() {
        Zohrajan.RandomElemnt.click();
    }

    @Then("Click the action button.")
    public void click_the_action_button() {
        Zohrajan.ActionButton.click();
    }

    @Then("Select the delete")
    public void select_the_delete() {
        Zohrajan.DeleteFromActionButton.click();
    }

    @Then("confirmation window will pup up")
    public void confirmation_window_will_pup_up() {
        Assert.assertTrue(Zohrajan.confirmTheDelete.isDisplayed());
    }

    @Then("click the expected date check box")
    public void click_the_expected_date_check_box() {
            Zohrajan.ExpectedDateCheckBox.click();
    }

    @Then("all check boxes will be selected.")
    public void all_check_boxes_will_be_selected() {
        List<WebElement> all = driver.findElements(By.xpath("//tbody//tr//td[1]//div[1]//input[1]"));
        for(WebElement p: all){
            Assert.assertTrue(p.isSelected());
        }

    }






}
