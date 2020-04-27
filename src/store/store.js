import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);


export const store = new Vuex.Store({
    state:{
        applicant:[]
    },
    getters:{
        getApplicant(state) {
            return state.applicant;
        },
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
        }
    },
    mutations:{
        fillApplicant (state, payload) {
			state.applicant = payload
        },
    }
});