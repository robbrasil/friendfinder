// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendArray = require("../data/friends");



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------

    app.get("/api/friends", function (req, res) {
        res.json(friendArray);
        console.log(req.body);
    });

    app.post("/api/friends", function (req, res) {
      
        var array = req.body;
        for (var i = 0; i < array.length; i++) {
            for (var i = 0; i < friendArray[i].scores.length; i++) {
            
                var value = Math.abs(array[i] - friendArray[i].scores)
                
                
            };
        };
        res.send(friendArray[0]);
        console.log(value);
    });
};