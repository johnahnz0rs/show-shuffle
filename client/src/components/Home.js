import React from 'react';

import MyNavbar from './MyNavbar';
// import PopularShows from './PopularShows';


class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            suggestion: {
                id: null,
                collection: null,
                name: null,
                randoSeason: null,
                randoEpisode: null,
                poster: null,
                totalEps: null,
            },
            search: '',
            searchHits: null,
            // show: null,
            shows: [
                {name: 'Futurama', id: '615'},
                {name: 'The Office', id: '2316'},
                {name: 'Parks And Rec', id: '8592'},
                {name: 'King of The Hill', id: '2122'},
                {name: 'Venture Bros', id: '2418'},
                {name: 'The Wire', id: '1438'},
                {name: 'South Park', id: '2190'},
                {name: 'Breaking Bad', id: '1396'},
                {name: 'The Sopranos', id: '1398'},
                {name: 'Seinfeld', id: '1400'},
                {name: 'Brooklyn Nine Nine', id: '48891'},
                {name: 'Peaky Blinders', id: '60574'},
            ],
        };
        //declare methods here
        // this.printState = this.printState.bind(this);
        this.clearState = this.clearState.bind(this);
        this.chooseShow = this.chooseShow.bind(this);
        this.testButton = this.testButton.bind(this);
        this.searchHandler = this.searchHandler.bind(this);
        this.findShowsByQuery = this.findShowsByQuery.bind(this);
        this.getShowDetails = this.getShowDetails.bind(this);
        this.chooseRando = this.chooseRando.bind(this);
        this.clickYourShow = this.clickYourShow.bind(this);
        this.clickJ00rShow = this.clickJ00rShow.bind(this);
    }

    componentDidMount() {
        // onInit
    }

    printState = () => console.log('*** Home.state ***', this.state);

    clearState = () => {
        // this.setState({show: null});
        // this.setState({showName: null});
        // this.setState({season: null});
        // this.setState({episode: null});
    };

    chooseShow = (e) => {
        // this.clearState();
        // @DESC eventHandler when user clicks a show/button;
        const name = e.target.name;
        const show = this.state.shows.find(obj => obj.shortName === name);
        const showName = show.name;

        this.setState({show: show});
        this.setState({showName: showName});

        this.chooseEpisode(show);
    };

    chooseEpisode = (show) => {
        // @DESC -- make sure whichever function calls this function also calls this.clearState prior to...
        // @DESC this is a callback function. picks a random season, episode for given show && this.setState;
        console.log('*** starting chooseEpisode() ***');

        // pick a season at random
        const season = Math.floor(Math.random() * show.episodes.length) + 1;
        this.setState({season: season});

        // from that season, pick a random episode
        const eps = show.episodes[season-1].episodes;
        const episode = Math.floor(Math.random() * eps) + 1;
        this.setState({episode: episode});

        // get total episode count for show
        let count = 0;
        for (let s of show.episodes) { // in each season of the show (found in show.episodes obj)
            count += s.episodes; // increase the count by the value of show.episodes[i].episodes
        }
        this.setState({showTotal: count});
    };

    testButton = () => {
        console.log('*** start testButton() ***');
    };

    searchHandler = (e) => {
        const search = e.target.value;
        this.setState({search: search});
    };

    findShowsByQuery = () => {
        const search = encodeURI(this.state.search);
        console.log('*** starting findShow() ***', search);
        fetch(`/search/${search}`)
            .then(res => res.json())
            .then(hits => {
                const temp = JSON.parse(hits);
                const shows = temp.results;
                // console.log(shows);
                for (let i of shows) {
                    if (i.poster_path) {
                        i.poster_path = 'https://image.tmdb.org/t/p/original' + i.poster_path;
                    }
                    if (i.first_air_date) {
                        i.year = i.first_air_date.substring(0,4)
                    }
                }
                this.setState({searchHits: shows});
            })
            .catch(err => console.log(err));
    };

    getShowDetails = (showID) => {
        // make a call to the backend that calls the movie dbase api;
        console.log('*** search() testing backend ***', showID);
        fetch('/sample')
            .then(res => res.json())
            .then(something => console.log(something))
            .catch(err => console.log(err));
    };

    chooseRando = () => {
        console.log('*** starting chooseRando() ***');
        // this.clearState();

        const rando = Math.floor(Math.random() * this.state.shows.length) + 1;
        const showID = this.state.shows[rando].id;
        // const show = this.state.shows[rando];
        // const showName = show.name;
        this.clickJ00rShow(showID);
        // this.setState({show: show});
        // this.setState({showName: showName});

        // this.chooseEpisode(show);
    };

    clickYourShow = (e) => {
        const what = e.target.name;
        console.log('*** clickYourShow() ***', what);
    };

    clickJ00rShow = (showID) => {
        console.log('*** clickJ00rShow() ***', showID);
        // this.getShowDetails(showID);
        fetch(`/show/${showID}`)
            .then(res => res.json())
            .then(sth => {
                const showDetails = JSON.parse(sth.body);
                console.log(showDetails);


                // THIS.STATE
                // suggestion: {
                //     x id: null,
                //     x collection: null,
                //     x name: null,
                //     randoSeason: null,
                //     randoEpisode: null,
                //     x poster: null,
                //     x totalEps: null,
                // },

                // id, name
                let tempSuggestion = {
                    id: showDetails.id,
                    name: showDetails.name,
                };

                // collection
                showDetails.seasons[0].name.toLowerCase().includes('special') ? tempSuggestion.collection = showDetails.seasons.slice(1) : tempSuggestion.collection = showDetails.seasons;

                // poster
                if (showDetails.poster_path) {
                    tempSuggestion.poster = 'https://image.tmdb.org/t/p/original' + showDetails.poster_path;
                }

                // total eps
                let count = 0;
                for (let season of tempSuggestion.collection) {
                    season.episode_count = parseInt(season.episode_count);
                    count += season.episode_count;
                    // console.log(count);
                }
                // console.log('final count', count);
                tempSuggestion.totalEps = count;

                // randoSeason
                tempSuggestion.randoSeason = Math.floor(Math.random() * tempSuggestion.collection.length) + 1;

                // randoEpisode
                tempSuggestion.randoEpisode = Math.floor(Math.random() * tempSuggestion.collection[tempSuggestion.randoSeason-1].episode_count);

                //
                // // set name
                // if (showDetails.name) {
                //     this.setState({showName: showDetails.name});
                // }
                //
                // // rando pick season
                // const randoSeason = Math.floor(Math.random() * showDetailsSeasons.length) + 1;
                // this.setState({showSeason: randoSeason});
                //
                // // rando pic episode from that season
                // const randoEpisode = Math.floor(Math.random() * showDetailsSeasons[randoSeason-1].episode_count);
                // this.setState({showEpisode: randoEpisode});



                console.log('*** tempSuggestion ***', tempSuggestion);
                this.setState({suggestion: tempSuggestion});
            })
            .catch(err => console.log(err));
    };

    render() {

        const recommendation = {
            border: '5px solid black',
            borderRadius: '8px',
            width: '95%',
            maxWidth: '600px'
            // margin: '0 auto',
            // padding: '20px',
            // height: '250px',
            // width: '385px',
            // padding: 'auto',
        };
        const small = {fontSize: 'small'};
        // const header = {marginBottom: '150px'};
        // const medium = {};
        // const whoa = {};

        return(<React.Fragment>
            <div className="">

                {/*<div className="my-background">*/}

                <a name="recommendation"></a>
                {/*<button className="btn btn-sm btn-primary" onClick={this.printState}>print state</button>*/}


                {/* navbar */}
                <MyNavbar />

                {/* content */}
                <div className="container-fluid  text-center">

                    {/* spacer */}
                    <div className="d-block mb-5 text-left" style={{minHeight: '200px'}}>
                        {/*<button className="btn btn-sm btn-primary d-inline-block mr-3" onClick={this.testButton}>Test Button 1</button>*/}
                        {/*<button className="btn btn-sm btn-primary d-inline-block mr-3" onClick={this.printState}>Print State</button>*/}
                    </div>



                    {/* the recommendation */}
                    {/*{this.state.showName && this.state.showSeason && this.state.showEpisode && this.state.showPoster &&*/}
                    {this.state.suggestion.id &&
                    <div className="row my-4 mx-auto btn-light" style={recommendation}>

                        <div className="col-6">
                            <img src={this.state.suggestion.poster} alt={this.state.suggestion.name} className="mt-2" style={{width: '95%', maxWidth: '500px'}} />
                        </div>

                        <div className="col-6 mt-2 d-flex-column">
                            <h3 className="mx-auto p-auto" style={{verticalAlign: 'middle'}}>
                                You chose<br />
                                <span className="font-weight-bold"><u>{this.state.suggestion.name}</u></span><br />
                                <span style={small} className="">({this.state.suggestion.totalEps} total eps)</span><br />&nbsp;<br />
                                <span className="font-weight-bold"><u>Season {this.state.suggestion.randoSeason} Episode {this.state.suggestion.randoEpisode}</u></span>
                            </h3>
                        </div>

                    </div>
                    }
                    {/* end recommendation */}







                    {/* search */}
                    <div className="py-4" style={{border: '2px solid white', borderRadius: '5px'}}>
                        <input type="text" name="search" style={{width: '65%'}} placeholder="search for show" onChange={this.searchHandler} /><button className="btn btn-sm btn-success ml-3" onClick={this.findShowsByQuery}>Search</button>

                        <button className="btn btn-sm btn-primary d-block mt-3 mx-auto" style={{width: '200px'}} onClick={this.chooseRando}>Gimme a Rando</button>
                    </div>
                    {/* end search */}




                    {/* search results */}
                    {this.state.searchHits &&
                    <div className="container-fluid" style={{}}>
                        <p style={{backgroundColor: 'white'}}>click your show</p>

                        {this.state.searchHits.map(show => {

                            return(<React.Fragment>

                                {/*backdrop_path: "/5isj5gcGT0RrJ7uMO5pnd0AXXC.jpg"*/}
                                {/*first_air_date: "2005-03-24"*/}
                                {/*genre_ids: [35]*/}
                                {/*id: 2316*/}
                                {/*name: "The Office"*/}
                                {/*origin_country: ["US"]*/}
                                {/*original_language: "en"*/}
                                {/*original_name: "The Office"*/}
                                {/*overview: "The everyday lives of office employees in the Scranton, Pennsylvania branch of the fictional Dunder Mifflin Paper Company."*/}
                                {/*popularity: 21.503*/}
                                {/*poster_path: "/qWnJzyZhyy74gjpSjIXWmuk0ifX.jpg"*/}
                                {/*vote_average: 8.05*/}
                                {/*vote_count: 499*/}

                                {show.poster_path && show.year && show.id &&
                                    <a key={show.id} href="#" className="col-12 col-md-3 mb-5 text-center d-inline-block" style={{verticalAlign: 'top'}} onClick={() => this.clickJ00rShow(show.id)}>
                                        {/*<div className="col-12 col-md-2 btn-light d-inline-block text-center my-1 mx-auto mx-md-3 p-1" style={{border: '1px solid black', verticalAlign: 'top'}}>*/}
                                            <img src={show.poster_path} alt={show.name} className="mb-2" style={{width: '75%', maxWidth: '200px', height: 'auto'}}/>
                                            <p className="" style={{color: 'white', lineHeight: '15px'}}>
                                                <span style={{fontSize: 'x-large'}} className="font-weight-bold">{show.name}</span><br />
                                                {show.year} ({show.origin_country})<br />
                                                <span className="font-weight-bold">{show.vote_average}</span> / {show.vote_count} votes
                                            </p>


                                            {/*<h3 className="" style={{fontSize: 'x-large'}} name={show.id}>{show.name}</h3>*/}
                                            {/*<p name={show.id}>*/}
                                                {/*First Air Date: {show.first_air_date}, [{show.origin_country}]*/}
                                                {/*<br /><span className="font-weight-bold">{show.vote_average}</span> (total votes: {show.vote_count})*/}
                                            {/*</p>*/}
                                        {/*</div>*/}
                                    </a>
                                }

                            </React.Fragment>);
                        })}


                    </div>
                    }


                    {/* end search results*/}







                    {/* popular shows */}
                    {this.state.shows &&
                        <div className="container-fluid row my-2 mx-auto d-flex align-items-center" style={{}}>

                            {this.state.shows.map(show => {
                                return (
                                    <React.Fragment>

                                        {/* mobile view */}
                                        {/*<div className="d-flex-column d-sm-none col-4 container">*/}
                                            {/*<a href="#"*/}
                                               {/*role="button"*/}
                                               {/*name={show.shortName}*/}
                                               {/*className="btn btn-sm mx-auto my-4 py-auto d-block align-self-center font-weight-bold"*/}
                                               {/*style={{maxHeight: '70px', minHeight: '40px', width: '100px', backgroundColor: 'pink', color: 'white'}}*/}
                                               {/*onClick={this.chooseShow}>*/}
                                                {/*{show.name}*/}
                                            {/*</a>*/}
                                        {/*</div>*/}

                                        <div key={show.id} className="d-flex-column d-sm-none col-6 container" name={show.id}>
                                            <a href="#"
                                               role="button"
                                               className="mx-auto my-4 d-block align-self-center"
                                               style={{color: "pink"}}
                                               onClick={() => {this.clickJ00rShow(show.id)}}>
                                                <span className="pop-show font-weight-bold" style={{fontSize: 'x-large'}}>{show.name}</span>
                                            </a>
                                        </div>



                                        {/* desktop view */}
                                        <div className="d-none d-sm-inline-block col-4">
                                            <a href="#"
                                               role="button"
                                               name={show.name}
                                               className="mx-auto my-4 d-block pop-show"
                                               style={{color: 'pink'}}
                                               onClick={() => this.clickJ00rShow(show.id)}>
                                                <h1>{show.name}</h1>
                                            </a>
                                        </div>
                                    </React.Fragment>
                                );
                            })}
                        </div>
                    }
                    {/* end popular shows */}
                </div>
                {/* end content > .my-background */}

                {/*</div>*/}
            </div>
        </React.Fragment>);
    }



}


export default Home;