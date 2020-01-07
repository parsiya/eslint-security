module.exports = {
  "env" : {
    "browser" : true,
    "es6" : true /** all es6 features except modules */
  },
  "plugins" : [
    // Standard Rules
    "scanjs-rules",
    "no-unsanitized"
  ],
  "rules" : {
    /** useful rules from eslint **/

    /** ScanJS rules **/
    "scanjs-rules/assign_to_href" : 1,

    /** no-unsanitized rules**/
    "no-unsanitized/method": "error",
    "no-unsanitized/property": "error",
  }
};