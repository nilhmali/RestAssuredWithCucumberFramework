package stepDefinition;

import java.util.concurrent.TimeUnit;

import org.json.JSONObject;
import org.testng.Assert;

import ApiMethods.PutMethod;
import Basesetup.TestBase;
import Utility.Readjsondata;
import cucumber.api.java.en.*;
import io.restassured.response.Response;

public class PutMethodTestcases extends Basesetup.TestBase {

	public TestBase testBase;
	private String MainURL;
	private String URI;
	private Response httpPutResponse;
	private PutMethod httpPost;
	private int putStatusCode;
	private String responseGetbody;
	private JSONObject jsonResponsedata;
	private String updatedAtTime;
	private String updatedAt;
	private String Endpoint;
	private String name;
	private String job;

	@Given("^Provide Api request URI for PUT\\(update\\) data$")
	public void provide_Api_request_URI_for_PUT_Create_data() throws Throwable {

		testBase = new TestBase();
		MainURL = prop.getProperty("URL");
		Endpoint = prop.getProperty("PutMethodEndpoint");
		name = prop.getProperty("PutReqPayloadName");
		job = prop.getProperty("PutReqPayloadJob");
		updatedAt = prop.getProperty("PutJsonResponseData");
		URI = MainURL;

	}

	@When("^Hit request to server using PUT method for provided api$")
	public void hit_request_to_server_using_PUT_method_for_provided_api() throws Throwable {

		httpPost = new PutMethod();
		httpPutResponse = httpPost.putCall(URI, name, job, Endpoint);

	}

	@Then("^To validate PUT status code (\\d+) after hiting request$")
	public void to_validate_PUT_status_code_after_hiting_request(int arg1) throws Throwable {

		System.out.println("---------------Put Testcases------------");

		putStatusCode = httpPutResponse.getStatusCode();
		System.out.println("Response status code is => " + putStatusCode);
		Assert.assertEquals(RESPONSE_STATUSCODE_200, putStatusCode);
	}

	@Then("^To validate PUT response Time after hiting request$")
	public void to_validate_PUT_response_Time_after_hiting_request() throws Throwable {

		Long getResponseTime = httpPutResponse.timeIn(TimeUnit.MILLISECONDS);
		System.out.println("Take Response Time=> " + getResponseTime);

	}

	@Then("^To validate Updated Json Payload after after hiting request$")
	public void to_validate_Updated_Json_Payload_after_after_hiting_request() throws Throwable {

		responseGetbody = httpPutResponse.asString();
		System.out.println("ResponseBody is=> " + responseGetbody);

		jsonResponsedata = new JSONObject(responseGetbody);
		updatedAtTime = Readjsondata.getvalueByJpath(jsonResponsedata, updatedAt);

		System.out.println("createdAt datetime is =>" + updatedAtTime);

	}
}
