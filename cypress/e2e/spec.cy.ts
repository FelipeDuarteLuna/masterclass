describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');

    // submit post form
    cy.get('input[name="title"]').type('Post title Luna');
    cy.get('textarea[name="body"]').type('Post body Luna');
    cy.get('button[type="submit"]').click();

    // check the post card
    cy.get('.post').should('be.visible');
    cy.get('.post-title').should('contain', 'Post title Luna');
    cy.get('.post-body').should('contain', 'Post body Luna');
  });
});
