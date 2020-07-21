Feature: Check the PUT(Update) resource on server using PUT method and vaidate data

  Scenario: To verifly Status code after hiting api request to server
    Given Provide Api request URI for PUT(update) data
    When Hit request to server using PUT method for provided api
    Then To validate PUT status code 200 after hiting request

  Scenario: To verifly PUT Response time after hiting api request to server
    Given Provide Api request URI for PUT(update) data
    When Hit request to server using PUT method for provided api
    Then To validate PUT response Time after hiting request

  Scenario: To verifly PUT Response payload after hiting api request to server
    Given Provide Api request URI for PUT(update) data
    When Hit request to server using PUT method for provided api
    Then To validate Updated Json Payload after after hiting request
