/// <reference types="cypress" />
import {Given , When , Then , And} from "cypress-cucumber-preprocessor/steps"
import habitPage from "../../pageObjects/habitPage"
habitPage.loadPage()
let TextInputHabit = "learning cypress"
When("i browse to the habit section",function(){
    
    // i am using before each scope , i moved habitPage.loadPage() out of the scope 

})
Then("i must check the visibility of the button add and i click it",function(){
    habitPage.checkBtnVisibilityAndClickIt()
})

When("i click the button add",function(){
    
    habitPage.checkBtnVisibilityAndClickIt()

})
Then("i must see the modal",function(){
    habitPage.modalVisibility()
})
And("the input habit must be visible and enabeld",function(){
    habitPage.inputVisibleAndEnabled()
})
And("the btn close should be visible",function(){
    habitPage.btnCloseVisibility()
})
And("the btn save chnges should be visible",function(){
    habitPage.btnSaveChangesVisibility()
})
And("i type to the input habit",function(){
    habitPage.typeToHabitInput(TextInputHabit)
})
And("i save the chnages",function(){
    habitPage.Savechnages()
})

And("i check the new card contain the same text i typed in the input",function(){
    habitPage.checkTheNewCardText(TextInputHabit)
})