import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
        state:{
            count:[1,2,3,4,5],
            sum:0
        },
        getters:{
            getCount:function(state){
                return function(index){
                    return state.count[index-1];
                }
            },
            getSum:function(state){
                state.sum=0
                for (let i = 0; i < state.count.length; i++) {
                    state.sum += state.count[i];
                   
                }
                return state.sum
                 window.console.log(state.sum)
            }
        },
        mutations:{
            increment(state,index){
                
                    state.count[index-1] ++;
                    let old = state.count;
                    state.count=[];
                    for (let i = 0; i < old.length; i++) {
                        state.count.push(old[i]);
                    
                    
                }
            },
            dec(state,index){
                state.count[index-1] --;
                    let old = state.count;
                    state.count=[];
                    for (let i = 0; i < old.length; i++) {
                        state.count.push(old[i]);                                
                    }                                              
            }
        }
})

export default store;