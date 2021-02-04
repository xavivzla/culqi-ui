<template>
  <div class="md-file">
    <md-file-icon class="md-file-icon" :class="iconClass" @click.native="openPicker" v-if="!fileButton" />

    <input
      class="md-input"
      readonly
      v-model="model"
      v-bind="{ disabled, required, placeholder }"
      @click="openPicker"
      v-if="!fileButton"
      @blur="onBlur">

      <div class="file-button"
      v-if="fileButton"
      @click="openPicker"
      readonly>
        {{textButton}}
      </div>

    <input type="file" ref="inputFile" v-bind="attributes" v-on="$listeners" @change="onChange" />
  </div>
</template>

<script>
  import MdUuid from 'core/utils/MdUuid'
  import MdFileIcon from 'core/icons/MdFileIcon'
  import MdFieldMixin from '../MdFieldMixin'

  export default {
    name: 'MdFile',
    components: {
      MdFileIcon
    },
    props: {
      id: {
        type: String,
        default: () => 'md-file-' + MdUuid()
      },
      name: String,
      textButton: {
        type: String,
        default: 'File'
      },
      fileButton: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      iconClass () {
        return {
          'md-disabled': this.disabled
        }
      }
    },
    mixins: [MdFieldMixin],
    inject: ['MdField'],
    methods: {
      getMultipleName (files) {
        let names = [];

        [...files].forEach(({ name }) => names.push(name))

        return names.join(', ')
      },
      getFileName (files, target) {
        if (!files || files.length === 0) {
          return target.value.split('\\').pop()
        }

        if (files.length > 1) {
          return this.getMultipleName(files)
        }

        if (files.length === 1) {
          return files[0].name
        }

        return null
      },
      openPicker () {
        if(!this.typeButton) {
          this.onFocus()
        }
        this.$refs.inputFile.click()
      },
      onChange ($event) {
        this.onFileSelected($event)
      },
      onFileSelected ({ target, dataTransfer }) {
        const files = target.files || dataTransfer.files

        this.model = this.getFileName(files, target)
        this.$emit('md-change', files || target.value)
      }
    },
    created () {
      this.MdField.file = true
    },
    beforeDestroy () {
      this.MdField.file = false
    }
  }
</script>

<style lang="scss">
  .file-button {
    font-family: 'Archivo';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #00A19B;
    background: rgba($color: #00A19B, $alpha: 0.1);
    border-radius: 4px;
    padding: 4px 8px;
    cursor: pointer;
  }
  .md-file {
    display: flex;
    flex: 1;

    input[type="file"] {
      width: 1px;
      height: 1px;
      margin: -1px;
      padding: 0;
      overflow: hidden;
      position: absolute;
      clip: rect(0 0 0 0);
      border: 0;
    }

    .md-file-icon {
      &:not(.md-disabled) {
        cursor: pointer;
      }

      &.md-disabled {
        pointer-events: none;
      }
    }
  }
</style>
