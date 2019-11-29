<template>
    <div>
    <v-card>
        <v-container fluid>
        <v-row align="center">
            <v-col class="d-flex" cols="" sm="">
            <v-select
                v-model="params.methodType"
                @change="onChange()"
                :items="methodTypeItems"
                label="Тип методу"
            ></v-select>
            </v-col>
            <v-col class="d-flex" cols="" sm="">
            <v-select
                v-model="params.resources"
                @change="onChange()"
                :items="importanceItems"
                label="Ресурси та можливості(важливість)"
            ></v-select>
            </v-col>
            <v-col class="d-flex" cols="" sm="">
            <v-select
                v-model="params.character"
                @change="onChange()"
                :items="importanceItems"
                label="Характер і ступінь невизначеності(важливість)"
            ></v-select>
            </v-col>
            <v-col class="d-flex" cols="" sm="">
            <v-select
                v-model="params.complexity"
                @change="onChange()"
                :items="importanceItems"
                label="Складність(важливість)"
            ></v-select>
            </v-col>
            <v-col class="d-flex" cols="" sm="">
            <v-select
                v-model="params.possibility"
                @change="onChange()"
                :items="yesItems"
                label="Уможливлює отримання кількісних вхідних даних"
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
import {storeTwo} from '../storeTwo.js';

export default {

    name: 'Table2Validation',
    data(){
        return{
            methodTypeItems: ['Метод пошуку', 'Допоміжний метод', 'Аналізування сценарію', 'Функційне аналізування', 'Загальне оцінювання засобів контролюванная', 'Статистичні методи'],
            importanceItems: ['Висока', 'Середня', 'Низька', 'Будь-яка'],
            yesItems: ['Так', 'Ні'],
            params: {
                methodType: '',
                resources: '',
                character: '',
                complexity: '',
                possibility: ''
            }

        }
    },
    methods: {
        resetValues: function(){
            this.params.methodType = '';
            this.params.resources = '';
            this.params.character = '';
            this.params.complexity = '';
            this.params.possibility = '';
            storeTwo.resetData();
        },
        onChange: function(){
            storeTwo.filterData(this.params);
        }
    },
    computed: {
    }
}
</script>

<style scoped>

</style>