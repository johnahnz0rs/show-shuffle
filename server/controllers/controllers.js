const dotenv = require('dotenv');
dotenv.config();

module.exports = {


    sampleMethod: function(req, res) {
        if (req.method === 'GET') {
            console.log('*** lol johnahnz0rs is l33t ***', req.body);
            res.json({lol: 'lol'});
        } else {
            res.json({err: 'must be GET'});
        }
    },
};
