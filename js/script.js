console.log(Vue);

const root = new Vue({
    el: '#root',
    data: {
        newTask: '',
        tasks: [
            'Sleep',
            'Eat',
            'Code',
            'Repeat'
        ],
        searchTab: "",

    },
    methods: {


        removeTask(i) {
            this.tasks.splice(i, 1);
        },

        submitTask() {
            if (this.newTask.trim() !== '') {

                //submit new task dolo se non spazio vuoto
                this.tasks.push(this.newTask);
            }
            // svuoto new task dopo submit
            this.newTask = '';
        },

        showTask(task) {
            // se presenti spazi fai vedere tutto
            if (this.searchTab.trim() == "" || !this.searchTab) {
                return true;
            }

            // mostra task se trovato se non trovato nascondi
            return task.includes(this.searchTab.trim().toLowerCase()) ? true : false;



        }


    }

})