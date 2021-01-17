import React from 'react';
import FlipImage from '../../components/FlipImage';
import './home.css';

//Create a component called banner and put the flipimage with the content

const Home = () =>{

    return (
        <div>
            <div className="home-container p-3 p-md-5 text-white rounded">
                <div className="col-md-6 px-0">
                    <h1 className="display-4 font-italic">The GIT Project</h1>
                    <p className="lead my-3">This project checks the commits done in this project...ironic!!! </p>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row home-card-container">
                    <div className="col home-image-card">
                        <FlipImage image='./logo192.png' header='Info' content='Fancy synpsis regarding the content'/>
                    </div>
                    <div className="col"> 
                        <div className="row">
                            <div className="col-12 d-flex justify-content-start">
                                <h1>Info</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 d-flex justify-content-start">
                                <span>Checkout the information of why this project is done and some other information regarding this project. Also there is information about the handsome developer that code it</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row home-card-container">
                    <div className="col"> 
                        <div className="row">
                            <div className="col-12 d-flex justify-content-end">
                                <h1>Commit</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 d-flex justify-content-end">
                                <span>Information regardint the commits. You will be able to find who made them and at what time. Also feel free to filter the information</span>
                            </div>
                        </div>
                    </div>
                    <div className="col home-image-card">
                        <FlipImage image='./logo192.png' header='Commit' content='Catchy line to refer the commit'/>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row home-card-container">
                    <div className="col home-image-card">
                        <FlipImage image='./logo192.png' header='Project' content='an other catchy line'/>
                    </div>
                    <div className="col"> 
                        <div className="row">
                            <div className="col-12 d-flex justify-content-start">
                                <h1>Project</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 d-flex justify-content-start">
                                <span>Verify information regarding the project. Check in what repository and URL the project is located... and many more information</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Home;