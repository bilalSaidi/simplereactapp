/// <reference types="cypress" />
import {Given , When , Then, And} from "cypress-cucumber-preprocessor/steps"
import formPage from "../../pageObjects/formPage"

formPage.loadPageForm()
Given("i browse to the accomplishments page",function(){
    // i'm here using beforeeach that's why i moved formPage.loadPageForm() out of the scope

})
When("i  see the header {string} in the page",function(pageTitle){
    formPage.pageTitleChecking("h2",pageTitle)

})

Then("i must check the visibility for all the elements in the form",function(){
    formPage.checkingVisibilityElements()
})

When("the title is missed in the form",function(pageTitle){
    formPage.checkingVisibilityElements()
    formPage.titleMissed()
})

Then("i should not be able to save the changes",function(){
    formPage.clickBtnSubmit()
    formPage.missedInformationWarning()
})

When("the description is missed in the form",function(pageTitle){
    formPage.checkingVisibilityElements()
    formPage.descriptionMissed()
})

Then("i should not be able to save the changes",function(){
    formPage.clickBtnSubmit()
    formPage.missedInformationWarning()
})

When("the check box is not selected",function(pageTitle){
    formPage.checkingVisibilityElements()
    formPage.checkboxMissed()
})

Then("i should not be able to save the changes",function(){
    formPage.clickBtnSubmit()
    formPage.missedInformationWarning()
})

When("all the input are completed",function(pageTitle){
    formPage.checkingVisibilityElements()
    formPage.allinputsfilled()
})

Then("i can save the changes successfully",function(){
    formPage.clickBtnSubmit()
})
And("see the success window",function(){
    formPage.successWindow()
})

And("I go back and I see All the fields in the default value",function(){
    formPage.gobackAndCheckingFormIsClean()
})

