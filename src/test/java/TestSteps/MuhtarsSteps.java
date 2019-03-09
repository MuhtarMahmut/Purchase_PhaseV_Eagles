package TestSteps;

import Utilities.TestBase;
import cucumber.api.java.en.*;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import org.openqa.selenium.support.ui.ExpectedConditions;

public class MuhtarsSteps extends TestBase {

    @Then("Header’s of Quotation page equals link's title")
    public void header_s_of_Quotation_page_equals_link_s_title() {
        Assert.assertTrue(driver.getTitle().contains(Muhtar.headerText.getText()));
    }

    @Then("Eneter {string} to Unit Price box")
    public void eneter_to_Unit_Price_box(String string) {
        Muhtar.UnitPrice.sendKeys(Keys.CONTROL + "A" + Keys.BACK_SPACE);
        Muhtar.UnitPrice.sendKeys(string);
        wait.until(ExpectedConditions.textToBePresentInElement(Muhtar.Total, "200.00"));

    }

    @Then("Total tax should equal to Subtotal * Tax rate;")
    public void total_tax_should_equal_to_Subtotal_Tax_rate() {
        double taxrate = 0, subtotal = 0, TotalTax = 0;
        if (!Muhtar.TaxesDropDownBox.getText().isEmpty())
            taxrate = new Double(Muhtar.TaxesDropDownBox.getText());
        if (!Muhtar.Subtotal.getText().isEmpty())
            subtotal = new Double(Muhtar.Subtotal.getText());
        if (!Muhtar.TaxesAmount.getText().isEmpty())
            TotalTax = new Double(Muhtar.TaxesAmount.getText());
        Assert.assertTrue(TotalTax == (subtotal * taxrate));

    }

    @Then("Total Price = subtotal + Taxes amount")
    public void total_Price_subtotal_Taxes_amount() {
        double Totalprice=new Double(Muhtar.Total.getText()),
                SubtotalPrice=new Double(Muhtar.Subtotal.getText()),
                TaxesAmount=new Double(Muhtar.TaxesAmount.getText());
        Assert.assertTrue(Totalprice == (SubtotalPrice + TaxesAmount));

    }



}
