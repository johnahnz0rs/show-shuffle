import React from 'react';

import MyNavbar from './MyNavbar';
// import PopularShows from './PopularShows';


class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: null,
            showName: null,
            season: null,
            episode: null,
            showTotal: null,
            shows: [
                {
                    shortName: 'futurama',
                    name: 'Futurama',
                    episodes: [
                        {season: 1, episodes: 13},
                        {season: 2, episodes: 19},
                        {season: 3, episodes: 22},
                        {season: 4, episodes: 18},
                        {season: 5, episodes: 16},
                        {season: 6, episodes: 26},
                        {season: 7, episodes: 26}
                    ]
                },
                {
                    shortName: 'theOffice',
                    name: 'The Office',
                    episodes: [
                        {season: 1, episodes: 6},
                        {season: 2, episodes: 22},
                        {season: 3, episodes: 25},
                        {season: 4, episodes: 19},
                        {season: 5, episodes: 28},
                        {season: 6, episodes: 26},
                        {season: 7, episodes: 26},
                        {season: 8, episodes: 24},
                        {season: 9, episodes: 25}
                    ]
                },
                {
                    shortName: 'parksAndRec',
                    name: 'Parks and Rec',
                    episodes: [
                        {season: 1, episodes: 6},
                        {season: 2, episodes: 24},
                        {season: 3, episodes: 16},
                        {season: 4, episodes: 22},
                        {season: 5, episodes: 22},
                        {season: 6, episodes: 22},
                        {season: 7, episodes: 13}
                    ]
                },
                {
                    shortName: 'kingOfTheHill',
                    name: 'King of the Hill',
                    episodes: [
                        {season: 1, episodes: 12},
                        {season: 2, episodes: 23},
                        {season: 3, episodes: 25},
                        {season: 4, episodes: 24},
                        {season: 5, episodes: 20},
                        {season: 6, episodes: 22},
                        {season: 7, episodes: 23},
                        {season: 8, episodes: 22},
                        {season: 9, episodes: 15},
                        {season: 10, episodes: 15},
                        {season: 11, episodes: 12},
                        {season: 12, episodes: 22},
                        {season: 13, episodes: 24}
                    ]
                },
                {
                    shortName: 'ventureBros',
                    name: 'The Venture Bros.',
                    episodes: [
                        {season: 1, episodes: 13},
                        {season: 2, episodes: 13},
                        {season: 3, episodes: 13},
                        {season: 4, episodes: 16},
                        {season: 5, episodes: 8},
                        {season: 6, episodes: 8},
                        {season: 7, episodes: 10}
                    ]
                },
                {
                    shortName: 'theWire',
                    name: 'The Wire',
                    episodes: [
                        {season: 1, episodes: 13},
                        {season: 2, episodes: 12},
                        {season: 3, episodes: 12},
                        {season: 4, episodes: 13},
                        {season: 5, episodes: 10}
                    ]
                },
                {
                    shortName: 'southPark',
                    name: 'South Park',
                    episodes: [
                        {season: 1, episodes: 13},
                        {season: 2, episodes: 18},
                        {season: 3, episodes: 17},
                        {season: 4, episodes: 17},
                        {season: 5, episodes: 14},
                        {season: 6, episodes: 17},
                        {season: 7, episodes: 15},
                        {season: 8, episodes: 14},
                        {season: 9, episodes: 14},
                        {season: 10, episodes: 14},
                        {season: 11, episodes: 14},
                        {season: 12, episodes: 14},
                        {season: 13, episodes: 14},
                        {season: 14, episodes: 14},
                        {season: 15, episodes: 14},
                        {season: 16, episodes: 14},
                        {season: 17, episodes: 10},
                        {season: 18, episodes: 10},
                        {season: 19, episodes: 10},
                        {season: 20, episodes: 10},
                        {season: 21, episodes: 10},
                        {season: 22, episodes: 10}
                    ]
                },
                {
                    shortName: 'breakingBad',
                    name: 'Breaking Bad',
                    episodes: [
                        {season: 1, episodes: 7},
                        {season: 2, episodes: 13},
                        {season: 3, episodes: 13},
                        {season: 4, episodes: 13},
                        {season: 5, episodes: 16}
                    ]
                },
                {
                    shortName: 'sopranos',
                    name: 'Sopranos',
                    episodes: [
                        {season: 1, episodes: 13},
                        {season: 2, episodes: 13},
                        {season: 3, episodes: 13},
                        {season: 4, episodes: 13},
                        {season: 5, episodes: 13},
                        {season: 6, episodes: 21}
                    ]
                },
                {
                    shortName: 'seinfeld',
                    name: 'Seinfeld',
                    episodes: [
                        {season: 1, episodes: 5},
                        {season: 2, episodes: 12},
                        {season: 3, episodes: 23},
                        {season: 4, episodes: 24},
                        {season: 5, episodes: 22},
                        {season: 6, episodes: 24},
                        {season: 7, episodes: 24},
                        {season: 8, episodes: 22},
                        {season: 9, episodes: 24}
                    ]
                },
                {
                    shortName: 'brooklynNineNine',
                    name: 'Brooklyn Nine-Nine',
                    episodes: [
                        {season: 1, episodes: 22},
                        {season: 2, episodes: 23},
                        {season: 3, episodes: 23},
                        {season: 4, episodes: 22},
                        {season: 5, episodes: 22}
                    ]
                },
            ],
            search: '',
            searchHits: null,
        };
        //declare methods here
        // this.printState = this.printState.bind(this);
        this.clearState = this.clearState.bind(this);
        this.chooseShow = this.chooseShow.bind(this);
        this.testButton = this.testButton.bind(this);
        this.searchHandler = this.searchHandler.bind(this);
        this.findShow = this.findShow.bind(this);
        this.search = this.search.bind(this);
        this.chooseRando = this.chooseRando.bind(this);
        this.clickYourShow = this.clickYourShow.bind(this);
    }

    componentDidMount() {
        // onInit
    }

    printState = () => console.log('*** Home.state ***', this.state);

    clearState = () => {
        this.setState({show: null});
        this.setState({showName: null});
        this.setState({season: null});
        this.setState({episode: null});
    };

    chooseShow = (e) => {
        this.clearState();
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

    findShow = () => {
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
                }
                this.setState({searchHits: shows});
            })
            .catch(err => console.log(err));
    };

    search = () => {
        // make a call to the backend that calls the movie dbase api;
        console.log('*** search() testing backend ***');
        fetch('/sample')
            .then(res => res.json())
            .then(something => console.log(something))
            .catch(err => console.log(err));
    };

    chooseRando = () => {
        console.log('*** starting chooseRando() ***');
        this.clearState();

        const rando = Math.floor(Math.random() * this.state.shows.length) + 1;
        const show = this.state.shows[rando];
        const showName = show.name;

        this.setState({show: show});
        this.setState({showName: showName});

        this.chooseEpisode(show);
    };

    clickYourShow = (e) => {
        const what = e.target.name;
        console.log('*** clickYourShow() ***', what);
    };

    render() {

        const recommendation = {
            border: '5px solid black',
            borderRadius: '8px',
            // margin: '0 auto',
            // padding: '20px',
            height: '250px',
            width: '385px',
            // padding: 'auto',
        };
        const small = {fontSize: 'small'};
        // const header = {marginBottom: '150px'};
        // const medium = {};
        // const whoa = {};

        return(<React.Fragment>
            <div className="">

                <a name="recommendation"></a>
                {/*<button className="btn btn-sm btn-primary" onClick={this.printState}>print state</button>*/}


                {/* navbar */}
                <MyNavbar />

                {/* content */}
                <div className="container-fluid my-background text-center">

                    {/* spacer */}
                    <div className="d-block mb-5 text-left" style={{minHeight: '200px'}}>
                        <button className="btn btn-sm btn-primary d-inline-block mr-3" onClick={this.testButton}>Test Button 1</button>
                        <button className="btn btn-sm btn-primary d-inline-block mr-3" onClick={this.printState}>Print State</button>
                    </div>



                    {/* the recommendation */}
                    {this.state.showName && this.state.season && this.state.episode &&
                    <div className="container-fluid row my-4 mx-auto btn-light" style={recommendation}>
                        <h3 className="m-auto p-auto">
                            You chose<br />
                            <span className="font-weight-bold"><u>{this.state.showName}</u></span><br />
                            <span style={small} className="">({this.state.showTotal} total eps)</span><br />&nbsp;<br />
                            <span className="font-weight-bold"><u>Season {this.state.season} Episode {this.state.episode}</u></span>
                        </h3>
                    </div>
                    }
                    {/* end recommendation */}







                    {/* search */}
                    <div className="p-4" style={{border: '1px solid black'}}>
                        <input type="text" name="search" placeholder="search for show" onChange={this.searchHandler} /><button className="btn btn-sm btn-success ml-3" onClick={this.findShow}>Go</button>

                        <button className="btn btn-sm btn-primary d-block mt-3 mx-auto" style={{width: '50%'}} onClick={this.chooseRando}>Gimme Rando</button>
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

                                {show.poster_path && show.first_air_date && show.id &&
                                    <a href="#">
                                        <div className="col-12 col-md-2 btn-light d-inline-block text-center my-1 mx-auto mx-md-3 p-1" style={{border: '1px solid black', verticalAlign: 'top'}} name={show.id} onClick={this.clickYourShow}>
                                            <img src={show.poster_path} name={show.id} alt="pic" className="" style={{width: '75%', maxWidth: '400px', height: 'auto'}} />
                                            <h3 className="" style={{fontSize: 'x-large'}}>{show.name}</h3>
                                            <p>
                                                First Air Date: {show.first_air_date}, [{show.origin_country}]
                                                <br /><span className="font-weight-bold">{show.vote_average}</span> (total votes: {show.vote_count})
                                            </p>
                                        </div>
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
                                        <div className="d-flex-column d-md-none col-4">
                                            <a href="#"
                                               role="button"
                                               name={show.shortName}
                                               className="btn btn-sm btn-light mx-auto my-3 py-3 d-block align-self-center" style={{height: '75px', width: '100px'}}
                                               onClick={this.chooseShow}>
                                                {show.name}
                                            </a>
                                        </div>

                                        {/* desktop view */}
                                        <div className="d-none d-md-inline-block col-4">
                                            <a href="#"
                                               role="button"
                                               name={show.shortName}
                                               className="btn btn-lg btn-light mx-auto my-3 py-3 d-block"
                                               onClick={this.chooseShow}>
                                                {show.name}
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


            </div>
        </React.Fragment>);
    }



}


export default Home;