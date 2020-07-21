Feature: Retrive data using GET method and Valid Authorization

  Scenario: To verifly Status code after hiting api request using valid accesstoken to server
    Given Provide Api request URI and accesstoken for retrive data
    When Hit request to server using accesstoken for provided api
    Then To validate status code 200 for valid accesstoken

  Scenario: To verifly Response time after hiting api request using valid accesstoken to server
    Given Provide Api request URI and accesstoken for retrive data
    When Hit request to server using accesstoken for provided api
    Then To validate Time for valid accesstoken

  Scenario: To verifly Response payload after hiting api request using valid accesstoken to server
    Given Provide Api request URI and accesstoken for retrive data
    When Hit request to server using accesstoken for provided api
    Then To validate Json Payload for valid accesstoken

  Scenario: To verifly Header after hiting api request using valid accesstoken to server
    Given Provide Api request URI and accesstoken for retrive data
    When Hit request to server using accesstoken for provided api
    Then To validate Headers for valid accesstoken
