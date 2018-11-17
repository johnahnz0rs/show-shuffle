import React from 'react';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: null,
            showName: null,
            season: null,
            episodes: null,
            showTotal: null,
            futurama: {
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
            kingOfTheHill: {
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
            southPark: {
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
            parksAndRec: {
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
            theOffice: {
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
            ventureBros: {
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
            breakingBad: {
                name: 'Breaking Bad',
                episodes: [
                    {season: 1, episodes: 7},
                    {season: 2, episodes: 13},
                    {season: 3, episodes: 13},
                    {season: 4, episodes: 13},
                    {season: 5, episodes: 16}
                ]
            },
            theWire: {
                name: 'The Wire',
                episodes: [
                    {season: 1, episodes: 13},
                    {season: 2, episodes: 12},
                    {season: 3, episodes: 12},
                    {season: 4, episodes: 13},
                    {season: 5, episodes: 10}
                ]
            },
            sopranos: {
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
            seinfeld: {
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
            brooklynNineNine: {
                name: 'Brooklyn Nine-Nine',
                episodes: [
                    {season: 1, episodes: 22},
                    {season: 2, episodes: 23},
                    {season: 3, episodes: 23},
                    {season: 4, episodes: 22},
                    {season: 5, episodes: 22}
                ]
            }
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
        const show = e.target.name;
        this.setState({show: show});
        const showName = this.state[show].name;
        this.setState({showName: showName}); // for display;
        this.chooseEpisode(this.state[show]);
    };

    chooseEpisode = (show) => {
        // @DESC picks a random season and episode for given show and sets this.state;
        // season, episode, showTotal
        let season, episode, count = 0;


        // get total episode count for show
        for (let s of show.episodes) {
            count += s.episodes;
        }
        this.setState({showTotal: count});


        // pick a season at random
        season = Math.floor(Math.random() * show.episodes.length) + 1;
        this.setState({season: season});


        // from that season, pick a random episode
        const eps = show.episodes[season-1].episodes;
        episode = Math.floor(Math.random() * eps) + 1;
        this.setState({episode: episode});
    };

    render() {

        const divStyle = {
            backgroundColor: 'pink',
            color: 'white',
            width: '100vw',
            height: '100vh'
        };

        const recommendation = {
            border: '5px solid white',
            borderRadius: '8px',
            margin: 'auto',
            padding: '10px'
        };

        const small = {fontSize: 'small'};
        const medium = {fontSize: 'medium', color: 'green'};
        const large = {fontSize: 'x-large'};
        const fixedTop = {zIndex: '1000'};

        return(
            <React.Fragment>
                <div className="container-fluid" style={divStyle}>

                    {/*<button className="btn btn-sm btn-primary" onClick={this.printState}>print state</button>*/}
                    {/*<div className="sticky-top d-block" style={fixedTop}>*/}
                    <div className="">
                        <div className="text-center">
                            <h1 className="font-weight-bold">Show Shuffle</h1>
                            <h3 className="mb-5">Please allow me to pick a random episode for you to watch.
                            <br style={{color: 'green'}} /><span style={medium}>(Click a show you'd like to watch) </span></h3>
                        </div>


                        {this.state.showName &&
                        <div className="text-center mx-auto mx-md-5" style={recommendation}>

                            <h3 className="align-middle">You chose <span className="font-weight-bold"><u>{this.state.showName}</u>!</span>
                                <br /><span style={small} className="align-middle">({this.state.showTotal} total eps.)</span></h3>

                            {this.state.season && this.state.episode &&
                            <p><span style={large}>I suggest <span className="font-weight-bold"><u>Season {this.state.season} Episode {this.state.episode}</u></span>.</span></p>
                            }

                        </div>
                        }
                    </div>


                    <div className="row justify-content-center text-center">
                        <div className="col-9 text-center">
                            <button
                                name="parksAndRec"
                                className="btn btn-lg btn-outline-light m-md-3 mx-auto col-md-3 col-12 show"
                                onClick={this.chooseShow}>
                                Parks and Rec
                            </button>
                            <button
                                name="theOffice"
                                className="btn btn-lg btn-outline-light m-md-3 mx-auto col-md-3 col-12 show"
                                onClick={this.chooseShow}>
                                The Office
                            </button>
                            <button
                                name="ventureBros"
                                className="btn btn-lg btn-outline-light m-md-3 mx-auto col-md-3 col-12 show"
                                onClick={this.chooseShow}>
                                Venture Bros.
                            </button>
                            <button
                                name="futurama"
                                className="btn btn-lg btn-outline-light m-md-3 mx-auto col-md-3 col-12 show"
                                onClick={this.chooseShow}>
                                Futurama
                            </button>
                            <button
                                name="southPark"
                                className="btn btn-lg btn-outline-light m-md-3 mx-auto col-md-3 col-12 show"
                                onClick={this.chooseShow}>
                                South Park
                            </button>
                            <button
                                name="kingOfTheHill"
                                className="btn btn-lg btn-outline-light m-md-3 mx-auto col-md-3 col-12 show"
                                onClick={this.chooseShow}>
                                King of the Hill
                            </button>
                            <button
                                name="breakingBad"
                                className="btn btn-lg btn-outline-light m-md-3 mx-auto col-md-3 col-12 show"
                                onClick={this.chooseShow}>
                                Breaking Bad
                            </button>
                            <button
                                name="theWire"
                                className="btn btn-lg btn-outline-light m-md-3 mx-auto col-md-3 col-12 show"
                                onClick={this.chooseShow}>
                                The Wire
                            </button>
                            <button
                                name="sopranos"
                                className="btn btn-lg btn-outline-light m-md-3 mx-auto col-md-3 col-12 show"
                                onClick={this.chooseShow}>
                                Sopranos
                            </button>
                            <button
                                name="seinfeld"
                                className="btn btn-lg btn-outline-light m-md-3 mx-auto col-md-3 col-12 show"
                                onClick={this.chooseShow}>
                                Seinfeld
                            </button>
                            <button
                                name="brooklynNineNine"
                                className="btn btn-lg btn-outline-light m-md-3 mx-auto col-md-3 col-12 show"
                                onClick={this.chooseShow}>
                                Brooklyn Nine-Nine
                            </button>

                        </div>
                    </div>

                </div>
            </React.Fragment>
        );
    }



}


export default Home;