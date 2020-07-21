Feature: Check the post(Create) resource on server using POST method and vaidate data

  Scenario: To verifly Status code after hiting api request to server
    Given Provide Api request URI for post(Create) data
    When Hit request to server using POST method for provided api
    Then To validate POST status code 201 after hiting request

  Scenario: To verifly Post Response time after hiting api request to server
    Given Provide Api request URI for post(Create) data
    When Hit request to server using POST method for provided api
    Then To validate Time after hiting request

  Scenario: To verifly Response payload after hiting api request to server
    Given Provide Api request URI for post(Create) data
    When Hit request to server using POST method for provided api
    Then To validate "Created at" Json Payload after after hiting request
