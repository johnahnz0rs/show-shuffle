let request = require('request');
const dotenv = require('dotenv');
dotenv.config();


// const tmdbSearchTV = `https://api.themoviedb.org/3/search/tv?api_key=${process.env.TMDB_KEY}&query=`;

module.exports = {


    sampleMethod: (req, res) => {
        if (req.method === 'GET') {
            console.log('*** lol johnahnz0rs is l33t ***', req.body);
            res.json({lol: 'lol'});
        } else {
            res.json({err: 'must be GET'});
        }
    },


    search: (req, res) => {
        if (req.method === 'GET') {
            console.log('*** controllers.search() ***');
            const query = `https://api.themoviedb.org/3/search/tv?api_key=${process.env.TMDB_KEY}&query=` + encodeURI(req.params.query);
            request.get(query, function(err, hits) {
                if (err) {
                    console.log('lol',err);
                    return res.json(err);
                } else {
                    console.log('*** sending hits.body ***');
                    return res.json(hits.body);
                }
            });
        }
    },

    getShowDetails: (req, res) => {
        if (req.method === 'GET') {
            // code
            console.log('*** getShowDetails() ***', req.body);
            const query = `https://api.themoviedb.org/3/tv/${req.params.id}?api_key=${process.env.TMDB_KEY}&language=en-US`;
            request.get(query, function(err, show) {
               if (err) {
                   console.log('lol', err);
                   return res.json(err);
               } else {
                   console.log('*** sending show ***', show);
                   return res.json(show);
               }
            });
        }
    },

};
