import axios from 'axios';

const baseUrl = 'http://demo3707669.mockable.io/';  // URL to web api

 export function getApiCandidates() {
     return axios.get(baseUrl + 'candidates');
 }

  export function postApiCandidates(item) {
     return axios.post(baseUrl + 'candidates', {
    fullName: item.fullName,
    headline: item.headline,
    summary: item.summary,
    phone: item.phone,
    email: item.email,
    zip: item.zip,
    website: item.website,
    social: item.social,
    yearsExperience: item.yearsExperience,
    expectedSalaryK: item.expectedSalaryK,
    education: item.education,
    careerLevel: item.careerLevel,
    industry: item.industry
     });
 }

   export function postApiEmployers(item) {
     return axios.post(baseUrl + 'employers', {
    fullName: item.fullName,
    email: item.email,
    zip: item.zip,
    website: item.website,
    social: item.social,
    industry: item.industry
     });
 }
 
    export function postApPositions(item) {
     return axios.post(baseUrl + 'positions', {
    employerUuid: item.employerUuid,
    title: item.title,
    location: item.location,
    description: item.description
     });
 }
 export function getApiEmployersUUID(UUID) {
     return axios.get(baseUrl + 'employers/' + UUID);
 }

 export function getApiCandidatesUUID(UUID) {
     return axios.get(baseUrl + 'candidates/' + UUID);
 }

 export function getApiCandidatesMatches(UUID) {
     return axios.get(baseUrl + 'candidates/' + UUID + '/' + 'matches');
 }

 export function getApiPositionsUUID(UUID) {
    return axios.get(baseUrl + 'positions/' + UUID);
 }
 
  export function getApiPositionsMatches(UUID) {
     return axios.get(baseUrl + 'positions/' + UUID + '/' + 'matches');
 }

   export function getApiEmployers() {
     return axios.get(baseUrl + 'employers');
 }