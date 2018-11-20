import React from "react";

const MyNavbar = (props) => {

    return (<React.Fragment>

        {/*<nav className="navbar navbar-expand-xs navbar-light container-fluid fixed-top" style={myNav}>*/}
        <div className="container-fluid fixed-top py-1" style={{backgroundColor: 'pink', width: '100%'}}>
            <a href="#" className="text-left d-inline-block mr-auto" style={{color: 'white'}}>
                <h3 className="font-weight-bold mb-0">Show Shuffle</h3>
                <p className="my-0">back to Top</p>
            </a>
            <a tabIndex="0" className="float-right btn btn-sm btn-outline-light d-inline-block mt-3" role="button" data-toggle="popover" data-trigger="focus" title="just pick a dang show already" data-content="don't waste brainpower or time figuring out what to watch. we can guide u in 3 simple steps or suggest a complete rando -- up to you.">?</a>
        </div>
        {/*</nav>*/}

    </React.Fragment>);
};

export default MyNavbar;