import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return(
            <div className="Footer">
                <footer className="footer">
                <div className="container">
                        <div className="content has-text-centered">
                            <p>
                                <strong>Dibbs</strong> developed at <a href="http://www.pyghack.com/">PygHack 2017</a>. The source code is open-sourced and freely available on <a href="https://github.com/qianminhu/pyghackDibbs">GitHub</a>.
                            </p>
                        </div>
                    </div>
                    <div className="section">
                        <button className="button is-primary">Click Me!</button>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;