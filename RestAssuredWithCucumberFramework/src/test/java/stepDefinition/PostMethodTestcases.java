package stepDefinition;

import io.restassured.response.Response;

import java.util.concurrent.TimeUnit;
import org.json.JSONObject;
import org.testng.Assert;

import ApiMethods.PostMethod;
import Basesetup.TestBase;
import Utility.Readjsondata;
import cucumber.api.java.en.*;

public class PostMethodTestcases extends Basesetup.TestBase {

	public TestBase testBase;
	private String mainURL;
	private String URI;
	private Response httpPostResponse;
	private PostMethod httpPost;
	private String name;
	private String job;
	private String createdAt;
	private String createdAtTime;

	@Given("^Provide Api request URI for post\\(Create\\) data$")
	public void provide_Api_request_URI_for_post_Create_data() throws Throwable {

		testBase = new TestBase();
		mainURL = prop.getProperty("URL");
		name = prop.getProperty("PostReqPayloadName");
		job = prop.getProperty("PostReqPayloadJob");
		createdAt = prop.getProperty("PostJsonResponseData");
		URI = mainURL;

	}

	@When("^Hit request to server using POST method for provided api$")
	public void hit_request_to_server_using_POST_method_for_provided_api() throws Throwable {

		httpPost = new PostMethod();

		// httpPostResponse = httpPost.postCall(URI,"Jeet","QA");
		httpPostResponse = httpPost.postCall(URI, name, job);

	}

	@Then("^To validate POST status code (\\d+) after hiting request$")
	public void to_validate_POST_status_code_after_hiting_request(int arg1) throws Throwable {
		System.out.println("---------------Post Testcases------------");

		int postStatusCode = httpPostResponse.getStatusCode();
		System.out.println("Response status code is => " + postStatusCode);

		Assert.assertEquals(RESPONSE_STATUSCODE_201_CREATED, postStatusCode);
	}

	@Then("^To validate Time after hiting request$")
	public void to_validate_Time_after_hiting_request() throws Throwable {

		Long getResponseTime = httpPostResponse.timeIn(TimeUnit.MILLISECONDS);
		System.out.println("Take Response Time=> " + getResponseTime);
	}

	@Then("^To validate \"([^\"]*)\" Json Payload after after hiting request$")
	public void to_validate_Json_Payload_after_after_hiting_request(String arg1) throws Throwable {

		String responseGetbody = httpPostResponse.asString();
		System.out.println("ResponseBody is=> " + responseGetbody);

		JSONObject jsonResponsedata = new JSONObject(responseGetbody);
		createdAtTime = Readjsondata.getvalueByJpath(jsonResponsedata, createdAt);

		// Assert.assertEquals("2019-12-18T08:51:03.928Z", createdAt);

		System.out.println("createdAt datetime is =>" + createdAt);

	}

}
