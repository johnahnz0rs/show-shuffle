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
            episodes: null,
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
        };
        //declare methods here
        this.chooseShow = this.chooseShow.bind(this);
        // this.printState = this.printState.bind(this);
    }

    componentDidMount() {
        // onInit
    }

    // printState = () => console.log('*** Home.state ***', this.state);

    chooseShow = (e) => {
        // @DESC eventHandler when user clicks a show/button;
        const name = e.target.name;
        const show = this.state.shows.find(obj => obj.shortName === name);
        const showName = show.name;

        this.setState({show: show});
        this.setState({showName: showName});

        this.chooseEpisode(show);
    };

    chooseEpisode = (show) => {
        // @DESC picks a random season, episode for given show && this.setState;

        // pick a season at random
        const season = Math.floor(Math.random() * show.episodes.length) + 1;
        this.setState({season: season});

        // from that season, pick a random episode
        const eps = show.episodes[season-1].episodes;
        const episode = Math.floor(Math.random() * eps) + 1;
        this.setState({episode: episode});

        // get total episode count for show
        let count = 0;
        for (let s of show.episodes) {
            count += s.episodes;
        }
        this.setState({showTotal: count});
    };

    render() {

        const recommendation = {
            border: '5px solid black',
            borderRadius: '8px',
            margin: '0 auto',
            padding: '20px',
        };
        const small = {fontSize: 'small'};
        const header = {marginBottom: '150px'};
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


                    {/* header */}
                    <div className="text-right mt-1" style={header}>
                        <a tabIndex="0" className="btn btn-sm btn-light" role="button" data-toggle="popover" data-trigger="focus" title="wutup, homey?" data-content="let's pick something to watch. click a show to begin">?</a>
                    </div>



                    {/* the recommendation */}
                    {this.state.showName && this.state.season && this.state.episode &&
                    <div className="container-fluid row justify-content-center my-5 mx-auto align-middle">
                        <div className="col-8 col-md-5 d-block text-center btn-light" style={recommendation}>
                            <h3 className="align-middle">
                                You chose<br />
                                <span className="font-weight-bold"><u>{this.state.showName}</u></span>
                            </h3>
                            <p style={small} className="align-middle">({this.state.showTotal} total eps)</p>
                            <h3 className="font-weight-bold"><u>Season {this.state.season} Episode {this.state.episode}</u></h3>
                        </div>
                    </div>
                    }
                    {/* end recommendation */}


                    {/* popular shows */}
                    {this.state.shows &&
                        <div className="container-fluid row my-5 mx-auto">

                            {this.state.shows.map(show => {
                                return (
                                    <React.Fragment>

                                        {/* mobile view */}
                                        <div className="d-inline-block d-md-none col-6 mx-auto">
                                            <a href="#"
                                               name={show.shortName}
                                               className="btn btn-lg btn-light mx-auto show"
                                               onClick={this.chooseShow}>
                                                {show.name}
                                            </a>
                                        </div>

                                        {/* desktop view */}
                                        <div className="d-none d-md-inline-block col-4">
                                            <a href="#"
                                               name={show.shortName}
                                               className="btn btn-lg btn-light mx-auto show d-block"
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