import {Data2} from './dataTwo.js'

export const storeTwo = {
    state : {
        Data2,
        firstEntrance : true
    },
    filterData(props){
        this.state.firstEntrance = false;
        this.state.newData2 = this.state.Data2.filter((method) =>{
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
            return this.state.Data2;
        }else{
            return this.state.newData2;
        }
    },
    resetData(){
        this.state.firstEntrance = true;
    }
}