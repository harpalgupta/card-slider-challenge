const fs = require("fs");
const path = require("path");

const reSeedDatbase = () => {
    fs.copy(
      path.resolve(__dirname, "../data/originalDB.json"),
      path.resolve(__dirname, "../data/db.json"),
  
      err => {
        if (err) console.log(err);
      }
    );
    console.log("reseeded");
    return "reseeded";
  };

describe('check card deck exists', () => {



    

    //   beforeAll(function(done) {
    //     reSeedDatbase();
    //     new Promise(function(resolve) {
    //       setTimeout(resolve, 100);
    //     }).then(function() {
          
    //       done();
    //     });
    //   }, 20000);

    beforeEach(() => {
   
        cy
  .readFile('./data/originalDB.json')
  .then((contents) =>cy.writeFile('./data/db.json', contents)
  )



        cy.visit('http://localhost:3000')
    },20000)


    it('cy.title() - get the title', () => {
        // https://on.cypress.io/title
        cy.title().should('include', 'Mindera Card Slider Challenge')
      })

   it('check card has correct components', () => {
        // https://on.cypress.io/title
        cy.get('.card').should('have.class', 'card')
        //check for 3 cards displayed
        cy.get('.card')
        .should('have.length', 3)    

        cy.get('.cardTitle>h1')
      .should('contain', 'Humans')
    
    })

    it('check like is true', () => {
        cy.get('.cardEntry>button>.heart').first().should('have.attr','alt','liked heart')
    });

    it('check like functionality', () => {
        cy.get('.cardEntry>button').first().click()
        cy.get('.cardEntry>button>.heart').first().should('have.attr','alt','unliked heart')


    });





});