import FilterPage from "../../pages/FilterPage"

const filterPage = new FilterPage ();

let data;
before(function(){
  //write once before all tests in the block
  cy.fixture('testData/testData.json').then(function(data1){
  data=data1
  })
})

describe('EMTC12- Verify that user can add a comment for an allocation', () => {

      it('Navigate to an employee who have allocations and add a comment and click add icon ', function() {

        filterPage.selectEmployee(data.testData11.Employee);
        filterPage.clickFilterBtn();
        filterPage.clickCommentIcon();

        filterPage.typeComment(data.testData15.Comment);
        filterPage.clickAddBtn();

        filterPage.clickCloseIcon();
    
      })

      it('Navigate to an employee who have allocations and a comment was not added to the comment area and click add icon  ', function() {

        // filterPage.selectEmployee(data.testData11.Employee);
        // filterPage.clickFilterBtn();
        filterPage.clickCommentIcon();

        filterPage.clickAddBtn();
      })


    })
