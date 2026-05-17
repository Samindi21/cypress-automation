import AllocationManagementPage from "../../pages/AllocationManagementPage"

const allocationManagementPage = new AllocationManagementPage ();

let data;
before(function(){
  //write once before all tests in the block
  cy.fixture('testData/testData.json').then(function(data1){
  data=data1
  })
})


describe('EMTC11- Verify that the expired allocation is displayed with red highlighted ', () => {
  
//To create a new allocation
  it('Click on the "New Allocation" button', function(){

    allocationManagementPage.clickNewAllocation();

  })

  it('Create an allocation with past dates', function() {

    allocationManagementPage.getEmployee(data.testData14.Employee);
    allocationManagementPage.getSbu(data.testData14.Sbu);
    allocationManagementPage.getClient(data.testData14.Client);
    allocationManagementPage.getProject(data.testData14.Project);

    //expired dates were entered here
    allocationManagementPage.getAllocationStartDate(data.testData14.AllocationStartDate);
    allocationManagementPage.getAllocationEndDate(data.testData14.AllocationEndDate);

    allocationManagementPage.clickNonBillableRadioBtn();

    allocationManagementPage.clickAllocateBtn();

  })

  


})
