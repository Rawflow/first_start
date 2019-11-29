<template>
  <div class="hello">
    <v-card>
      <v-card-title>
        Застосовнісь методів аналізування для загального оцінювання ризику
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
import {store} from '../store.js'

export default {
  name: 'Table1',
  data(){
    return{
      search: '',
      headers: [
        {
          text: 'Метод',
          align: 'left',
          sortable: false,
          value: 'method'
        },
        {
          text: 'Ідентифікування ризику',
          value: 'identifying'
        },
        {
          text: 'Наслідок',
          value: 'consequence'
        },
        {
          text: 'Імовірність',
          value: 'probability'
        },
        {
          text: 'Рівень ризику',
          value: 'riskLevel'
        },
        {
          text: 'Оцінювання ризику',
          value: 'riskValuation'
        }
      ],
      desserts: store.getData()
    }
  },
  methods: {
    Apply: function(){
      this.desserts = store.getData();
    }
  },
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
