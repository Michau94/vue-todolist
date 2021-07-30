console.log(Vue);

const root = new Vue({
    el: '#root',
    data: {
        newTask: '',
        tasks: [

            {
                text: 'Sleep',
                done: false
            },
            {
                text: 'Eat',
                done: false
            },
            {
                text: 'Code',
                done: false
            },
            {
                text: 'Repeat',
                done: false
            },
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
                this.tasks.push({ text: this.newTask, done: false });
            }
            // svuoto new task dopo submit
            this.newTask = '';
        },

        showTask(task) {
            // se presenti spazi fai vedere tutto

            const updTask = task.toLowerCase();

            if (this.searchTab.trim() === " " || !this.searchTab) {
                return true;
            }

            // mostra task se trovato se non trovato nascondi
            return updTask.includes(this.searchTab.trim().toLowerCase()) ? true : false;

        },



        toggleDone(index) {
            const updatedTasks = this.tasks.map((task, taskIndex) => {
                if (taskIndex === index) {
                    task.done = !task.done
                }

                return task;
            })

            this.tasks = updatedTasks;

        },

        isDone(index) {
            return this.tasks[index].done;
        },

    }

})