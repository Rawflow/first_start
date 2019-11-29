import { Data } from './data.js';

export const store = {
    state: {
        Data,
        firstEntrance : true             
    },
    filterData(props){
        this.state.firstEntrance = false;
        this.state.newData = this.state.Data.filter((method) =>{
            let bool = false;
            for(let prop in props){
                if(props[prop].length == 0 || props[prop] == method[prop]){
                    bool = true;
                }else{
                    return false;
                }
            }
            return bool;
        })
    },
    getData(){
        if(this.state.firstEntrance == true){
            return this.state.Data;
        }else{
            return this.state.newData;
        }
    },
    resetData(){
        this.state.firstEntrance = true;
    }

}