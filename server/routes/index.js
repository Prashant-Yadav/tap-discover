/**
 *  Created by Prashant-Yadav
 */


module.exports = function(app) {
    app.use("/api", require('./apis'));
};

