<template>
  <div>
    <md-field fileButton>
      <md-file v-model="single" fileButton  @md-change="changeFileInput" />
    </md-field>

    <md-field>
      <label>Single</label>
      <md-file v-model="single" />
    </md-field>

    <md-button @click="removeFile">Clear</md-button>

    <md-field>
      <label>Upload files</label>
      <md-file v-model="placeholder" placeholder="A nice input placeholder" />
    </md-field>

    <md-field>
      <label>Disabled</label>
      <md-file v-model="disabled" disabled/>
    </md-field>

    <md-field>
      <label>Initial value</label>
      <md-file v-model="initial" />
    </md-field>

    <md-field>
      <label>Multiple</label>
      <md-file v-model="multiple" multiple />
    </md-field>

    <md-field>
      <label>Only images</label>
      <md-file v-model="single" accept="image/*" />
    </md-field>
  </div>
</template>

<script>
import MdButton from '../../../../../../src/components/MdButton/MdButton.vue'
export default {
  components: { MdButton },
  name: 'FileField',
  data: () => ({
    initial: 'vue-material-is-awesome.jpg',
    single: null,
    placeholder: null,
    disabled: null,
    multiple: null
  }),
  methods: {
    removeFile() {
      this.single = null
    },
    changeFileInput(e) {
      console.log('Xavi ~...: changeFileInput -> e', e)
    }
  }
}
</script>
