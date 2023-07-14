import React from 'react';

function Footer() {
    return (
        <footer style={{ position: "relative", bottom: 0, width: "100%", opacity: 0.9}}>
            <div className="container-fluid bg-dark text-white py-3">
                <div className="row">
                    <div className="col-md-6">
                        <p className="mb-md-0 text-center text-md-start">&copy; 2023 - Big Bites</p>
                    </div>
                    <div className="col-md-6">
                        <p className="mb-0 text-center text-md-end">Designed by ME</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
