package Utilities;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class Driver {
      private static WebDriver driver;

    private Driver() {
    }

    public static WebDriver getDriver(){
        String AA=ExcelReader.getData(3,1).toLowerCase();
        if (driver == null) {
            if(AA.contains("chrome")) {
                WebDriverManager.chromedriver().setup();
                driver = new ChromeDriver();
            } else if(AA.contains("firefox")){
                WebDriverManager.firefoxdriver().setup();
                driver=new FirefoxDriver();
            }
        }
        return driver;
    }

    public static void closeDriver() {
        driver.quit();
        driver = null;

    }


}
