package TestSteps;

import Utilities.TestBase;
import cucumber.api.java.en.*;
import org.junit.Assert;
import org.openqa.selenium.support.ui.ExpectedConditions;

public class RayisasSteps extends TestBase {

    @When("click the purchaseOrder")
    public void click_the_purchaseOrder() {
        log.PurchaseOrders.click();
        wait.until(ExpectedConditions.titleContains("Purchase"));

    }

    @Then("The default teax should be {int}")
    public void the_default_teax_should_be(Integer int1) {
        Assert.assertTrue(new Double(Rayisa.TaxesAmount.getText()) == 0);
    }

    @Then("Qunatity box should be empty.")
    public void qunatity_box_should_be_empty() {
        Assert.assertTrue(Rayisa.QuantityBox.getText().equals(""));
    }

    @Then("Received Quantity should be equal to {int}.")
    public void received_Quantity_should_be_equal_to(Integer int1) {
        Assert.assertTrue(new Double(Rayisa.RecievedQuantity.getText()) == 0);
    }

    @Then("Billed Quantity should be equal to {int}.")
    public void billed_Quantity_should_be_equal_to(Integer int1) {
        Assert.assertTrue(new Double(Rayisa.BilledQuantity.getText()) == 0);
    }




}
