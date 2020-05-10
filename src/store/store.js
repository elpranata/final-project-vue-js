import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);


export const store = new Vuex.Store({
    state:{
        applicant:[],
        applicantStatus:[],
        department:[],
        eventList:[]
    },
    getters:{
        getApplicant(state) {
            return state.applicant;
        },
        getApplicantStatus(state){
            return state.applicantStatus;
        },
        getDepartment(state){
            return state.department;
        },
        getEventList(state){
            return state.eventList;
        }
    },
    actions:{
         // fetch applicant data
        fetchApplicant ({commit}) {
            console.log("Applicant Fetched")
                axios.get('http://localhost:3000/job_applicant')
                    .then(response => {
                        commit ('fillApplicant', response.data)
                    } 
                )
        },
        fetchApplicantStatus({commit}) {
            console.log("Applicant Status Fetched")
                axios.get('http://localhost:3000/applicant_status')
                    .then(response => {
                        commit ('fillApplicantStatus', response.data)
                    } 
                )
        },
        fetchDepartment({commit}) {
            console.log("Department Fetched")
                axios.get('http://localhost:3000/department')
                    .then(response => {
                        commit ('fillDepartment', response.data)
                    } 
                )
        },
        fetchEventList({commit}) {
            console.log("Event List Fetched")
                axios.get('http://localhost:3000/event')
                    .then(response => {
                        commit ('fillEventList', response.data)
                    } 
                )
        }

    },
    mutations:{
        fillApplicant (state, payload) {
			state.applicant = payload
        },
        fillApplicantStatus (state, payload) {
			state.applicantStatus = payload
        },
        fillDepartment(state,payload){
            state.department=payload
        },
        fillEventList(state,payload){
            state.eventList=payload
        }
    }
});