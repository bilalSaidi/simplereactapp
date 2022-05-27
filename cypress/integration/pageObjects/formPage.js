class formPage{

    static loadPageForm(){
        beforeEach(()=>{
            cy.visit("/accomplishments")
        })
    }

    static pageTitleChecking(selector , content){
        // Header 
        cy.checkVisibility(selector,content)
    }

    static checkingVisibilityElements(){
        
        // title
        cy.checkVisibility("input[placeholder='Title']").as("title")
        // desciption 
        cy.checkVisibility("textarea.Accomplishment-textarea").as("description")
        // check box 
        cy.checkVisibility("input[type='checkbox']").as("accomplishmentValid")
        cy.checkVisibility("p","This accomplishment is valid")
        // submit button 
        cy.checkVisibility("button.Accomplishment-btn","Submit Accomplishment").as("btnSubmit")
        /* check and uncheck the input type checkbox  */
        cy.get("@accomplishmentValid").check().should("be.checked")
        cy.get("@accomplishmentValid").uncheck().should("not.be.checked")
    }

    static titleMissed(){
        cy.get("@description").type("using cypress to fill the from and submit it , with all the ncessary testing ")
        cy.get("@accomplishmentValid").check().should("be.checked")
    }

    static descriptionMissed(){
        cy.get("@title").type("Learning Cypress")
        cy.get("@accomplishmentValid").check().should("be.checked")  
    }

    static checkboxMissed(){
        cy.get("@title").type("Learning Cypress")
        cy.get("@description").type("using cypress to fill the from and submit it , with all the ncessary testing ")
    }

    static allinputsfilled(){
        cy.get("@title").type("Learning Cypress")
         cy.get("@description").type("using cypress to fill the from and submit it , with all the ncessary testing ")
         cy.get("@accomplishmentValid").check().should("be.checked")
         
    }

    static clickBtnSubmit(){
        cy.get("@btnSubmit").click()
    }

    static missedInformationWarning(){
        cy.checkVisibility("p","Complete the items above to continue")
    }

    static checkVisibilityBtnGoBack(){
        cy.checkVisibility("button.Accomplishment-btn","Go Back")
    }
    static successWindow(){
        cy.checkVisibility("h1","This Accomplisment was Successfully Submitted")
        cy.checkVisibility("img.Accomplishment-img")
       
        
    }
  
    static gobackAndCheckingFormIsClean(){
        cy.checkVisibility("button.Accomplishment-btn","Go Back").click()
        cy.get("@title").should("be.empty")
        cy.get("@description").should("be.empty")
        cy.get("@accomplishmentValid").uncheck().should("not.be.checked")
    }



}


export default formPage;