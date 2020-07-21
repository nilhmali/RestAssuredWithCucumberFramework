Feature: Check the retrive resource from server using GET method and vaidate data

  Scenario: To verifly Status code after hiting api request to server
    Given Provide Api request URI for retrive data
    When Hit request to server using GET method for provided api
    Then To validate status code 200 after hiting request

  Scenario: To verifly Response time after hiting api request to server
    Given Provide Api request URI for retrive data
    When Hit request to server using GET method for provided api
    Then To validate Time after after hiting request

  Scenario: To verifly Response payload after hiting api request to server
    Given Provide Api request URI for retrive data
    When Hit request to server using GET method for provided api
    Then To validate Json Payload after after hiting request

  Scenario: To verifly Header after hiting api request to server
    Given Provide Api request URI for retrive data
    When Hit request to server using GET method for provided api
    Then To validate Headers after after hiting request
