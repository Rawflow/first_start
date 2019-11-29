<template>
  <v-app>
    <v-tabs>
      <v-tab>Таблиця 1</v-tab>
      <v-tab>Таблиця 2</v-tab>
      <v-tab>Схема</v-tab>
      <div>
      </div>
      <v-tab-item>
          <Table1Validation />
          <Table1 />
      </v-tab-item>   
      <v-tab-item>
          <Table2Validation />
          <Table2 />
      </v-tab-item> 
      <v-tab-item>
          <Dodatok />
      </v-tab-item> 
    </v-tabs>
  </v-app>
</template>

<script>
import Table1Validation from './components/Table1Validation';
import Table2Validation from './components/Table2Validation';
import Table1 from './components/Table1';
import Table2 from './components/Table2';
import Dodatok from './components/Dodatok';

export default {
  name: 'App',

  components: {
    Table1,
    Table2,
    Dodatok,
    Table1Validation,
    Table2Validation
  },

  data: () => ({
    //
  }),
};
</script>
