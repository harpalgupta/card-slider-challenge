
describe('check card deck', () => {
  before(() => {
    cy.visit('http://localhost:3000');
  });

  it('check background colour of canvas', () => {
    // https://on.cypress.io/title
    cy.get('.canvas')
      .should('have.css', 'background-color')
      // rgb for #f6f6f6 is 246,246,246
      .and('eq', 'rgb(246, 246, 246)');
  });

  it('checks 3 cards exist', () => {
    // check for 3 cards displayed
    cy.get('.card').should('have.length', 3);
  });

  it('check for right navigation button', () => {
    // check for 3 cards displayed
    cy.get('.visibleNavButton>img').should('have.attr', 'alt', 'right button');
  });
  it('check a card has correct border colour and width', () => {
    // check for 3 cards displayed
    cy.get('.card')
      .first()
      .should('have.css', 'border')
      .and('eq', '2px solid rgb(225, 225, 225)');
  });
});

describe('check navigation', () => {
  before(() => {
    cy.visit('http://localhost:3000');
  });

  it('clicks right button expects certain card to be visible', () => {
    // check for 3 cards displayed
    cy.get('.visibleNavButton').first().click();

    cy.get('.cardTitle>h1')
      .first()
      .should('contain', 'We hire differently');
  });
});


describe('check navigation right button is not visible when reached end', () => {
  before(() => {
    cy.visit('http://localhost:3000');
  });

  it('clicks right button not visible after 2 right clicks (reached end)', () => {
    // check for 3 cards displayed
    cy.get('.visibleNavButton').first().click();
    cy.get('.visibleNavButton').eq(1).click();
    //only 1 button should be visible
    cy.get('.visibleNavButton').should('have.length',1);

    cy.get('.visibleNavButton>img').should('have.attr', 'alt', 'left button');

  });
});

describe('check cards', () => {
  before(() => {
    cy.readFile('./data/originalDB.json').then((contents) => {
      cy.writeFile('./data/db.json', contents);
      cy.wait(1000);
      cy.visit('http://localhost:3000');
    });
  }, 20000);
  after(() => {
    cy.readFile('./data/originalDB.json').then((contents) => {
      cy.writeFile('./data/db.json', contents);
      
    });
  }, 20000);

  it('cy.title() - get the title', () => {
    // https://on.cypress.io/title
    cy.title().should('include', 'Mindera Card Slider Challenge');
  });

  it('check card has correct components', () => {
    // https://on.cypress.io/title
    cy.get('.card').should('have.class', 'card');

    cy.get('.cardTitle>h1').should('contain', 'Humans');
  });

  it('check like is true', () => {
    cy.get('.cardEntry>button>.heart')
      .first()
      .should('have.attr', 'alt', 'liked heart');
  });

  it('check like functionality', () => {
    cy.get('.cardEntry>button')
      .first()
      .click();
    cy.get('.cardEntry>button>.heart')
      .first()
      .should('have.attr', 'alt', 'unliked heart');
  });
});
