class MoreAddAllocationPage {

    //Selectors
    //addSbuSelector = '#mui-347';
    addSbuSelector = "/html[1]/body[1]/div[2]/div[3]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]";
    addClientSelector = "/html[1]/body[1]/div[2]/div[3]/div[2]/div[1]/div[3]/div[1]/div[1]/div[1]/input[1]";
    addProjectSelector = "/html[1]/body[1]/div[2]/div[3]/div[2]/div[1]/div[4]/div[1]/div[1]/div[1]/input[1]";
    addAllocationStartDateSelector = "/html[1]/body[1]/div[2]/div[3]/div[2]/div[1]/div[6]/div[1]/div[1]/input[1]";
    addAllocationEndDateSelector = "/html[1]/body[1]/div[2]/div[3]/div[2]/div[1]/div[7]/div[1]/div[1]/input[1]";
    clickClientDropDownSelector = "//body/div[2]/div[3]/div[2]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/button[2]/*[1]";
    clickProjectDropDownSelector = "//body/div[2]/div[3]/div[2]/div[1]/div[4]/div[1]/div[1]/div[1]/div[1]/button[2]/*[1]";

    //Elements
    elements = {
        addSbuField :() => cy.xpath(this.addSbuSelector),     
        addClientField :() => cy.xpath(this.addClientSelector),
        addProjectField :() =>  cy.xpath(this.addProjectSelector), 
        addAllocationStartDateField :() => cy.xpath(this.addAllocationStartDateSelector),
        addAllocationEndDateField :() => cy.xpath(this.addAllocationEndDateSelector),
        clickClientDropDownField : ()=> cy.xpath(this.clickClientDropDownSelector),
        clickProjectDropDownField : ()=> cy.xpath(this.clickProjectDropDownSelector)
       
    }
    
    //Actions
    addSbu(Sbu){
        this.elements.addSbuField().type(Sbu).type('{downarrow}').type('{enter}');
    }

    addClient(Client){
        this.elements.addClientField().type(Client).type('{downarrow}').type('{enter}');
    }

    addProject(Project){
        this.elements.addProjectField().type(Project).type('{downarrow}').type('{enter}');
    }

    //Allocation start date
    addAllocationStartDate(AllocationStartDate){
        this.elements.addAllocationStartDateField().type(AllocationStartDate).click();
    }

    //allocation end date
    addAllocationEndDate(AllocationEndDate){
        this.elements.addAllocationEndDateField().type(AllocationEndDate).click();
    }

    clickClientDropDown(){
        this.elements.clickClientDropDownField().click();
    }

    clickProjectDropDown(){
        this.elements.clickProjectDropDownField().click();
    }


}



export default MoreAddAllocationPage;


