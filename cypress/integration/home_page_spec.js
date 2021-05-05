describe('The Home Page', () => {
    it('successfully loads', () => {
      cy.visit('/')
    })
    it('finds the content "Welcome to S3 world"', () => {
        cy.visit('/')
    
        cy.contains('Welcome to S3 world')
      })
  })
  