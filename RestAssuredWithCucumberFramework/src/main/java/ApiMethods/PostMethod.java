package ApiMethods;

import java.io.File;
import java.io.IOException;

import org.json.JSONObject;

import com.fasterxml.jackson.core.JsonGenerationException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import io.restassured.RestAssured;
import io.restassured.response.Response;
import Utility.PostDataPojo;

public class PostMethod {

	JSONObject jsonPostData;
	ObjectMapper mapper;
	PostDataPojo users;
	String categoryJson;

	public Response postCall(String URI, String name, String Job)
			throws JsonGenerationException, JsonMappingException, IOException {

		String jsonDataStored = System.getProperty("user.dir") + "/Resources/PostPojo.json";
		mapper = new ObjectMapper();
		PostDataPojo users = new PostDataPojo(name, Job);

		// Write object data into .json file
		mapper.writeValue(new File(jsonDataStored), users);

		// Object Mapper to serialize Java objects into JSON
		categoryJson = mapper.writeValueAsString(users);

		RestAssured.baseURI = URI;
		Response httpPostResponse = RestAssured.given().body(categoryJson).when().post();

		return httpPostResponse;

	}

}