import AllocationManagementPage from "../../pages/AllocationManagementPage"

const allocationManagementPage = new AllocationManagementPage ();

let data;
before(function(){
  //write once before all tests in the block
  cy.fixture('testData/testData.json').then(function(data1){
  data=data1
  })
})

const users = ["BUHead", "RMSupervisorLogin"];

for (const user of users) {
  describe(`Olympus Login as ${user}`, () => {

//    describe('EMTC2 - Verify that System is not taking invalid values to the fields', function () {

    //To create a new allocation
      it('Click on the "New Allocation" button', () => {
    
        allocationManagementPage.clickNewAllocation();
        
      })

      it('Enter an employee name which is not log in to the system', function() {

        allocationManagementPage.getEmployee(data.testData2.Employee);
        cy.wait(400);
        //allocationManagementPage.getProject();
        //cy.wait(2000);

        allocationManagementPage.clickNonBillableRadioBtn();

        allocationManagementPage.clickAllocateBtn();

      })
    
      it('Enter valid employee and enter a project and project role which is not valid', function () {

        allocationManagementPage.getEmployee(data.testData3.Employee);
        allocationManagementPage.getProject(data.testData3.Project);
        //allocationManagementPage.getProjectRole(data.testData3.ProjectRole);

        allocationManagementPage.clickNonBillableRadioBtn();

        allocationManagementPage.clickAllocateBtn();

      })

      it('Enter invalid start date and end date with only filling other fields by valid values', function () {
        
        allocationManagementPage.getEmployee(data.testData4.Employee);
        allocationManagementPage.getSbu(data.testData4.Sbu);
        allocationManagementPage.getClient(data.testData4.Client);
        allocationManagementPage.getProject(data.testData4.Project);
    
        allocationManagementPage.getAllocationStartDate(data.testData4.AllocationStartDate); 
        allocationManagementPage.getAllocationEndDate(data.testData4.AllocationEndDate);
        
        allocationManagementPage.clickNonBillableRadioBtn();

        allocationManagementPage.clickAllocateBtn();

      })
        

})

}

after(() => {
  for (const user of users) {
    cy.loginWithUser(user);
  }

});

