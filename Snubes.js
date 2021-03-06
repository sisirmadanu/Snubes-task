describe('Show Password', function(){
    
    it('VISIT PAGE', function(){
        cy.visit('https://www.snubes.com/')  //When user visits home page
    })
    
    it('WHEN USER CLICKS ON SIGN IN',function(){
        cy.contains('Sign In').click()  //When user clicks on Sign In Button from Home page
        cy.get('h4').contains('Sign In')  //When User Validates Sign In popup window      
     })
    
    it('WHEN USER ENTERS USERNAME & PASSWORD',function(){
        cy.get('[placeholder="example@emailaddress.com"]').click() //When user clicks on "emailaddress" text field
        cy.get('[placeholder="example@emailaddress.com"]').type('test@gmail.com') //When user enters emailaddress      
        cy.get('[placeholder="Password"]').click() //When user clicks on "password" text field      
        cy.get('[placeholder="Password"]').type('Qwerty@123') //When user enters password        
     })
    
    it('SHOW PASSWORD VALIDATION',function(){
            cy.contains('Show').click() //When user clicks on "Show" password
            cy.get('[placeholder="Password"]').click() // When user is able to view password    
            cy.get('[name="password"]').should('have.value','Qwerty@123') // When user validates the password
            
     })
           
})
