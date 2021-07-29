console.log(Vue);

const root = new Vue({
    el: '#root',
    data: {
        tasks: [
            'Sleep',
            'Eat',
            'Code',
            'Repeat'
        ]

    },
    methods: {
        removeTask(i) {
            this.tasks.splice(i, 1);
        }

    }



})