<template>
    <v-container full-width fluid>
           
            <v-flex full-width text-center>
                <v-row class="justify-center">
                    <h3>Add New Applicant</h3>   
                </v-row>
                <div>

                </div>
                <v-row class="justify-center">
                     <div style="width:80%">
                     <v-form
                        ref="form"
                        v-model="valid"
                        lazy-validation
                     >
                    <v-text-field
                    v-model="name"
                    :counter="10"
                    :rules="nameRules"
                    label="Name"
                    required
                    ></v-text-field>

                    <div>
                           <v-date-picker full-width v-model="picker"></v-date-picker>
                    </div>
                    <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                    ></v-text-field>

                    <v-text-field
                    v-model="phone_number"
                    :rules="nameRules"
                    label="Phone Number"
                    required
                    ></v-text-field>

                   <v-text-field
                    v-model="cv_file"
                    :rules="nameRules"
                    label="CV File"
                    required
                    ></v-text-field>

                    <v-select
                    v-model="select"
                    :items="this.getDataDepartment"
                    :rules="[v => !!v || 'Item is required']"
                    label="Department"
                    required
                    ></v-select>

                    <v-checkbox
                    v-model="checkbox"
                    :rules="[v => !!v || 'You must agree to continue!']"
                    label="Do you agree?"
                    required
                    ></v-checkbox>

                    <v-btn
                    :disabled="!valid"
                    color="success"
                    class="mr-4 rounded"
                    @click="validate"
                    >
                    Add
                    </v-btn>
                    <v-btn
                    color="error"
                    class="mr-4"
                    @click="reset"
                    >
                    Reset Form
                    </v-btn>
                </v-form>
                </div>
                </v-row>
            </v-flex>
    </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    data () {
      return {
        picker: new Date().toISOString().substr(0, 10),
        form:{
            id:'',
            birth_date:'',
            name:'',
            email:'',
            phone_number:'',
            cv_file:'',
            department:'',
            applicant_status:'Unprocessed'
        }
      }
    },
    computed:{
        ...mapGetters({
            getDepartment:'getDepartment'
        }),
        getDataDepartment(){
            return this.getDepartment;
        }
    },
    methods:{
        ...mapActions({
            fetchDepartment:'fetchDepartment'
        })
    },
    created(){
        this.fetchDepartment();
    }
}
</script>