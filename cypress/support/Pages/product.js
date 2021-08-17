class productPage {
    
    constructor(){
        this.informacion = `#installments-text`;
        this.nameProduct = `.product-name.desktop > .h1`;
        this.buttomPayOption = `#open-modal-installments`;
        this.selectBank = `#selectBank`;
        this.selectCard = `#selectCardByBank`;
        this.cuotasInfo = `#bodyTable > :nth-child(1) > :nth-child(1)`;
        this.cuotasInfo2 = `#bodyTable > :nth-child(2) > :nth-child(1)`;
        this.cuotasInfo3 = `#bodyTable > :nth-child(3) > :nth-child(1)`;
        this.cuotasInfo4 = `#bodyTable > :nth-child(4) > :nth-child(1)`;
        this.cuotasInfo5 = `#bodyTable > :nth-child(5) > :nth-child(1)`;
    }

    // Metodo para validar el producto seleccionado
    validarNameProduct = (product) => {
        cy.get(this.nameProduct).should(`contain`, product);
    }

    // Metodo para validar la info del producto
    validarInfo = (info) => {
        cy.get(this.informacion).should(`contain`, info);
    }

    // Metodo para ver las opciones de financiacion
    billingOption = () => {
        cy.get(this.buttomPayOption).click();
    }

    // Metodo para seleccionar el banco y la tarjeta
    selectOption = (bankOption, cardOption) => {
        cy.get(this.selectBank).select(bankOption);
        cy.get(this.selectCard).select(cardOption);
    }

    // Metodo para validar las cuotas del producto
    validarCuotas = (info) => {
        cy.get(this.cuotasInfo).should(`not.contain`, info);
        cy.get(this.cuotasInfo2).should(`not.contain`, info);
        cy.get(this.cuotasInfo3).should(`not.contain`, info);
        cy.get(this.cuotasInfo4).should(`not.contain`, info);
        cy.get(this.cuotasInfo5).should(`not.contain`, info);
    }
}

// Se exporta para que pueda ser usado en otros archivos js
export default new productPage();
