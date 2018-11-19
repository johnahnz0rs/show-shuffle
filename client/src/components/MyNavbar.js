import React from "react";

const MyNavbar = (props) => {

    return (<React.Fragment>

        {/*<nav className="navbar navbar-expand-xs navbar-light container-fluid fixed-top" style={myNav}>*/}
        <div className="container-fluid fixed-top py-1" style={{backgroundColor: 'pink', paddingRight: '20px'}}>
            <a href="#" className="text-right" style={{color: 'white'}}>
                <h3 className="font-weight-bold mb-0">Show Shuffle</h3>
                <p className="my-0">back to Top</p>
            </a>
        </div>
        {/*</nav>*/}

    </React.Fragment>);
};

export default MyNavbar;