$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AuthGetMethod.feature");
formatter.feature({
  "line": 1,
  "name": "Retrive data using GET method and Valid Authorization",
  "description": "",
  "id": "retrive-data-using-get-method-and-valid-authorization",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "To verifly Status code after hiting api request using valid accesstoken to server",
  "description": "",
  "id": "retrive-data-using-get-method-and-valid-authorization;to-verifly-status-code-after-hiting-api-request-using-valid-accesstoken-to-server",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Provide Api request URI and accesstoken for retrive data",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Hit request to server using accesstoken for provided api",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "To validate status code 200 for valid accesstoken",
  "keyword": "Then "
});
formatter.match({
  "location": "AuthenticartionGettestcases.provide_Api_request_URI_and_accesstoken_for_retrive_data()"
});
formatter.result({
  "duration": 388184264,
  "status": "passed"
});
formatter.match({
  "location": "AuthenticartionGettestcases.hit_request_to_server_using_accesstoken_for_provided_api()"
});
formatter.result({
  "duration": 4555712117,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 24
    }
  ],
  "location": "AuthenticartionGettestcases.to_validate_status_code_for_valid_accesstoken(int)"
});
formatter.result({
  "duration": 3526281,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "To verifly Response time after hiting api request using valid accesstoken to server",
  "description": "",
  "id": "retrive-data-using-get-method-and-valid-authorization;to-verifly-response-time-after-hiting-api-request-using-valid-accesstoken-to-server",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "Provide Api request URI and accesstoken for retrive data",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Hit request to server using accesstoken for provided api",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "To validate Time for valid accesstoken",
  "keyword": "Then "
});
formatter.match({
  "location": "AuthenticartionGettestcases.provide_Api_request_URI_and_accesstoken_for_retrive_data()"
});
formatter.result({
  "duration": 1121259,
  "status": "passed"
});
formatter.match({
  "location": "AuthenticartionGettestcases.hit_request_to_server_using_accesstoken_for_provided_api()"
});
formatter.result({
  "duration": 460175818,
  "status": "passed"
});
formatter.match({
  "location": "AuthenticartionGettestcases.to_validate_Time_for_valid_accesstoken()"
});
formatter.result({
  "duration": 4555172,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "To verifly Response payload after hiting api request using valid accesstoken to server",
  "description": "",
  "id": "retrive-data-using-get-method-and-valid-authorization;to-verifly-response-payload-after-hiting-api-request-using-valid-accesstoken-to-server",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "Provide Api request URI and accesstoken for retrive data",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "Hit request to server using accesstoken for provided api",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "To validate Json Payload for valid accesstoken",
  "keyword": "Then "
});
formatter.match({
  "location": "AuthenticartionGettestcases.provide_Api_request_URI_and_accesstoken_for_retrive_data()"
});
formatter.result({
  "duration": 1061818,
  "status": "passed"
});
formatter.match({
  "location": "AuthenticartionGettestcases.hit_request_to_server_using_accesstoken_for_provided_api()"
});
formatter.result({
  "duration": 500858478,
  "status": "passed"
});
formatter.match({
  "location": "AuthenticartionGettestcases.to_validate_Json_Payload_for_valid_accesstoken()"
});
formatter.result({
  "duration": 63055258,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "To verifly Header after hiting api request using valid accesstoken to server",
  "description": "",
  "id": "retrive-data-using-get-method-and-valid-authorization;to-verifly-header-after-hiting-api-request-using-valid-accesstoken-to-server",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "Provide Api request URI and accesstoken for retrive data",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "Hit request to server using accesstoken for provided api",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "To validate Headers for valid accesstoken",
  "keyword": "Then "
});
formatter.match({
  "location": "AuthenticartionGettestcases.provide_Api_request_URI_and_accesstoken_for_retrive_data()"
});
formatter.result({
  "duration": 1577974,
  "status": "passed"
});
formatter.match({
  "location": "AuthenticartionGettestcases.hit_request_to_server_using_accesstoken_for_provided_api()"
});
formatter.result({
  "duration": 480670242,
  "status": "passed"
});
formatter.match({
  "location": "AuthenticartionGettestcases.to_validate_Headers_for_valid_accesstoken()"
});
formatter.result({
  "duration": 407109,
  "status": "passed"
});
formatter.uri("GetMethod.feature");
formatter.feature({
  "line": 1,
  "name": "Check the retrive resource from server using GET method and vaidate data",
  "description": "",
  "id": "check-the-retrive-resource-from-server-using-get-method-and-vaidate-data",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "To verifly Status code after hiting api request to server",
  "description": "",
  "id": "check-the-retrive-resource-from-server-using-get-method-and-vaidate-data;to-verifly-status-code-after-hiting-api-request-to-server",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Provide Api request URI for retrive data",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Hit request to server using GET method for provided api",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "To validate status code 200 after hiting request",
  "keyword": "Then "
});
formatter.match({
  "location": "GetMethodTestcases.provide_Api_request_URI_for_retrive_data()"
});
formatter.result({
  "duration": 1160175,
  "status": "passed"
});
formatter.match({
  "location": "GetMethodTestcases.hit_request_to_server_using_GET_method_for_provided_api()"
});
formatter.result({
  "duration": 777571040,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 24
    }
  ],
  "location": "GetMethodTestcases.to_validate_status_code_after_hiting_request(int)"
});
formatter.result({
  "duration": 588426,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "To verifly Response time after hiting api request to server",
  "description": "",
  "id": "check-the-retrive-resource-from-server-using-get-method-and-vaidate-data;to-verifly-response-time-after-hiting-api-request-to-server",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "Provide Api request URI for retrive data",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Hit request to server using GET method for provided api",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "To validate Time after after hiting request",
  "keyword": "Then "
});
formatter.match({
  "location": "GetMethodTestcases.provide_Api_request_URI_for_retrive_data()"
});
formatter.result({
  "duration": 1444553,
  "status": "passed"
});
formatter.match({
  "location": "GetMethodTestcases.hit_request_to_server_using_GET_method_for_provided_api()"
});
formatter.result({
  "duration": 158280239,
  "status": "passed"
});
formatter.match({
  "location": "GetMethodTestcases.to_validate_Time_after_after_hiting_request()"
});
formatter.result({
  "duration": 933528,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "To verifly Response payload after hiting api request to server",
  "description": "",
  "id": "check-the-retrive-resource-from-server-using-get-method-and-vaidate-data;to-verifly-response-payload-after-hiting-api-request-to-server",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "Provide Api request URI for retrive data",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "Hit request to server using GET method for provided api",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "To validate Json Payload after after hiting request",
  "keyword": "Then "
});
formatter.match({
  "location": "GetMethodTestcases.provide_Api_request_URI_for_retrive_data()"
});
formatter.result({
  "duration": 1031028,
  "status": "passed"
});
formatter.match({
  "location": "GetMethodTestcases.hit_request_to_server_using_GET_method_for_provided_api()"
});
formatter.result({
  "duration": 146405660,
  "status": "passed"
});
formatter.match({
  "location": "GetMethodTestcases.to_validate_Json_Payload_after_after_hiting_request()"
});
formatter.result({
  "duration": 1214912,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "To verifly Header after hiting api request to server",
  "description": "",
  "id": "check-the-retrive-resource-from-server-using-get-method-and-vaidate-data;to-verifly-header-after-hiting-api-request-to-server",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "Provide Api request URI for retrive data",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "Hit request to server using GET method for provided api",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "To validate Headers after after hiting request",
  "keyword": "Then "
});
formatter.match({
  "location": "GetMethodTestcases.provide_Api_request_URI_for_retrive_data()"
});
formatter.result({
  "duration": 1064812,
  "status": "passed"
});
formatter.match({
  "location": "GetMethodTestcases.hit_request_to_server_using_GET_method_for_provided_api()"
});
formatter.result({
  "duration": 151012577,
  "status": "passed"
});
formatter.match({
  "location": "GetMethodTestcases.to_validate_Headers_after_after_hiting_request()"
});
formatter.result({
  "duration": 304904,
  "status": "passed"
});
formatter.uri("PostMethod.feature");
formatter.feature({
  "line": 1,
  "name": "Check the post(Create) resource on server using POST method and vaidate data",
  "description": "",
  "id": "check-the-post(create)-resource-on-server-using-post-method-and-vaidate-data",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "To verifly Status code after hiting api request to server",
  "description": "",
  "id": "check-the-post(create)-resource-on-server-using-post-method-and-vaidate-data;to-verifly-status-code-after-hiting-api-request-to-server",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Provide Api request URI for post(Create) data",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Hit request to server using POST method for provided api",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "To validate POST status code 201 after hiting request",
  "keyword": "Then "
});
formatter.match({
  "location": "PostMethodTestcases.provide_Api_request_URI_for_post_Create_data()"
});
formatter.result({
  "duration": 1321393,
  "status": "passed"
});
formatter.match({
  "location": "PostMethodTestcases.hit_request_to_server_using_POST_method_for_provided_api()"
});
formatter.result({
  "duration": 801430525,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 29
    }
  ],
  "location": "PostMethodTestcases.to_validate_POST_status_code_after_hiting_request(int)"
});
formatter.result({
  "duration": 604677,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "To verifly Post Response time after hiting api request to server",
  "description": "",
  "id": "check-the-post(create)-resource-on-server-using-post-method-and-vaidate-data;to-verifly-post-response-time-after-hiting-api-request-to-server",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "Provide Api request URI for post(Create) data",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Hit request to server using POST method for provided api",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "To validate Time after hiting request",
  "keyword": "Then "
});
formatter.match({
  "location": "PostMethodTestcases.provide_Api_request_URI_for_post_Create_data()"
});
formatter.result({
  "duration": 2062057,
  "status": "passed"
});
formatter.match({
  "location": "PostMethodTestcases.hit_request_to_server_using_POST_method_for_provided_api()"
});
formatter.result({
  "duration": 422764996,
  "status": "passed"
});
formatter.match({
  "location": "PostMethodTestcases.to_validate_Time_after_hiting_request()"
});
formatter.result({
  "duration": 366056,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "To verifly Response payload after hiting api request to server",
  "description": "",
  "id": "check-the-post(create)-resource-on-server-using-post-method-and-vaidate-data;to-verifly-response-payload-after-hiting-api-request-to-server",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "Provide Api request URI for post(Create) data",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "Hit request to server using POST method for provided api",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "To validate \"Created at\" Json Payload after after hiting request",
  "keyword": "Then "
});
formatter.match({
  "location": "PostMethodTestcases.provide_Api_request_URI_for_post_Create_data()"
});
formatter.result({
  "duration": 1243991,
  "status": "passed"
});
formatter.match({
  "location": "PostMethodTestcases.hit_request_to_server_using_POST_method_for_provided_api()"
});
formatter.result({
  "duration": 392993452,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Created at",
      "offset": 13
    }
  ],
  "location": "PostMethodTestcases.to_validate_Json_Payload_after_after_hiting_request(String)"
});
formatter.result({
  "duration": 4021910,
  "status": "passed"
});
formatter.uri("PutMethod.feature");
formatter.feature({
  "line": 1,
  "name": "Check the PUT(Update) resource on server using PUT method and vaidate data",
  "description": "",
  "id": "check-the-put(update)-resource-on-server-using-put-method-and-vaidate-data",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "To verifly Status code after hiting api request to server",
  "description": "",
  "id": "check-the-put(update)-resource-on-server-using-put-method-and-vaidate-data;to-verifly-status-code-after-hiting-api-request-to-server",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Provide Api request URI for PUT(update) data",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Hit request to server using PUT method for provided api",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "To validate PUT status code 200 after hiting request",
  "keyword": "Then "
});
formatter.match({
  "location": "PutMethodTestcases.provide_Api_request_URI_for_PUT_Create_data()"
});
formatter.result({
  "duration": 2244658,
  "status": "passed"
});
formatter.match({
  "location": "PutMethodTestcases.hit_request_to_server_using_PUT_method_for_provided_api()"
});
formatter.result({
  "duration": 435251093,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 28
    }
  ],
  "location": "PutMethodTestcases.to_validate_PUT_status_code_after_hiting_request(int)"
});
formatter.result({
  "duration": 322010,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "To verifly PUT Response time after hiting api request to server",
  "description": "",
  "id": "check-the-put(update)-resource-on-server-using-put-method-and-vaidate-data;to-verifly-put-response-time-after-hiting-api-request-to-server",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "Provide Api request URI for PUT(update) data",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Hit request to server using PUT method for provided api",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "To validate PUT response Time after hiting request",
  "keyword": "Then "
});
formatter.match({
  "location": "PutMethodTestcases.provide_Api_request_URI_for_PUT_Create_data()"
});
formatter.result({
  "duration": 1011785,
  "status": "passed"
});
formatter.match({
  "location": "PutMethodTestcases.hit_request_to_server_using_PUT_method_for_provided_api()"
});
formatter.result({
  "duration": 410730482,
  "status": "passed"
});
formatter.match({
  "location": "PutMethodTestcases.to_validate_PUT_response_Time_after_hiting_request()"
});
formatter.result({
  "duration": 511452,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "To verifly PUT Response payload after hiting api request to server",
  "description": "",
  "id": "check-the-put(update)-resource-on-server-using-put-method-and-vaidate-data;to-verifly-put-response-payload-after-hiting-api-request-to-server",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "Provide Api request URI for PUT(update) data",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "Hit request to server using PUT method for provided api",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "To validate Updated Json Payload after after hiting request",
  "keyword": "Then "
});
formatter.match({
  "location": "PutMethodTestcases.provide_Api_request_URI_for_PUT_Create_data()"
});
formatter.result({
  "duration": 1790081,
  "status": "passed"
});
formatter.match({
  "location": "PutMethodTestcases.hit_request_to_server_using_PUT_method_for_provided_api()"
});
formatter.result({
  "duration": 419720660,
  "status": "passed"
});
formatter.match({
  "location": "PutMethodTestcases.to_validate_Updated_Json_Payload_after_after_hiting_request()"
});
formatter.result({
  "duration": 939942,
  "status": "passed"
});
});