<template>
  <div class="wrapper">
    <form v-if="!result">
      <app-progress :max="info.length"
                    :val="info.filter((item) => item.validated === true).length"
      >
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
      <app-button :enabled="enabled"
                  @sendForm="send">

      </app-button>
    </form>
    <div v-else>
      <table class="table table-bordered">
        <tr v-for="item in info" :key="item">
          <td>{{ item.name }}</td>
          <td>{{ item.value }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import AppGroup from "./components/AppGroup.vue";
import AppProgress from "./components/AppProgress.vue";
import AppButton from "./components/AppButton.vue";

export default {
  name: "App",
  components: {
    AppGroup,
    AppProgress,
    AppButton,
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
  }),
  computed: {
    enabled(){
      return this.info.length === this.info.filter((item) => item.validated === true).length;
    }
  },
  methods: {
    onInputApp(i, value) {
      this.info[i].value = value;
      this.info[i].validated = this.info[i].pattern.test(this.info[i].value);
    },
    send(){
      this.result = !this.result;
    }
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
</style>
