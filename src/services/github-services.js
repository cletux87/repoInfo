import axios from 'axios';

const projectName = 'testLogin';

const petition = axios.create({
    baseURL: 'https://api.github.com'
});

export function getRepo(){
    return petition.get(`/repos/cletux87/${projectName}`);
}

export function getCommits(){
    return petition.get(`/repos/cletux87/${projectName}/commits`);
}