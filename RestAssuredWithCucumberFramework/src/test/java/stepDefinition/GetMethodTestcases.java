package stepDefinition;

import java.util.concurrent.TimeUnit;
import io.restassured.http.Header;
import io.restassured.http.Headers;
import io.restassured.response.Response;

import org.json.JSONObject;
import org.testng.Assert;

import ApiMethods.GetMethod;
import Basesetup.TestBase;
import Utility.Readjsondata;
import cucumber.api.java.en.*;

public class GetMethodTestcases extends Basesetup.TestBase {

	public TestBase testBase;
	private String mainURL;
	private String URI;
	public GetMethodTestcases httpget;
	private Response httpGetResponse;
	private Headers allHeaders;
	private String Content_TypeValues = "";
	private String getMethodEndpoint;
	private String endPoint;
	private String getJsonData;

	@Given("^Provide Api request URI for retrive data$")
	public void provide_Api_request_URI_for_retrive_data() throws Throwable {

		testBase = new TestBase();
		mainURL = prop.getProperty("URL");
		getMethodEndpoint = prop.getProperty("GetMethodEndpoint");
		getJsonData = prop.getProperty("GetJsonResponseData");
		URI = mainURL;
		endPoint = getMethodEndpoint;
	}

	@When("^Hit request to server using GET method for provided api$")
	public void hit_request_to_server_using_GET_method_for_provided_api() throws Throwable {
		GetMethod httpget = new GetMethod();
		httpGetResponse = httpget.getCall(URI, endPoint);
	}

	@Then("^To validate status code (\\d+) after hiting request$")
	public void to_validate_status_code_after_hiting_request(int arg1) throws Throwable {

		System.out.println("---------------Get Testcases---------");
		try {
			int getStatusCode = httpGetResponse.getStatusCode();
			System.out.println("Response status code is => " + getStatusCode);

			Assert.assertEquals(RESPONSE_STATUSCODE_200, getStatusCode);
		} catch (Exception e) {
			System.out.println(e.getStackTrace());
		}
	}

	@Then("^To validate Time after after hiting request$")
	public void to_validate_Time_after_after_hiting_request() throws Throwable {

		Long getResponseTime = httpGetResponse.timeIn(TimeUnit.MILLISECONDS);
		System.out.println("Take Response Time=> " + getResponseTime);
	}

	@Then("^To validate Json Payload after after hiting request$")
	public void to_validate_Json_Payload_after_after_hiting_request() throws Throwable {

		String responseGetbody = httpGetResponse.asString();

		System.out.println("ResponseBody is=> " + responseGetbody);
		JSONObject jsonResponsedata = new JSONObject(responseGetbody);

		// String jsonLastName = Readjsondata.getvalueByJpath(jsonResponsedata,
		// "/data/last_name");
		String jsonLastName = Readjsondata.getvalueByJpath(jsonResponsedata, getJsonData);
		System.out.println("lastName of id 4 is =>" + jsonLastName);

		Assert.assertEquals(jsonArray_ValidateLastname, jsonLastName);
	}

	@Then("^To validate Headers after after hiting request$")
	public void to_validate_Headers_after_after_hiting_request() throws Throwable {
		allHeaders = httpGetResponse.headers();

		// Iterate over all the Headers
		for (Header header : allHeaders) {
			if (header.getName().contains("Content-Type")) {
				System.out.println(header.getName() + " Value: " + header.getValue());
				Content_TypeValues = httpGetResponse.header("Content-Type");
				break;
			}

		}
		Assert.assertEquals(Content_TypeValues, Header_ValidateContentType);

	}

}
