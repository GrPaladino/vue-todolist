const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      title: "Todo App",

      tasks: [
        {
          name: "Task 1",
          type: true,
        },

        {
          name: "Task 2",
          type: true,
        },
        {
          name: "Task 3",
          type: false,
        },

        {
          name: "Task 4",
          type: false,
        },

        {
          name: "Task 5",
          type: true,
        },

        {
          name: "Task 6",
          type: false,
        },

        {
          name: "Task 7",
          type: true,
        },

        {
          name: "Task 8",
          type: true,
        },

        {
          name: "Task 9",
          type: false,
        },
      ],
    };
  },

  methods: {
    removeTask(i) {
      this.tasks.splice(i, 1);
    },
  },
});
app.mount("#root");
