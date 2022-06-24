<template>
  <div class="wrapper">
    <form v-if="!result">
      <app-progress :val="progrWidth">
      </app-progress>
      <div>
        <app-group :key="i"
                   v-for="(item, i) in info"
                   :value="item.value"
                   :name="item.name"
                   :validated="item.validated"
                   @field-input="onInputApp(i, $event)"
        >
        </app-group>
      </div>
      <div class="row-line">
      <app-drop :values="dropArr"
                :default_item="country"
                :lbl="lbl"
                @choose-drop="choose"
               >
      </app-drop>
      <app-button :enabled="enabled"
                  @sendForm="send"
                  >
      </app-button>
      </div>
    </form>
    <div v-else>
      <table class="table table-bordered">
        <tr v-for="item in info" :key="item">
          <td>{{ item.name }}</td>
          <td>{{ item.value }}</td>
        </tr>
        <tr>
          <td>Country</td>
          <td> {{country}} </td>
        </tr>
      </table>
    </div>
    
  </div>
</template>

<script>
import AppGroup from "./components/AppGroup.vue";
import AppProgress from "./components/AppProgress.vue";
import AppButton from "./components/AppButton.vue";
import AppDrop from "./components/AppDrop.vue";

export default {
  name: "App",
  components: {
    AppGroup,
    AppProgress,
    AppButton,
    AppDrop,
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
        name: "Some Field 1",
        value: "",
        pattern: /.+/,
      },
      {
        name: "Some Field 2",
        value: "",
        pattern: /.+/,
      },
    ],
    result: false,
    /*drop-down*/
    dropArr: ['Ukraine', 'Great Britain', 'Poland', 'Orkostan'],
    lbl: 'Select Your Country (optional)',
    /* Значение, в которое записывается выбранный элемент dropdown + по умолчанию*/
    country: 'Ukraine',
  }),
  computed: {
    enabled(){
      return this.info.length === this.info.filter((item) => item.validated === true).length;
    },
    progrWidth(){
      return (this.info.filter((item) => item.validated === true).length/this.info.length)*100;
    }
  },
  methods: {
    onInputApp(i, value) {
      this.info[i].value = value;
      this.info[i].validated = this.info[i].pattern.test(this.info[i].value);
    },
    send(){
      this.result = !this.result;
    },
    /* drop-down*/
    choose(e){
      this.country = e;
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

.row-line{
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  margin: 0;
  padding: 0;
  flex-direction: row;
  align-items: end;
}

.row-line:only-child{
  flex: 1 0;
  width: 50%;
}
</style>
