class AllocationManagementPage {
    
    // SELECTORS
    clickNewAllocationSelector = ':nth-child(2) > .css-1xhj18k > .MuiButton-root';
    getEmployeeSelector = '#mui-20';
    getSbuSelector = '#mui-22';
    getClientSelector = '#mui-24';
    getProjectSelector = '#mui-26';
    getAllocationEndDateSelector = '#mui-30';
    getAllocationStartDateSelector = '#mui-29';
    clickBillableRadioBtnSelector = "/html/body/div[2]/div[3]/div[2]/div/div[8]/div/div/label[1]/span[1]/input";
    clickNonBillableRadioBtnSelector = "/html/body/div[2]/div[3]/div[2]/div/div[8]/div/div/label[2]/span[1]/input";
    clickAllocateBtnSelector = ':nth-child(11) > .MuiButton-root';
    clickPercentageSliderSelector = "/html/body/div[2]/div[3]/div[2]/div/div[11]/div/span/span[24]";
    getBillingStartDateSelector = "/html[1]/body[1]/div[2]/div[3]/div[2]/div[1]/div[9]/div[1]/div[1]/input[1]";
    getBillingEndDateSelector = "/html[1]/body[1]/div[2]/div[3]/div[2]/div[1]/div[10]/div[1]/div[1]/input[1]";
     
    // ELEMENTS
    elements={
        clickNewAllocationField :() => cy.get (this.clickNewAllocationSelector),
        getEmployeeField :() => cy.get(this.getEmployeeSelector),
        getSbuField :() => cy.get(this.getSbuSelector),
        getClientField :() => cy.get(this.getClientSelector),
        getProjectField :() => cy.get(this.getProjectSelector),
        getAllocationStartDateField :() => cy.get(this.getAllocationStartDateSelector),
        getAllocationEndDateField :() => cy.get(this.getAllocationEndDateSelector),
        clickBillableRadioBtnField :() => cy.xpath(this.clickBillableRadioBtnSelector),
        clickNonBillableRadioBtnField :() => cy.xpath(this.clickNonBillableRadioBtnSelector),
        clickAllocateBtnField :() => cy.get(this.clickAllocateBtnSelector),
        clickPercentageSliderField :() => cy.xpath(this.clickPercentageSliderSelector),
        getBillingStartDateField : () => cy.xpath(this.getBillingStartDateSelector),
        getBillingEndDateField : () => cy.xpath(this.getBillingEndDateSelector) 
   
    }
    
    //Actions
    clickNewAllocation(){
       this.elements.clickNewAllocationField().click();
    }

    //employee details
    getEmployee(Employee){
        this.elements.getEmployeeField().type(Employee).type('{downarrow}').type('{enter}');
    }

    getSbu(Sbu){
       return this.elements.getSbuField().type(Sbu).type('{downarrow}').type('{downarrow}').type('{enter}');
    }

    getClient(Client){
        this.elements.getClientField().type(Client).type('{downarrow}').type('{enter}');
    }

    getProject(Project){
        this.elements.getProjectField().type(Project).type('{downarrow}').type('{enter}');
    }

    getProjectRole(ProjectRole){
        //return cy.get('#mui-28').click();
        return this.elements.getProjectRoleField().type(ProjectRole).type('{downarrow}').type('{enter}');
    }

    //Allocation start date
    getAllocationStartDate(AllocationStartDate){
        this.elements.getAllocationStartDateField().clear().type(AllocationStartDate).click();
    }

    //allocation end dates
    getAllocationEndDate(AllocationEndDate){
        this.elements.getAllocationEndDateField().type(AllocationEndDate).click();
    }

    //billable or not
    clickBillableRadioBtn(){
        this.elements.clickBillableRadioBtnField().check().should('be.checked');
    }

    clickNonBillableRadioBtn(){
        this.elements.clickNonBillableRadioBtnField().check().should('be.checked');
    }

    clickAllocateBtn(){
        this.elements.clickAllocateBtnField().click();
    }

    clearBillingStartDate() {
        this.elements.getBillingStartDateField().clear();
    }

    clearBillingEndDate() {
        this.elements.getBillingEndDateField().clear();
    }

    getBillingStartDate(BillingStartDate){
        this.elements.getBillingStartDateField().type(BillingStartDate).click();
    }

    getBillingEndDate(BillingEndDate){
        this.elements.getBillingEndDateField().type(BillingEndDate).click();
    }

    //percentage bar
   /* clickPercentageSlider(){
        return cy.xpath("/html/body/div[2]/div[3]/div[2]/div/div[11]/div/span/span[24]")
        .trigger('mouseleft').trigger('mousemove',{clientX:40})
        .trigger('mouseright');

    }
*/
   
}

export default AllocationManagementPage;