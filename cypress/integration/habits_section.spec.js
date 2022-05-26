
/// <reference types="Cypress" />

import habitPage from "./pageObjects/habitPage"

describe("habit",function(){

    habitPage.loadPage()

    // the button add must be exist to clcik it 

    it("click the button add ",function(){
        habitPage.checkBtnVisibilityAndClickIt()
    })

    //   1- the model must be visible
    //   2- the input must be visible and enabeled 
    //   3- the close button must be exist 
    //   4- the Save Chnages button must be exist 
    //   5- clicking the button save changes must be sure that the input not empty 
    //   6- after clicking the button the card should be created 
    //   7- the text inside the card must be the same as the input writting 

    it("modal",function(){
        let TextInputHabit = "learning cypress"
       
        habitPage.checkBtnVisibilityAndClickIt()
        // 1
        habitPage.modalVisibility()
        // 2 
        habitPage.inputVisibleAndEnabled()
        // 3 
        habitPage.btnCloseVisibility()
        // 4 
        habitPage.btnSaveChangesVisibility()
        // 5

        habitPage.typeToHabitInput(TextInputHabit)

        habitPage.Savechnages()
        // 6 & 7
        habitPage.checkTheNewCardText(TextInputHabit)
        
        
      
        
    })


})