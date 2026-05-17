import AllocationManagementPage from "../../pages/AllocationManagementPage"

const allocationManagementPage = new AllocationManagementPage ();

let data;
before(function(){
  //write once before all tests in the block
  cy.fixture('testData/testData.json').then(function(data1){
  data=data1
  })
})


describe('EMTC3 - Verify that user cant create new allocations without mandatory fields', () => {

    //To create a new allocation
    it('Click on the "New Allocation" button', () => {
  
      allocationManagementPage.clickNewAllocation();
      cy.wait(2000);
      
    })

    //employee name not added here. After the automation employee box got a red colored margin.
    it('Enter all mandatory fields except Employee field and click allocate', function () {

      allocationManagementPage.getSbu(data.testData5.Sbu);
      allocationManagementPage.getClient(data.testData5.Client);
      allocationManagementPage.getProject(data.testData5.Project);
      allocationManagementPage.getAllocationStartDate(data.testData5.AllocationStartDate);
      allocationManagementPage.getAllocationEndDate(data.testData5.AllocationEndDate);

      allocationManagementPage.clickNonBillableRadioBtn();

      allocationManagementPage.clickAllocateBtn();
      
    })

    //Client and project details were not added here. So got one red margin box after automation.
    it('Enter all mandatory fields except two mandatory fields and click allocate', function () {
  
      allocationManagementPage.getEmployee(data.testData6.Employee);
      allocationManagementPage.getSbu(data.testData6.Sbu);
      allocationManagementPage.getAllocationStartDate(data.testData6.AllocationStartDate);
      allocationManagementPage.getAllocationEndDate(data.testData6.AllocationEndDate);

      allocationManagementPage.clickNonBillableRadioBtn();

      allocationManagementPage.clickAllocateBtn();
      
    })

})