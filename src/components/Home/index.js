import React from "react";
import Profile from "../../assets/images/profile-pic.jpg";

function Home() {
    return (
        <div className="home">
            <div className="container row align-items-center">
                <div className="col-lg-7">
                    <img 
                        className="photo"
                        src={Profile}
                        alt="The man himself: Ethan Torres"
                   />
                </div>
                <div className="col-lg-5">
                    <h1 className="font-weight-light">HOME</h1>
                    <p>Hello and welcome to Ethan's portfolio. this was entirely made 
                        from React.
                    </p>
                </div>
            </div>
        </div>
    );
}


export default Home;