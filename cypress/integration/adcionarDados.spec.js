describe("Automatizando", () => {
    before(() => {
        cy.visit('/')
    })
    
    it("Adicionando dados",() => {
        cy.get('input[name="elementosForm:nome"]').type("João")
        cy.get('input[id="elementosForm:sobrenome"]').type("Ramos")        
    })
    it("CheckBox", () => {
        cy.get('input[id="elementosForm:sexo:0"]').click()
        cy.get('input[id="elementosForm:comidaFavorita:2"]').click()

    })
    //Tirar duvida sobre Dropdownlist com cypress
    it("Combobox",() => {
        cy.xpath("//select[@id='elementosForm:escolaridade']").select('Mestrado')
        
    })
    it("Dropwdonwlist", () => {
        cy.xpath('//select[@id="elementosForm:esportes"]').select('O que eh esporte?')
    }) 
    it("Cadastrando", () => {
        cy.get('input[id="elementosForm:cadastrar"]').click() 
    })
    it("Confirmando", () => {
        cy.get('input[id="confirm"]').click()
        //cy.get('input[id="prompt"]').click()    
    })
    it("Clicando e finalizando programa", () => {
        cy.get('input[id="buttonSimple"]').click()
    })
    

    
    
})