Feature: Accomplishment form

    i want to fill the infomation of my accomplishment and save it


    Scenario: as a user i shuld see a form where i can fill the informations
        Given i browse to the accomplishments page
        When  i  see the header 'Accomplishment' in the page
        Then  i must check the visibility for all the elements in the form
    Scenario: i cannot save the Accomplishment without title
        When  the title is missed in the form
        Then  i should not be able to save the changes
    Scenario: i cannot save the Accomplishment without description
        When  the description is missed in the form
        Then  i should not be able to save the changes
    Scenario: i cannot save the Accomplishment without selecting the check box
        When  the check box is not selected
        Then  i should not be able to save the changes
    Scenario: save changes
        When  all the input are completed
        Then  i can save the changes successfully
        And   see the success window
        And   I go back and I see All the fields in the default value

