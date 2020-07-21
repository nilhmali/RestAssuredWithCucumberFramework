package ApiMethods;

import io.restassured.RestAssured;
import io.restassured.response.Response;

public class AutheticationGetMethod {

	Response httpGetResponse;

	public Response getCallWithvalid(String URI, String validAccessToken, String endPoint) {

		RestAssured.baseURI = URI;

		httpGetResponse = RestAssured.given().auth().oauth2(validAccessToken).when().get(endPoint);

		return httpGetResponse;
	}

}