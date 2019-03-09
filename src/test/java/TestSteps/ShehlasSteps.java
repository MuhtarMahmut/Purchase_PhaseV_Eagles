package TestSteps;

import Utilities.TestBase;
import cucumber.api.java.en.*;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import org.openqa.selenium.support.ui.ExpectedConditions;

public class ShehlasSteps extends TestBase {

    @When("user click Requests for Quotation")
    public void user_click_Requests_for_Quotation() {
        log.RequestsForQuotation.click();
        wait.until(ExpectedConditions.titleContains("Requests for"));
    }

    @Then("user should see create button")
    public void user_should_see_create_button() {
        Assert.assertTrue(log.CreateButton.isDisplayed());
        wait.until(ExpectedConditions.elementToBeClickable(log.CreateButton));
    }

    @Then("when user click create button")
    public void when_user_click_create_button() {
        mylib.sleep(3);
        log.CreateButton.click();
    }

    @Then("the order page should display")
    public void the_order_page_should_display() {
        Assert.assertTrue(Shehla.confirm_order.isDisplayed());
    }

    @When("user click product button")
    public void user_click_product_button() {
        Shehla.products.click();
    }

    @Then("user should see product page")
    public void user_should_see_product_page() {
        Assert.assertTrue(Shehla.productsText.isDisplayed());
    }

    @Then("the product details should display")
    public void the_product_details_should_display() {
        mylib.sleep(3);
        Assert.assertTrue(Shehla.Apple_In_Ear_Headphones.isDisplayed());
    }

    @Then("Click product box")
    public void click_product_box() {
        Shehla.productBox.click();
    }

    @Then("products info should match")
    public void products_info_should_match() {
        String name1=Shehla.itemDiscription.getText();
        driver.navigate().back();
        Assert.assertTrue(Shehla.productonpage.getText().equals(name1));
    }

    @Then("Click Edit Button")
    public void click_Edit_Button() {
        mylib.sleep(2);
        Shehla.editButton.click();
    }

    @Then("Enter {string} to salex price box")
    public void enter_to_salex_price_box(String string) {
        for (int i=0; i<10;i++)
            Shehla.salesPriceBox.sendKeys(Keys.BACK_SPACE);
        Shehla.salesPriceBox.sendKeys(string);

    }

    @Then("Click save button")
    public void click_save_button() {
       Shehla.saveButton.click();
        driver.navigate().back();

    }

    @When("Click Vendor page.")
    public void click_Vendor_page() {
        log.Vendors.click();
        wait.until(ExpectedConditions.titleContains("Vendor"));
    }





}
