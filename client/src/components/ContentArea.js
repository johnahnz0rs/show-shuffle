import React from 'react';
import Home from './Home';

class ContentArea extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // key: value,
        };
        //declare methods here

    }

    componentDidMount() {
        // onInit
    }

    render() {

        return(
            <React.Fragment>
                <div className="root-div">

                    <Home/>

                </div>
            </React.Fragment>
        );
    }



}


export default ContentArea;