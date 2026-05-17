import AllocationManagementPage from "../../pages/AllocationManagementPage"

const allocationManagementPage = new AllocationManagementPage ();

let data;
before(function(){
  //write once before all tests in the block
  cy.fixture('testData/testData.json').then(function(data1){
  data=data1
  })
})


describe('EMTC13 - Verify that the allocation end date should be greater than the allocation start date.', () => {

  
//To create a new allocation
  it('Click on the "New Allocation" button', function(){

    allocationManagementPage.clickNewAllocation();

  })

  it('Fill all fields by entering end date than start date ', function(){

    allocationManagementPage.getEmployee(data.testData1.Employee);
    allocationManagementPage.getSbu(data.testData1.Sbu);
    allocationManagementPage.getClient(data.testData1.Client);
    allocationManagementPage.getProject(data.testData1.Project);
    allocationManagementPage.getAllocationStartDate(data.testData16.AllocationStartDate);
    allocationManagementPage.getAllocationEndDate(data.testData16.AllocationEndDate);
    allocationManagementPage.clickNonBillableRadioBtn();

    //Create a new allocation
    allocationManagementPage.clickAllocateBtn();

  })

 


})