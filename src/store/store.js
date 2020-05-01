import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);


export const store = new Vuex.Store({
    state:{
        applicant:[],
        applicantStatus:[]
    },
    getters:{
        getApplicant(state) {
            return state.applicant;
        },
        getApplicantStatus(state){
            return state.applicantStatus;
        }
    },
    actions:{
         // fetch applicant data
        fetchApplicant ({commit}) {
            console.log("applicant")
                axios.get('http://localhost:3000/job_applicant')
                    .then(response => {
                        commit ('fillApplicant', response.data)
                    } 
                )
        },
        fetchApplicantStatus({commit}) {
            console.log("applicant status")
                axios.get('http://localhost:3000/applicant_status')
                    .then(response => {
                        commit ('fillApplicantStatus', response.data)
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
    }
});