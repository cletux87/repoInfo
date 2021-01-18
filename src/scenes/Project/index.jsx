import React, { useEffect, useState } from 'react';
import { getRepo } from '../../services/github-services';
import Loading from '../../components/Loading';
import Oops from '../../components/Oops';


const Project = () => {

  const [sceneState, setSceneState] = useState('LOADING');
  const [data, setData] = useState();

  useEffect(()=>{
    getRepo()
      .then(value =>{
        setData(value);
        setSceneState('RESPONSE');
      })
      .catch(error =>{
        setSceneState('ERROR');
      });
  }, []);

  function renderSceneState(){
    return(
        <React.Fragment>
            {sceneState === 'LOADING' && <Loading />}
            {sceneState === 'ERROR' && <Oops message="Error while getting info, please try again later" />}
            {sceneState === 'RESPONSE' && renderContent()}
        </React.Fragment>
    );
  }

function renderContent(){
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-12 card mt-4">
          <div className="card-body">
            <h3 className="card-title d-flex justify-content-start">The GIT Project</h3>
            <br/>
            <p className="card-text d-flex justify-content-start">
              The project {data.data.name} was done using {data.data.language} and
              has {data.data.forks} forks. This project was created on {data.data.created_at} and
              contain information regardig the project. This project uses the GitHub API to gather all 
              the information regarding this project
            </p>
            <span className="text-warning d-flex justify-content-end">&#9733; &#9733; &#9733; &#9733; &#9734;</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="card card-outline-secondary my-4">
          <div className="card-header">
            Download information
          </div>
          <div className="card-body">
            <p>You can clone the project using </p><h5>{data.data.clone_url}</h5>
            <small className="text-muted d-flex justify-content-end">Created by {data.data.owner.login}</small>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

  return (
      <div className="container">
          {renderSceneState()}
      </div>
  );
}

export default Project;