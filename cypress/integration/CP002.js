// Importar las paginas
import indexPage from "../support/Pages/index";
import resultFilterPage from "../support/Pages/resultFilter";

describe(`CP002`, ()=> {
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
        cy.viewport(1000, 660);
    })

    // Se ejecuta despues de todas las pruebas
    afterEach(()=> {
        cy.log(`Se termino el test`);
    })

    // Primer test
    it(`Aplicar filtro de equipos -Gama.Alta -Memoria Interna.256GB`, ()=> {
        // Metodo para filrar por gama alta
        indexPage.filterGamaAlta();
        // Metodo para filtrar por 256GB
        resultFilterPage.filter256GB();
        // Metodo para validar que se esta mostrando al menos un producto
        resultFilterPage.existProduct();
        // funcion para saber cuantos articulos hay en la pagina
        cy.get('.toolbar-bottom > .toolbar > .pager > .count-container > .amount > strong').then(($span) => {
            const articles = parseFloat($span.text());
            cy.log(`Hay ` + articles + ` articulos`);
        })
        // Tomar captura de pantalla del resultado final
        cy.screenshot('CP002')
        });
    })
