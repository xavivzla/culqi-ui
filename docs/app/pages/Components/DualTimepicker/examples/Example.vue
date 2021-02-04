<template>
  <div>
    <date-range-picker
      ref="picker"
      opens="center"
      :locale-data="{ firstDay: 1, format: 'DD/MM/YYYY' }"
      :autoApply="true"
      :ranges="false"
      v-model="dateRange"
      @update="updateValues"
      @toggle="checkOpen"
      :dateFormat="dateFormat"
    >
      <template
        v-slot:input="picker"
        style="min-width: 350px;"
      >{{ picker.startDate | date }} - {{ picker.endDate | date }}</template>
    </date-range-picker>
  </div>
</template>

<script>
import DateRangePicker from "vue2-daterange-picker";
//you need to import the CSS manually (in case you want to override it)
import "vue2-daterange-picker/dist/vue2-daterange-picker.css";

export default {
  components: { DateRangePicker },
  data: () => ({
    dateRange: {
      startDate: "2020-10-26",
      endDate: "2019-12-28",
    },
  }),
  filters: {
    date(val) {
      console.log('xavi ~: date -> val', val)
      return val ? val.toLocaleString('es-ES', {day: "2-digit", month: '2-digit', year: 'numeric'}) : ''
    }
  },
  methods: {
    updateValues(data) {
      console.log("xavi ~: data", data);
    },
    checkOpen(data) {
      console.log("xavi ~: checkOpen -> data", data);
    },
    dateFormat(classes, date) {
      // if (!classes.disabled) {
      //   classes.disabled = date.getTime() < new Date();
      // }
      return classes;
    },
  },
};
</script>
