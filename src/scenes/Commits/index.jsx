import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';
import CardView from '../../components/CardView';
import Loading from '../../components/Loading';
import Oops from '../../components/Oops';
import { getCommits } from '../../services/github-services';
import './commits.css';

const Commits = (props) => {

    const [listOfCommits, setListOfCommits] = useState([]);
    const [filterComments, setFilterComments] = useState([]);
    const [sceneState, setSceneState] = useState('LOADING');
    const [messageFilter, setMessageFilter] = useState('');
    const [selectFilter, setSelectFilter] = useState('-');

    function isNil( value ){
        if( value === undefined || value === null ){
            return true;
        }
        return false
    }

    useEffect(()=>{
        getCommits()
            .then(value =>{
                setListOfCommits(value.data);
                setFilterComments(value.data);
                setSceneState('RESPONSE');
            })
            .catch(error =>{
                setSceneState('ERROR');
            });
    },[]);

    function sortedCommits(condition, theArray){
        if( condition === 'Date Dsc' ){
            return theArray.sort((a,b) => new Date(a.commit.committer.date).getTime() - new Date(b.commit.committer.date).getTime() );
        }
        if( condition === 'Date Asc' ){
            return theArray.sort((a,b) => new Date(b.commit.committer.date).getTime() - new Date(a.commit.committer.date).getTime() );
        }
        return theArray;
    }

    function filterByMessage(message, theArray){
        if( !isNil(message) && message !== '' ){
            return theArray.filter(value=> value.commit.message.includes(message));
        }
        return theArray;

    }

    function filterArray(filterSelect, filterText ){
        let newArray = [];
        if( isNil(filterSelect) ){
            newArray = sortedCommits(selectFilter, listOfCommits);
        } else {
            newArray = sortedCommits( filterSelect, listOfCommits );
            setSelectFilter(filterSelect);
        }
        if( isNil(filterText) ){
            newArray = filterByMessage(messageFilter, newArray);
        } else {
            newArray = filterByMessage(filterText, newArray);
            setMessageFilter(filterText);
        }
        setFilterComments(newArray);
    }

    function renderListOfCommits(){
        return(
            <React.Fragment>
                {
                    filterComments.map(value=>{
                        return(
                            <div className="row" key={value.sha}>
                                <div className="col-12">
                                <CardView>
                                    <div className="commit-container row commit-header">
                                        <div className="col-6 d-flex justify-content-start">
                                            {value.commit.committer.email}
                                        </div>
                                        <div className="col-6 d-flex justify-content-end">
                                            {moment.tz(value.commit.committer.date, moment.tz.guess()).format('YYYY/MM/DD HH:mm')}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 d-flex justify-content-center commit-hash">
                                            Hash:&nbsp;{value.commit.tree.sha}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 d-flex justify-content-start">
                                            Message:
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 d-flex justify-content-start commit-message">
                                            {value.commit.message}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 d-flex justify-content-center commit-footer">
                                            URL:&nbsp;<a href={value.html_url}>{value.html_url}</a>
                                        </div>
                                    </div>
                                </CardView>
                                </div>
                            </div>
                        );
                    })
                }
            </React.Fragment>
        );
    }

    function renderHeader(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <label>Filter by Message:</label><input value={messageFilter} onChange={(e)=>filterArray(null,e.target.value)} className="form-control" aria-describedby="filter message"></input>
                    </div>
                    <div className="col-6">
                        Sort by:
                        <select className="form-select form-select-lg mb-3" onChange={(e)=>filterArray(e.target.value, null)}>
                            <option value="-">-</option>
                            <option value="Date Asc">Date Asc</option>
                            <option value="Date Dsc">Date Dsc</option>
                        </select>
                    </div>
                </div>
            </div>
        );
    }

    function renderSceneState(){
        return(
            <React.Fragment>
                <div className="d-flex justify-content-center commit-header-container">
                    {renderHeader()}
                </div>
                {sceneState === 'LOADING' && <Loading />}
                {sceneState === 'ERROR' && <Oops message="Error while getting info, please try again later" />}
                {sceneState === 'RESPONSE' && renderListOfCommits()}
            </React.Fragment>
        );
    }

    return (
        <React.Fragment>
            {renderSceneState()}
        </React.Fragment>
    );
}

export default Commits;