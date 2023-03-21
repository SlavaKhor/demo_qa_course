import { mainPage, onMainPage } from "../support/QAuto/loginPage"
import { onUsedCarsPage } from "../support/QAuto/usedCars"

describe('Auto ria suit', ()=>{

      it('Click on Used cars button', ()=>{
        cy.viewport(1920, 1080)
        onMainPage.openAutoRia()
                onMainPage.clickOnUsedCars()
        onUsedCarsPage.searchForCar('Kia')
        onUsedCarsPage.searchForCarModel('K5')
        onUsedCarsPage.clickOnSearchButton()
        cy.get('[data-ga-name="Advanced_Search"]')
          .should('contain', 'Уточнити пошук')
        cy.get('[data-name="brand.id[0]"]')
          .should('contain', 'Kia')
        cy.get('[data-name="model.id[0]"]').should('contain', 'K5')
        cy.get('[class="logo"]')
          .invoke('attr', 'aria-label')
          .should('include', 'AUTO.RIA - лідер автомобільної інтернет торгівлі')

      })
        
          


})



