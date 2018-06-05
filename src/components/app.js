import React, { Component } from 'react';
// --------------------------------------------------
import Header from './comp_header';
import Body from './comp_body';
import Footer from './comp_footer';
// ==================================================
class App extends Component {
    render() {
        return (
            
            <div>
                <Header />
                <Body />
                <Footer />
            </div>
        );
    }
};
// ==================================================
export default App;