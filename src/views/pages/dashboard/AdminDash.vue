<template>
    <div class="container d-flex justify-content-center flex-column">
      <h4 v-if="status === 'loading'">Yükleniyor...</h4>
      <label class="mt-3" ><h1>Admin Panel</h1></label>
        <div class="col-12 mt-5 ms-3 d-flex justify-content-around flex-wrap">



          <div class="card col-3 shadow d-flex p-2 mb-5 me-4" style="border-left: .25rem solid #4e73df !important; min-width: 300px;">
            <div class="card-body d-flex flex-row justify-content-between">
                <div >
                  <h4 class="text-secondary">Günlük Kazanç</h4>
                  <p>24 $</p>
                </div>
                <i class="bi bi-cash-coin" style="font-size: 2em;"></i>
            </div>
        </div>


        <div class="card col-3 shadow d-flex p-2 mb-5 me-4" style="border-left: .25rem solid #1a9707 !important; min-width: 300px;">
            <div class="card-body d-flex flex-row justify-content-between">
                <div >
                  <h4 class="text-secondary">Günlük Sipariş</h4>
                  <p>37 Adet</p>
                </div>
                <i class="bi bi-bag" style="font-size: 2em;"></i>
            </div>
        </div>


        <div class="card col-3 shadow d-flex p-2 mb-5 me-4" style="border-left: .25rem solid #028db8 !important; min-width: 300px;">
            <div class="card-body d-flex flex-row justify-content-between">
                <div >
                  <h4 class="text-secondary">Günlük Satış</h4>
                  <p>32 Adet</p>
                </div>
                <i class="bi bi-check-all" style="font-size: 2em;"></i>
            </div>
        </div>



        </div>

      <div class="card col-12 shadow">
        <apexchart
        height="500rem"
        width="100%"
        type="bar"
        :options="chartOptions"
        :series="series"
        v-if="series"
      ></apexchart>
      </div>
    </div>
  </template>
  
  <script>
  import VueApexCharts from "vue3-apexcharts";
  import TaskData from '../../data/Chart.json'
  import TaskUsers from '../../data/SuperUsers.json'
  
  export default {
    name: "AdminPanel",
    props: {
      msg: String,
    },
    components: {
      apexchart: VueApexCharts,
    },
    data() {
      return {
        status: "loading",
        series: null,
        chartOptions: {
          chart: {
            type: "bar",
            height: 350,
            stacked: true,
          },
          stroke: {
            width: 1,
            colors: ["#fff"],
          },
          title: {
            text: "Sipariş ve satış grafiği",
          },
          yaxis: {
            title: {
              text: undefined,
            },
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return val;
              },
            },
          },
          fill: {
            opacity: 1,
          },
        },
      };
    },
    mounted() {
      let users;
      let taskInfo;
      const userPromises = users = TaskUsers
      const taskInfoPromises = taskInfo = TaskData
      Promise.all([userPromises, taskInfoPromises])
        .then(() => {
          this.status = "done";
          let formatedUserData = this.maxUserDataWithTaskData(users, taskInfo);
          const xAxisLabel = formatedUserData.map((user) => {
            return user.name.split(" ")[0];
          });
          this.chartOptions = {
            ...this.chartOptions,
            xaxis: {
              categories: xAxisLabel,
              labels: {
                formatter: function (val) {
                  return val;
                },
              },
            },
          };
          this.series = [
            {
              name: "Satıldı",
              data: formatedUserData.map((user) => {
                return user.taskComplete;
              }),
            },
            {
              name: "Sipariş",
              data: formatedUserData.map((user) => {
                return user.taskRemain;
              }),
            },
          ];
        })
        .catch((erors) => {
          this.status = "error";
        });
    },
    methods: {
      maxUserDataWithTaskData(users, taskInfo) {
        let formatedUserData = users;
        taskInfo.forEach((task) => {
          formatedUserData = formatedUserData.map((user) => {
            if (user.id === task.userId) {
              if (task.completed) {
                user.taskComplete = user.taskComplete ? user.taskComplete + 1 : 1;
              } else {
                user.taskRemain = user.taskRemain ? user.taskRemain + 1 : 1;
              }
            }
            return user;
          });
        });
        return formatedUserData;
      },
    },
  };
  </script>
  
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  pre {
    max-height: 200px;
    overflow: scroll;
  }
  .small {
    max-width: 600px;
    margin: 150px auto;
  }
  </style>
  