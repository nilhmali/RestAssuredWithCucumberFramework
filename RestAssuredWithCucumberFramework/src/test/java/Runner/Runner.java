package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features= {"Features"},glue={"stepDefinition"},
plugin = {"pretty","html:CucumberReport/Destination"},monochrome=true)
public class Runner {

}
