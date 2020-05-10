<template>
   <v-container>
    <br />
    <h3>Event List</h3>
    <v-row class="justify-center">
     <v-data-table
    :headers="headers"
    :items="getEventList"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>Event</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark class="mb-2" v-on="on">Add Event</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="form.name" required label="Name"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="form.description" required label="Description"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="form.location" required label="Location"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="form.start_date" required  label="Start Date"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="form.end_date" required label="End Date"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = false">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="add()">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>
  </v-data-table>
    </v-row>
    </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import axios from "axios";
export default {
    data() {
    return {
      form: {
        id: "",
        name:"",
        description:"",
        location:"",
        start_date:"",
        end_date:""
      },
      dialog: false,
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Description', value: 'description' },
        { text: 'Location', value: 'location' },
        { text: 'Start Date', value: 'start_date' },
        { text: 'End Date', value: 'end_date' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      editedIndex: -1,
      editedItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },
   
    };
  },
  computed:{
     ...mapGetters({
       getEventList:"getEventList"
     }),
     getDataEventList(){
       return this.getEventList;
     }
  },
  methods:{
      ...mapActions({
      fetchEventList: "fetchEventList",
    }),
    add(){
        axios
          .post("http://localhost:3000/event/", this.form)
          .then(res => {
            alert("Succesfully Add New Event!");
            this.form.name = "";
            this.form.description = "";
            this.form.start_date = "";
            this.form.end_date = "";
            this.form.location = "";
            console.log(res);
          });
    },
     deleteItem(item){
        return axios.delete('http://localhost:3000/event/' + item.id).then(res => {
           alert("Data Berhasil dihapus")
           console.log(res);
          }).catch((err) => {
            console.log(err);
          })
    }
  },
  created() {
    this.fetchEventList();
  }

}
</script>