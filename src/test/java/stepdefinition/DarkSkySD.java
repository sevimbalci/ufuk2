package stepdefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

import runnerTest.webPages.DarkSky;

public class DarkSkySD {
    private DarkSky darkSky = new DarkSky();

    @Given("^I am on DarkSky HomePage$")
    public void verifyHomePage() throws InterruptedException {
        Assert.assertEquals(darkSky.getDarkSkyPageTitle(), "Dark Sky - Broadway, New York, NY");
    }

    @When("^I entered (.+) in search box$")
    public void verifyChosenLocation(String location) throws InterruptedException {
        darkSky.chooseLocation(location);
        //Assert.assertEquals(darkSky.getDarkSkyPageTitle(), "Dark Sky - E Kamm Ave, California");

       //Assert.assertEquals(darkSky.getDarkSkyPageTitle(), "Dark Sky - Fillmore St, San Francisco, CA");
        Assert.assertEquals(darkSky.getDarkSkyPageTitle(),"Dark Sky - Oscar Westover Road, Texas");
        //Oscar Westover Road, Texas
    }

    @Then("^I verify timeline is displayed with two hours incremented$")
    public void verifyTimelineFormat() throws InterruptedException {
       Assert.assertTrue(darkSky.verifyHourFormat("America/Chicago"), "Hours not displayed correctly");


    }

    @When("^I expand today's timeline$")
    public void expandToday() throws InterruptedException {
        darkSky.expandToday();
        Thread.sleep(2000);
    }

    @Then("^I verify lowest and highest temp is displayed correctly$")
    public void verifyTempValues() {
        Assert.assertTrue(darkSky.verifyLowTemp(), "Lowest Temperature is not matching");
        Assert.assertTrue(darkSky.verifyHighTemp(), "Highest Temperature is not matching");
    }
}
