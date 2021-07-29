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
        }
    }

})