package stepDefinition;

import java.util.concurrent.TimeUnit;
import io.restassured.http.Header;
import io.restassured.http.Headers;
import io.restassured.response.Response;

import org.json.JSONObject;
import org.testng.Assert;

import ApiMethods.AutheticationGetMethod;
import Basesetup.TestBase;
import Utility.Readjsondata;
import cucumber.api.java.en.*;

public class AuthenticartionGettestcases extends Basesetup.TestBase {

	public TestBase testBase;
	private String serviceUrl;
	private String URI;
	private Response httpGetResponse;
	private Headers allHeaders;
	private String Content_TypeValues = "";
	private AutheticationGetMethod httpget;
	private String accessToken;
	private String endpoint;
	private String responseData;

	@Given("^Provide Api request URI and accesstoken for retrive data$")
	public void provide_Api_request_URI_and_accesstoken_for_retrive_data() throws Throwable {
		testBase = new TestBase();
		serviceUrl = prop.getProperty("AuthenticationURI");
		accessToken = prop.getProperty("AuthAccessToken");
		endpoint = prop.getProperty("AuthEndPoint");
		responseData = prop.getProperty("AuthJsonResponseData");
		URI = serviceUrl;

	}

	@When("^Hit request to server using accesstoken for provided api$")
	public void hit_request_to_server_using_accesstoken_for_provided_api() throws Throwable {
		httpget = new AutheticationGetMethod();
		httpGetResponse = httpget.getCallWithvalid(URI, accessToken, endpoint);
	}

	@Then("^To validate status code (\\d+) for valid accesstoken$")
	public void to_validate_status_code_for_valid_accesstoken(int arg1) throws Throwable {

		int getStatusCode = httpGetResponse.getStatusCode();
		System.out.println("Response status code is => " + getStatusCode);
	}

	@Then("^To validate Time for valid accesstoken$")
	public void to_validate_Time_for_valid_accesstoken() throws Throwable {
		Long getResponseTime = httpGetResponse.timeIn(TimeUnit.MILLISECONDS);
		System.out.println("Take Response Time=> " + getResponseTime);
	}

	@Then("^To validate Json Payload for valid accesstoken$")
	public void to_validate_Json_Payload_for_valid_accesstoken() throws Throwable {
		String responseGetbody = httpGetResponse.asString();
		System.out.println("Return ResponseBody of Valid User=> " + responseGetbody);

		JSONObject jsonResponsedata = new JSONObject(responseGetbody);
		String validAutheticationPass = Readjsondata.getvalueByJpath(jsonResponsedata, responseData);

		System.out.println("Login with valid user =>" + validAutheticationPass);
		String ReturnJsondata_validAuthetication = "true";

		Assert.assertEquals(ReturnJsondata_validAuthetication, validAutheticationPass);
	}

	@Then("^To validate Headers for valid accesstoken$")
	public void to_validate_Headers_for_valid_accesstoken() throws Throwable {
		allHeaders = httpGetResponse.headers();

		// Iterate over all the Headers
		for (Header header : allHeaders) {
			if (header.getName().contains("Content-Type")) {
				System.out.println(header.getName() + " Value: " + header.getValue());
				Content_TypeValues = httpGetResponse.header("Content-Type");
				break;
			}

		}
		Assert.assertEquals(Content_TypeValues, authHeader_ValidateContentType);

	}
}
