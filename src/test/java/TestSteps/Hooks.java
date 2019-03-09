package TestSteps;

import Pages.*;
import Utilities.*;
import cucumber.api.Scenario;
import cucumber.api.java.*;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.*;
import java.util.concurrent.TimeUnit;

public class Hooks extends TestBase {

    @Before(order = 1)
    public void SetUp1() {
        driver= Driver.getDriver();
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        driver.manage().timeouts().pageLoadTimeout(20,TimeUnit.SECONDS);
        driver.manage().window().maximize();
    }

    @Before(order = 2)
        public void SetUp2(){
            act=new Actions(driver);
            wait=new WebDriverWait(driver,20);
            log=new LogInElements();
            mylib=new MyLibrary(driver);
            Ihtibar=new IhtibarsElements();
            Muhtar=new MuhtarsElements();
            Zohrajan =new ZohrasElements();
            Imran=new ImransElements();
            Rayisa=new RayisasElements();
            Shehla=new ShehlasElements();
     }
    @Before(order = 3)      // this will log in
    public void SetUp3(){
        driver.navigate().to(ExcelReader.getData(2,1));
        wait.until(ExpectedConditions.titleContains("Login"));
        log.Username.sendKeys(ExcelReader.getData(0,1));
        log.PassWord.sendKeys(ExcelReader.getData(1,1));
        mylib.DynamicElement("button","Log in").click();
        wait.until(ExpectedConditions.titleContains("Inbox"));
        log.Purchases.click();
        wait.until(ExpectedConditions.titleContains("Requests"));
    }

    @After
    public void tearDown(Scenario scenario) {
        act.pause(3000).perform();
          Driver.closeDriver();

    }

}
