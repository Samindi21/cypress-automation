const { defineConfig } = require("cypress");
const oracledb = require("oracledb");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

/**
 * @type {Cypress.PluginConfig}
 */

const queryData = async(query, dbconfig) => {
  let conn;
  try{
      conn = await oracledb.getConnection(dbconfig);
      result = await conn.execute(query);
      console.log('X', result)
      await conn.commit();
      return result
  }catch(err){
      console.log("Error===>"+err)
      return err
  } finally{
    if(conn){
      try{
        conn.close();
      }catch(err){
        console("Error===>"+err);
      }
    }
  }
}

module.exports = defineConfig({
  e2e: {
    //https://qa.dm2tol6lqjxaj.amplifyapp.com/ == directly goes to the dashboard/allocation management
    //baseUrl: 'https://qa.d386m07isr19uw.amplifyapp.com/',
    baseUrl: 'https://qa.dm2tol6lqjxaj.amplifyapp.com/',
    env: {
      login_username: "shashika.ariyarathna@acentura.com",
      login_password: "S#I9821USJFAS",
      db: {
        user: "ccbs2",
        password: "ccbs2",
        connectString : "172.26.82.166/dupnicut"
    }
    },
    testIsolation: false,
    pageLoadTimeout: 90000,
    watchForFileChanges: false,
    experimentalModifyObstructiveThirdPartyCode: true,
    trashAssetsBeforeRuns: true,
    video: true,
    videoCompression: false,
    videoUploadOnPasses: true,
    setupNodeEvents(on, config) {
      //cypress-failed-log
      require('cypress-failed-log/on')(on)
      on("task", {
        sqlQuery: function (query) {
            return queryData(query, config.env.db);
        }
      });
      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.family === 'chromium') {
          console.log('Adding Chrome flag: --disable-dev-shm-usage');
          launchOptions.args.push('--disable-dev-shm-usage');
        }
      return launchOptions;
      })
      allureWriter(on, config);
      return config;
      // implement node event listeners here
    },
  },
});

