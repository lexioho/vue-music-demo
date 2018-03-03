const state = {
    isMenuShow:false
}

const mutations = {
    hideMenu(state){
        state.isMenuShow = false;
    },
    showMenu(state){
        state.isMenuShow = true;
    }
}

export default({
    state,
    mutations
})
