<template>
  <div>
    <v-card>
      <v-card-title>
        Ознаки вибору методів загального оцінювання ризику
        <v-spacer></v-spacer>
        <v-btn
        @click="Apply()"
        >
          Apply
        </v-btn>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="search"
          label="Search"
          single-line
          hide-details
        >
        <v-icon>search</v-icon>
        </v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="desserts"
        :search="search"
      ></v-data-table>
    </v-card>
  </div>
</template>

<script>
import {storeTwo} from '../storeTwo.js';

export default {
  name: 'Table2',
  data(){
    return{
      search: '',
      headers:[
        {
          text: 'Метод',
          sortable: false,
          align: 'left',
          value: 'method'
        },
        {
          text: 'Тип методу',
          value: 'methodType'
        },
        {
          text: 'Опис',
          value: 'description'
        },
        {
          text: 'Ресурси та можливості(важливість)',
          value: 'resources'
        },
        {
          text: 'Характер і ступінь невизначеності(важливість)',
          value: 'character'
        },
        {
          text: 'Складність(важливість)',
          value: 'complexity'
        },
        {
          text: 'Уможливлює отримання кількісних вхідних даних',
          value: 'possibility'
        }
      ],
      desserts: storeTwo.getData()
    }
  },
  methods: {
    Apply: function(){
      this.desserts = storeTwo.getData();
    }
  },
  props: {

  }
}
</script>

<style scoped>

</style>