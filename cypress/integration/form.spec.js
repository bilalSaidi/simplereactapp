/// <reference types="Cypress" />

import formPage from "./pageObjects/formPage";
describe("form_inputs",function(){

    // Loading the page 
    
    formPage.loadPageForm()
    it("form",function(){
        // checkeing all the element are exist and visible
        formPage.pageTitleChecking("h2","Accomplishment")
        formPage.checkingVisibilityElements()


        // after submitting the form 
        /*
          there two cases 
           1- the user did not fill all the neccessary information : in this case a warning text should appear [Complete the items above to continue]
           2- the user fill all the neccessary information another window should appear noticing him that the  Accomplisment was Successfully Submitted
        */
        // 1 - missing information
            // missing the title 
            formPage.titleMissed()
            formPage.clickBtnSubmit()
            formPage.missedInformationWarning()
            
            // form Cleaning  will clean all tha inputs and refresh the page 
            cy.formCleaning()

            // missing the description
            formPage.descriptionMissed()
            formPage.clickBtnSubmit()
            formPage.missedInformationWarning()
               
            // form Cleaning  will clean all tha inputs and refresh the page 
            cy.formCleaning()
          
            // missing checking the check box input 
            formPage.checkboxMissed()
            formPage.clickBtnSubmit()
            formPage.missedInformationWarning()

            // form Cleaning  will clean all tha inputs and refresh the page 
            cy.formCleaning()

         //  2- filliing the form  correctly
         formPage.allinputsfilled()
         formPage.clickBtnSubmit()


         // success window should appear 

         formPage.successWindow()

         // go back should make all the form clean 
         formPage.gobackAndCheckingFormIsClean()

    })

})