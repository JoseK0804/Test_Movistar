// Importar las paginas
import indexPage from "../support/Pages/index";
import productPage from "../support/Pages/product";

describe(`CP003`, ()=> {
    // Se ejecuta antes de todas las pruebas
    before(()=> {
        cy.log(`Empiezan los test`);
    })

    // Se ejecuta despues de todas las pruebas
    after(()=> {
        cy.log(`Terminaron todos los test`);
    })

    // Se ejecuta antes de cada prueba
    beforeEach(()=> {
        cy.log(`Empezo el test`);
        cy.visit(`/`);
    })
 
    // Se ejecuta despues de todas las pruebas
    afterEach(()=> {
        cy.log(`Se termino el test`);
    })

    // Primer test
    it(`Validar cuotas en compra de equipo -Cuotas.60 -Equipo.Tercero de la lista -Banco.Credicoop -Tarjeta.Visa `, ()=> {
        // Metodo para seleccionar el tercer producto de la lista
        indexPage.selectThirdProduct();
        // Metodo para entrar a las opciones de facturacion
        productPage.billingOption();
        // Metodo para seleccionar el banco y la tarjeta 
        productPage.selectOption(`Credicoop`, `Visa`);
        // Metodo para validar que no diga 60 en las cuotas
        productPage.validarCuotas(`60`);
    });
})
