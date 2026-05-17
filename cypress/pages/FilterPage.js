class FilterPage {

    // SELECTORS
    selectSbuSelector = '#mui-6';
    selectClientSelector = '#mui-8';
    selectProjectSelector = '#mui-10';
    selectEmployeeSelector = '#mui-12'; 
    clickDeallocateBtnSelector = '.css-lsp8rr > .deallocateButtonStyle';
    clickConfirmBtnSelector = '.MuiDialogActions-root > .MuiButton-containedPrimary' ;
    clickCancelBtnSelector = '.MuiDialogActions-root > .MuiButton-containedInherit';
    clickRevokeOrangeCircleSelector = '.isconfirmedActionButtonStyle';
    clickRevokeConfirmBtnSelector = '.MuiDialogActions-root > .MuiButton-containedPrimary';
    clickRevokeCancelBtnSelector = '.MuiDialogActions-root > .MuiButton-containedInherit' ;
    selectProjectRoleSelector = '#mui-14';
    clickMoreOptionsSelector = '.css-h812ai > .MuiButtonBase-root';
    clickAddAllocationSelector = '.MuiPaper-root > .MuiList-root > :nth-child(3)';
    clickBillableSelector = '#mui-16';
    clickFilterBtnSelector = ':nth-child(8) > .css-1xhj18k > .MuiButton-containedPrimary';
    clickClearBtnSelector = '.MuiButton-containedInherit';
    clickCommentIconSelector = ":nth-child(1) > .css-lsp8rr > :nth-child(2)";
    typeCommentSelector = "/html[1]/body[1]/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/textarea[1]";
    clickAddBtnSelector ='.MuiDialogActions-root > .MuiButton-root';
    clickCloseIconSelector ='#customized-dialog-title > .MuiButtonBase-root';

    //Elements
    elements=
    {
        selectSbuField : ()=> cy.get(this.selectSbuSelector),   
        selectClientField : ()=> cy.get(this.selectClientSelector),    
        selectProjectField : ()=> cy.get(this.selectProjectSelector),
        selectEmployeeField : ()=> cy.get(this.selectEmployeeSelector),
        clickDeallocateBtnField : ()=> cy.get(this.clickDeallocateBtnSelector),
        clickConfirmBtnField : ()=> cy.get(this.clickConfirmBtnSelector),
        clickCancelBtnField : ()=> cy.get(this.clickCancelBtnSelector),
        clickRevokeOrangeCircleField : ()=> cy.get(this.clickRevokeOrangeCircleSelector),
        clickRevokeConfirmBtnField : ()=> cy.get(this.clickRevokeConfirmBtnSelector),
        clickRevokeCancelBtnField : ()=> cy.get(this.clickRevokeCancelBtnSelector),
        selectProjectRoleField : ()=> cy.get(this.selectProjectRoleSelector),
        clickMoreOptionsField : ()=> cy.get(this.clickMoreOptionsSelector),
        clickAddAllocationField : ()=> cy.get(this.clickAddAllocationSelector),
        clickBillableField : ()=> cy.get(this.clickBillableSelector),
        clickFilterBtnField : ()=> cy.get(this.clickFilterBtnSelector),
        clickClearBtnField : ()=> cy.get(this.clickClearBtnSelector),
        clickCommentIconField : () => cy.get(this.clickCommentIconSelector),
        typeCommentField : () => cy.xpath(this.typeCommentSelector),
        clickAddBtnField : () => cy.get(this.clickAddBtnSelector),
        clickCloseIconField : () => cy.get(this.clickCloseIconSelector)
    }

    // ACTIONS

    selectSbu(Sbu){
        this.elements.selectSbuField().type(Sbu).type('{downarrow}').type('{enter}');
    }

    selectClient(Client){
        this.elements.selectClientField().type(Client).type('{downarrow}').type('{enter}');
    }

    selectProject(Project){
        this.elements.selectProjectField().type(Project).type('{downarrow}').type('{enter}');
    }

    selectEmployee(Employee){ 
        this.elements.selectEmployeeField().type(Employee).type('{downarrow}').type('{enter}');
    }

    getClientDropDown(){
        this.elements.getClientDropDown().click();
    }

    getProjectDropDown(){
        this.elements.getProjectDropDown().click();
    }

    clickDeallocateBtn(){
        this.elements.clickDeallocateBtnField().click();
    }

    clickConfirmBtn(){
        this.elements.clickConfirmBtnField().click();
    }

    clickCancelBtn(){
        this.elements.clickCancelBtnField().click();
    }

    clickRevokeOrangeCircle(){
        this.elements.clickRevokeOrangeCircleField().click();
    }

    clickRevokeConfirmBtn(){
        this.elements.clickRevokeConfirmBtnField().click();
    }

    clickRevokeCancelBtn(){
        this.elements.clickRevokeCancelBtnField().click();
    }

    clickMoreOptions(){
        this.elements.clickMoreOptionsField().click({force:true});
    }

    clickAddAllocation(){
        this.elements.clickAddAllocationField().click();
    }

    clickBillable(){
        this.elements.clickBillableField().type('{downarrow}').type('{enter}');
    }

    clickFilterBtn(){
        this.elements.clickFilterBtnField().click();
    }

    clickClearBtn(){
        this.elements.clickClearBtnField().click();
    }

    clickCommentIcon(){
        this.elements.clickCommentIconField().click();
    }

    typeComment(Comment){
        this.elements.typeCommentField().type(Comment);
    }

    clickAddBtn(){
        this.elements.clickAddBtnField().click();
    }

    clickCloseIcon(){
        this.elements.clickCloseIconField().click();
    }
    
}


export default FilterPage;




