export class usedCars{

    searchForCar(carName){
        const brandField = cy.get('[data-text="Марка"]')
        brandField.type(carName)
        cy.wait(2500)
        const carSelector = '[data-text=' +'"'  + carName + '"' + ']'
        const carDropDownResult = cy.get(carSelector)
        carDropDownResult.first().click({force: true})
    }

     searchForCarModel(carModel){
        const carModelField = cy.get('[data-text="Модель"]')
        carModelField.type(carModel)
        cy.wait(1000)
        const modelSelector = '[data-text=' +'"'  + carModel + '"' + ']'
        const modelDropDownResult = cy.get(modelSelector)
        modelDropDownResult.first().click({force: true})
    }

    clickOnSearchButton(){
        const searchButton = cy.get('[type="submit"]')
        searchButton.click()
    }
}


export const onUsedCarsPage = new usedCars()