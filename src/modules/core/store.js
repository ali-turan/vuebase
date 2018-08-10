export default {
    namespaced: true,
    state : {
        sidebar : {
            status : 2,
            show : true,
            mini : false
        }
    },
    actions : {
        
    },
    getters : {
        
    },
    mutations: {
        toggleSidebar : function (state){
            if(state.sidebar.status == 0) state.sidebar.status = 2
            else state.sidebar.status -= 1;

            if(state.sidebar.status == 0) {
                state.sidebar.show = false;
                state.sidebar.mini = false;
            }
            else if (state.sidebar.status == 1){
                state.sidebar.show = true;
                state.sidebar.mini = true;
            }
            else if (state.sidebar.status == 2){
                state.sidebar.show = true;
                state.sidebar.mini = false;
            }
        }
    }
}