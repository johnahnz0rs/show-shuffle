import React from 'react';

class PopularShows extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        //declare methods here
        this.chooseShow = this.chooseShow.bind(this);
    }

    chooseShow = (e) => {
        // const show = e.target.name;
        this.props.chooseShow(e);
    };

    render() {

        const shows = {};

        return (
            <React.Fragment>
                <div className="col-9 text-center" style={shows}>

                    {this.props.shows.map(show => {
                        return (
                            <a href="#recommendation"
                               name={show}
                               className="btn btn-lg btn-light col-12 col-md-3 mx-2 show"
                               onClick={this.chooseShow}>
                                {show}
                            </a>
                        );
                    })}

                </div>

                {/*<div className="col-9 text-center">*/}

                {/**/}
                {/*<a href="#recommendation"*/}
                {/*name="parksAndRec"*/}
                {/*className="btn btn-lg btn-outline-light col-12 col-md-3 mx-2 show"*/}
                {/*onClick={this.chooseShow}>*/}
                {/*Parks and Rec*/}
                {/*</a>*/}
                {/*<a href="#recommendation"*/}
                {/*name="theOffice"*/}
                {/*className="btn btn-lg btn-outline-light col-12 col-md-3 mx-2 show"*/}
                {/*onClick={this.chooseShow}>*/}
                {/*The Office*/}
                {/*</a>*/}
                {/*<a href="#recommendation"*/}
                {/*name="ventureBros"*/}
                {/*className="btn btn-lg btn-outline-light col-12 col-md-3 mx-2 show"*/}
                {/*onClick={this.chooseShow}>*/}
                {/*Venture Bros.*/}
                {/*</a>*/}
                {/*<a href="#recommendation"*/}
                {/*name="futurama"*/}
                {/*className="btn btn-lg btn-outline-light col-12 col-md-3 mx-2 show"*/}
                {/*onClick={this.chooseShow}>*/}
                {/*Futurama*/}
                {/*</a>*/}
                {/*<a href="#recommendation"*/}
                {/*name="southPark"*/}
                {/*className="btn btn-lg btn-outline-light col-12 col-md-3 mx-2 show"*/}
                {/*onClick={this.chooseShow}>*/}
                {/*South Park*/}
                {/*</a>*/}
                {/*<a href="#recommendation"*/}
                {/*name="kingOfTheHill"*/}
                {/*className="btn btn-lg btn-outline-light col-12 col-md-3 mx-2 show"*/}
                {/*onClick={this.chooseShow}>*/}
                {/*King of the Hill*/}
                {/*</a>*/}
                {/*<a href="#recommendation"*/}
                {/*name="breakingBad"*/}
                {/*className="btn btn-lg btn-outline-light col-12 col-md-3 mx-2 show"*/}
                {/*onClick={this.chooseShow}>*/}
                {/*Breaking Bad*/}
                {/*</a>*/}
                {/*<a href="#recommendation"*/}
                {/*name="theWire"*/}
                {/*className="btn btn-lg btn-outline-light col-12 col-md-3 mx-2 show"*/}
                {/*onClick={this.chooseShow}>*/}
                {/*The Wire*/}
                {/*</a>*/}
                {/*<a href="#recommendation"*/}
                {/*name="sopranos"*/}
                {/*className="btn btn-lg btn-outline-light col-12 col-md-3 mx-2 show"*/}
                {/*onClick={this.chooseShow}>*/}
                {/*Sopranos*/}
                {/*</a>*/}
                {/*<a href="#recommendation"*/}
                {/*name="seinfeld"*/}
                {/*className="btn btn-lg btn-outline-light col-12 col-md-3 mx-2 show"*/}
                {/*onClick={this.chooseShow}>*/}
                {/*Seinfeld*/}
                {/*</a>*/}
                {/*<a href="#recommendation"*/}
                {/*name="brooklynNineNine"*/}
                {/*className="btn btn-lg btn-outline-light col-12 col-md-3 mx-2 show"*/}
                {/*onClick={this.chooseShow}>*/}
                {/*Brooklyn Nine-Nine*/}
                {/*</a>*/}

                {/*</div>*/}
            </React.Fragment>

        );
    }

}

export default PopularShows;