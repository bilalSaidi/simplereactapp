class habitPage{

    static loadPage(){
        beforeEach(()=>{
            cy.visit("/habits")
        })
    
    }

    static checkBtnVisibilityAndClickIt(){
        cy.clickBtnAdd()
    }

    static modalVisibility(){
        cy.get(".modal-dialog").should("be.visible")
    }

    static inputVisibleAndEnabled(){    
        cy.get("input[placeholder='Habit']").should("be.visible").and("be.enabled").as("habbitInput")

    }
    static btnCloseVisibility(){
        cy.contains("button","Close").should("be.visible")
    }
    static btnSaveChangesVisibility(){
        cy.contains("button","Save Changes").should("be.visible").as("SaveChanges")
    }

    static typeToHabitInput(text){
        cy.get('@habbitInput').type(text)
      
    }

    static Savechnages(){
        cy.get('@habbitInput').should(($input) => {
            const val = $input.val()
   
            expect(val).not.to.eq('')
          }).then(()=>{
              cy.get("@SaveChanges").click()
        })
    }

    static checkTheNewCardText(text){
        cy.get(".Habit-cards-container").last().should("be.visible").then(()=>{
            cy.get(".HabitCard__habit-container").should("have.text",text)
      
        })
    }

    

}


export default habitPage;