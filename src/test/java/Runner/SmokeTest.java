package Runner;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/CucumberFeatures",  glue = "TestSteps",
        plugin = {
                "html:src/test/CucumberReports",
                "junit:src/test/CucumberReports/MyJunitReport.xml",
                "usage:src/test/CucumberReports/MyUsageReport.js",
                "pretty:src/test/CucumberReports/MyprettyReport.txt",
                "json:src/test/CucumberReports/MyJasonReport.js"
        },
        tags = "@Regression",      dryRun = false
)
public class SmokeTest {

}
