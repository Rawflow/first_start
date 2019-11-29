<template>
    <div>
    <v-card>
        <v-container fluid>
        <v-row align="center">
            <v-col class="d-flex" cols="" sm="">
            <v-select
                v-model="params.identifying"
                @change="onChange()"
                :items="items"
                label="Ідентифікування ризику"
            ></v-select>
            </v-col>
            <v-col class="d-flex" cols="" sm="">
            <v-select
                v-model="params.consequence"
                @change="onChange()"
                :items="items"
                label="Наслідок"
            ></v-select>
            </v-col>
            <v-col class="d-flex" cols="" sm="">
            <v-select
                v-model="params.probability"
                @change="onChange()"
                :items="items"
                label="Імовірність"
            ></v-select>
            </v-col>
            <v-col class="d-flex" cols="" sm="">
            <v-select
                v-model="params.riskLevel"
                @change="onChange()"
                :items="items"
                label="Рівень ризику"
            ></v-select>
            </v-col>
            <v-col class="d-flex" cols="" sm="">
            <v-select
                v-model="params.riskValuation"
                @change="onChange()"
                :items="items"
                label="Оцінювання ризику"
            ></v-select>
            </v-col>
            <v-col class="d-flex" cols="" sm="">
            <v-btn 
                v-on:click = "resetValues"
            >
                Reset
            </v-btn>
            </v-col>
    
        </v-row>
        </v-container>
    </v-card>
    </div>
</template>


<script>
import {store} from '../store.js';

export default {

    name: 'Table1Validation',
    data(){
        return{
            items: ['Завжди застосовний', 'Незастосовний', 'Застосовний'],
            params: {
                identifying: '',
                consequence: '',
                probability: '',
                riskLevel: '',
                riskValuation: ''
            }

        }
    },
    methods: {
        resetValues: function(){
            this.params.identifying = '';
            this.params.consequence = '';
            this.params.probability = '';
            this.params.riskLevel = '';
            this.params.riskValuation = '';
            store.resetData();
        },
        onChange: function(){
            store.filterData(this.params);
        }
    },
    computed: {
    }
}
</script>

<style scoped>

</style>