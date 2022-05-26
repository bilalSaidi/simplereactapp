

describe("Locators",function(){
   

    // before each step open this link first 
    beforeEach(()=>{
        cy.visit("/elements")
    })


 // using get method 
    it("getMethod",function(){

        
        // getting All Buttons 
        /*
         this method will return 14 elements 
         performing a click will cause an error 
         cypress will not know wich button must to click 
         */
        // using html elements 
        cy.get("button").as("btn")

        cy.get("h2")

        // getting button based on complete class name   

        cy.get("[class='Elements-btn btn-with-class more-btn-classes']")

        // getting button based on its id

        cy.get('#btn-with-id')

        // getting button based on his type 
        /*
           at cypress gui we can see there is two element with type submit 
           two of them also contain the same class 
           getting one of them based just on get is impossible 
         */

        cy.get('[type="submit"]').as("typeSubmit")

        cy.get(".Elements-btn[type='submit']") // the two give us the same elements
  

        /*
         
            give me all button contain the type submit 
            based on the previous query wrriting before 

            solution aliases 
            using the help of then function 
        
        */

            cy.get("@btn").then(()=>{
                cy.get("@typeSubmit") // call back function will perform the second rule  type submit
            })

        // wrong solution 

        cy.get("@btn").get("@typeSubmit")

            // in this case the two command will work one by one not the same time 
            // at first we will recieve the  get("@btn") and then  get("@typeSubmit")

            /* 
               with get accept any attrubite placeholder type .............
            
            */

            
    })

    // using contain method 

    it("using contains method " , function(){
        // the contains always return one element 
        // selector , content 
        cy.contains("button","Unique Text")  // case 1
        // usig just the content 

        cy.contains("Unique Text") // case 2 

        /*
         the case 1 and 2 give us the same results 
         */


         // search button with text Not Uniaue Text 
        /*
         in this case there are multiple buttons contain the same text
         ------ contains return the first element 
         */
         cy.contains("button","Not Unique Text")

         // we can specify the selector 

         cy.contains("button[type='submit']","Not Unique Text")
    })

    // using find 

    it("using find",function(){
        // find not woking direct with cy 
        // its for descendent elements 

        cy.get("#form-1").find(".Elements-btn.btn-1")
    })
})