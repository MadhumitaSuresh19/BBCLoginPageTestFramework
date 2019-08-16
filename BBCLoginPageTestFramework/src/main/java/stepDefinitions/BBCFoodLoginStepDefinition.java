package stepDefinitions;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class BBCFoodLoginStepDefinition {
	
	WebDriver driver;
	JavascriptExecutor js = (JavascriptExecutor) driver;
	
	@Given("^Open Chrome and launch the application$")
	public void open_Chrome_and_launch_the_application()  {
	    // Launch the web page
		System.setProperty("webdriver.chrome.driver", "//C:\\chromedrivernew\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://www.bbcgoodfood.com/");
		driver.manage().window().maximize();
			    
	}

	@Given("^I am on the home page$")
	public void i_am_on_the_home_page()  {
	    // Verifying if landed on home page
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		String title = driver.getTitle();
		Assert.assertEquals(title, "BBC Good Food | Recipes and cooking tips"); 
	}

	@Given("^I hoover over and click Sign in link$")
	public void i_hoover_over_and_click_Sign_in_link()  {
	    //Click on Sign in
		driver.findElement(By.linkText("Sign in")).click();   
	}

	@When("^Sign in page is displayed$")
	public void sign_in_page_is_displayed()  {
	    // Assert to check if on the sign in page
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.manage().deleteAllCookies();
		String title = driver.getTitle();
		Assert.assertEquals(title, "My Good Food | BBC Good Food");
	    
	}

	@Then("^I enter valid username and password$")
	public void i_enter_valid_username_and_password(DataTable credentials)  {
	   	//Entering valid user name and password in their respective field
		JavascriptExecutor jse = (JavascriptExecutor)driver;
		jse.executeScript("window.scrollBy(0,500)", "");
  		List <List<String>> data = credentials.raw();
		driver.findElement(By.id("edit-name")).sendKeys(data.get(0).get(0));
		driver.findElement(By.id("edit-pass")).sendKeys(data.get(0).get(1));
	}

	@Then("^click Sign in$")
	public void click_Sign_in() {
	    // Sign in		
		WebElement signInBtn = driver.findElement(By.name("op"));
	    JavascriptExecutor executor = (JavascriptExecutor)driver;
		executor.executeScript("arguments[0].click();", signInBtn);

	}

	@Then("^I should be sucessfully logged in$")
	public void i_should_be_sucessfully_logged_in() {
	    // Sucessfully logged in
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		String title = driver.getTitle();
		System.out.println("SIGN IN page"+title);
	
	}

	@Then("^Close the browser$")
	public void close_the_browser()  {
	    // Close browser
		driver.close();
	 }

	@Then("^I enter invalid username and password$")
	public void i_enter_invalid_username_and_password(DataTable credentials) {
	   
		
		JavascriptExecutor jse = (JavascriptExecutor)driver;
		jse.executeScript("window.scrollBy(0,500)", "");
      	List <List<String>> data = credentials.raw();
		driver.findElement(By.id("edit-name")).sendKeys(data.get(0).get(0));
		driver.findElement(By.id("edit-pass")).sendKeys(data.get(0).get(1));

	}
	
	@Then("^Sign in$")
	public void Sign_in() {
	    						
		WebElement signInBtn = driver.findElement(By.name("op"));
	    JavascriptExecutor executor = (JavascriptExecutor)driver;
	    driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		executor.executeScript("arguments[0].click();", signInBtn);
	}


	@Then("^I should land on Sign in page$")
	public void i_should_land_on_Sign_in_page() {
	    // Write code here that turns the phrase above into concrete actions
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.manage().deleteAllCookies();
		String title = driver.getTitle();
		Assert.assertEquals(title, "My Good Food | BBC Good Food");
	}

	@Then("^exit browser$")
	public void exit_browser() {
	    // Write code here that turns the phrase above into concrete actions
		driver.close();
	  
	}

	@Then("^I enter valid username and invalid password$")
	public void i_enter_valid_username_and_invalid_password(DataTable credentials)  {
	    
		List <List<String>> data = credentials.raw();
		driver.findElement(By.id("edit-name")).sendKeys(data.get(0).get(0));
		driver.findElement(By.id("edit-pass")).sendKeys(data.get(0).get(1));
		    
	}
	
	@Then("^click on Sign in$")
	public void click_on_Sign_in()  {
	   
		WebElement signInBtn = driver.findElement(By.name("op"));
	    JavascriptExecutor executor = (JavascriptExecutor)driver;
	    driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		executor.executeScript("arguments[0].click();", signInBtn);
	}

	@Then("^land on Sign in page$")
	public void land_on_Sign_in_page()  {
	   
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.manage().deleteAllCookies();
		String title = driver.getTitle();
		Assert.assertEquals(title, "My Good Food | BBC Good Food");
	    
	}

	@Then("^exit$")
	public void exit()  {
	    
	    driver.close();
	}

	@Then("^I leave username and password blank$")
	public void i_leave_username_and_password_blank(DataTable credentials)  {
	   
		List <List<String>> data = credentials.raw();
		driver.findElement(By.id("edit-name")).sendKeys(data.get(0).get(0));
		driver.findElement(By.id("edit-pass")).sendKeys(data.get(0).get(1));
	}

	@Then("^I click Sign in$")
	public void i_click_Sign_in() {
	   
		WebElement signInBtn = driver.findElement(By.name("op"));
	    JavascriptExecutor executor = (JavascriptExecutor)driver;
	    driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		executor.executeScript("arguments[0].click();", signInBtn);
	}

	@Then("^I should not be signed in$")
	public void i_should_not_be_signed_in()  {
	    
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.manage().deleteAllCookies();
		String title = driver.getTitle();
		Assert.assertEquals(title, "My Good Food | BBC Good Food");
	    
	}

	@Then("^Close browser$")
	public void close_browser()  {
	
	    driver.close();
	}

}
