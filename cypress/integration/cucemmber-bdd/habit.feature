Feature: habit modal
    i want to fill the habbit infomation
    Scenario: visiting the habit section
        When i browse to the habit section
        Then i must check the visibility of the button add and i click it
    Scenario: filling the modal
        When i click the button add
        Then i must see the modal
        And  the input habit must be visible and enabeld
        And  the btn close should be visible
        And  the btn save chnges should be visible
        And  i type to the input habit
        And  i save the chnages
        And  i check the new card contain the same text i typed in the input

