package TestSteps;

import Utilities.TestBase;
import cucumber.api.java.en.*;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;

import java.util.List;

public class IhtibarsSteps extends TestBase {

    public List<WebElement> allcheckboxes;

    @When("click the Reference check box")
    public void click_the_Reference_check_box() {
        Ihtibar.ReferenceCheckbox.click();
    }

    @Then("All check boxes will be selected")
    public void all_check_boxes_will_be_selected() {
        String xpath1="/html[1]/body[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr/td[1]/div[1]/input[1]";
        allcheckboxes= driver.findElements(By.xpath(xpath1));
        for (WebElement p : allcheckboxes)
            Assert.assertTrue(p.isSelected());
    }

    @When("click the Reference check box again")
    public void click_the_Reference_check_box_again() {
        Ihtibar.ReferenceCheckbox.click();
    }

    @Then("All check boxes will be deselected.")
    public void all_check_boxes_will_be_deselected() {
        String xpath1 = "/html[1]/body[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr/td[1]/div[1]/input[1]";
        allcheckboxes = driver.findElements(By.xpath(xpath1));
        for (WebElement p : allcheckboxes)
            Assert.assertFalse(p.isSelected());
    }

    @When("click the each products check box.")
    public void click_the_each_products_check_box() {
        String AA="/html[1]/body[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr";
        allcheckboxes=driver.findElements(By.xpath(AA+"/td[1]/div[1]/input[1]"));
        for(WebElement p : allcheckboxes){
            mylib.sleep(0.2);
            p.click();
            Assert.assertTrue(p.isSelected());
        }
    }

    @Then("each products check box will be selected.")
    public void each_products_check_box_will_be_selected() {
        String AA="/html[1]/body[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr";
        List<WebElement> allcheckboxes=driver.findElements(By.xpath(AA+"/td[1]/div[1]/input[1]"));
        for(WebElement p : allcheckboxes){
            Assert.assertTrue(p.isSelected());
        }
    }

    @Then("sum of all untexted amount equal to the total balance shown at the end.")
    public void sum_of_all_untexted_amount_equal_to_the_total_balance_shown_at_the_end() {
        String tota="/html[1]/body[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr";
        List<WebElement> untaxted=driver.findElements(By.xpath(tota+"/td[7]"));
        String b=Ihtibar.totalUntaxtedAmount.getText().replace(",","");
        double B=new Double(b);
        double total=0;
        for(int i=0; i<untaxted.size();i++) {
            String a=untaxted.get(i).getText().replace("$ ", "").replace(",","");
            double A=new Double(a);
            total+=A;
        }
        Assert.assertTrue(total==B);
    }

    @Then("each vendor's name on table matches with thier name on recipe.")
    public void each_vendor_s_name_on_table_matches_with_thier_name_on_recipe() {
        String x = "/html[1]/body[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[";
        for (int i = 1; i < 10; i++) {
            WebElement VendorNameOnTable = driver.findElement(By.xpath(x + i + "]/td[4]"));
            String ExpectedName = VendorNameOnTable.getText();
            VendorNameOnTable.click();
            WebElement VendorNameOnRecipe = driver.findElement(By.xpath("//a[@name='partner_id']"));
            Assert.assertTrue(ExpectedName.contains(VendorNameOnRecipe.getText()));
            Ihtibar.purchaseMoudle.click();
            wait.until(ExpectedConditions.titleContains("Requests"));
        }
    }



}