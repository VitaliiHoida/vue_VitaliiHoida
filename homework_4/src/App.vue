<template>
  <div class="wrapper">
    <form v-if="!successPage">
      <app-progress :val="progrWidth"> </app-progress>
      <div>
        <app-group
          :key="i"
          v-for="(item, i) in info"
          :value="item.value"
          :name="item.name"
          :validated="item.validated"
          @field-input="onInputApp(i, $event)"
        >
        </app-group>
      </div>
      <div class="row-line">
        <app-drop
          :values="dropArr"
          :default_item="country"
          :lbl="lbl"
          @choose-drop="choose"
        >
        </app-drop>
        <app-button :enabled="enabled" @send-form="send" @click="open">
        </app-button>
      </div>
    </form>
    <div v-else>
      <h1>Great job, dude!</h1>
    </div>
    
      <app-modal :isActive="show" @closeModal="close">
        <template #header><h2>Results</h2></template>
        <template #default>
          <div>
            <table class="table table-bordered">
              <tr v-for="item in info" :key="item">
                <td>{{ item.name }}</td>
                <td>{{ item.value }}</td>
              </tr>
              <tr>
                <td>Country</td>
                <td>{{ country }}</td>
              </tr>
            </table>
          </div>
        </template>
        <template #footer>
          <button class="btn btn-secondary" type="button" @click="close">
            CANCEL
          </button>
          <button class="btn btn-success" type="button" @click="success">
            OK
          </button>
        </template>
      </app-modal>
    
  </div>
</template>

<script>
import 'animate.css';
import AppGroup from "./components/AppGroup.vue";
import AppProgress from "./components/AppProgress.vue";
import AppButton from "./components/AppButton.vue";
import AppDrop from "./components/AppDrop.vue";
import AppModal from "./components/AppModal.vue";

export default {
  name: "App",
  components: {
    AppGroup,
    AppProgress,
    AppButton,
    AppDrop,
    AppModal,
  },
  data: () => ({
    info: [
      {
        name: "Name",
        value: "",
        pattern: /^[a-zA-Z ]{2,30}$/,
      },
      {
        name: "Phone",
        value: "",
        pattern: /^[0-9]{7,14}$/,
      },
      {
        name: "Email",
        value: "",
        pattern: /.+/,
      },
      {
        name: "Gender",
        value: "",
        pattern: /^[a-zA-Z ]{3,6}$/,
      },
      {
        name: "Age",
        value: "",
        pattern: /^[0-9]{1,3}$/,
      },
    ],
    result: false,
    successPage: false,
    /*drop-down*/
    dropArr: ["Ukraine", "Great Britain", "Poland", "Orkostan"],
    lbl: "Select Your Country (optional)",
    /* Значение, в которое записывается выбранный элемент dropdown + по умолчанию*/
    country: "Ukraine",
    show: false,
  }),
  computed: {
    enabled() {
      return (
        this.info.length ===
        this.info.filter((item) => item.validated === true).length
      );
    },
    progrWidth() {
      return (
        (this.info.filter((item) => item.validated === true).length /
          this.info.length) *
        100
      );
    },
  },
  methods: {
    onInputApp(i, value) {
      this.info[i].value = value;
      this.info[i].validated = this.info[i].pattern.test(this.info[i].value);
    },
    send() {
      this.result = !this.result;
    },
    /* drop-down*/
    choose(e) {
      this.country = e;
    },
    /* modal */
    open() {
      this.show = !this.show;
    },
    close() {
      this.show = false;
    },
    success() {
      this.show = false;
      this.successPage = !this.successPage;
    },
  },
  created() {
    this.info.forEach((item) => {
      item.validated = item.pattern.test(item.value);
    });
  },
};
</script>

<style>
@import "bootstrap/dist/css/bootstrap.css";

.wrapper {
  font-family: "Balthazar";
  font-size: 24px;
  padding: 15px;
  max-width: 900px;
  margin: 0 auto;
}

.row-line {
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  margin: 0;
  padding: 0;
  flex-direction: row;
  align-items: end;
}

.row-line:only-child {
  flex: 1 0;
  width: 50%;
}

.btn {
  text-transform: uppercase;
}


</style>
