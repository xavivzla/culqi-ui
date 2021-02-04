<example src="./examples/Example.vue" />

<template>
  <page-container centered :title="$t('pages.dualTimepicker.title')">
    <div class="page-container-section">
      <p>Datepickers use a dialog window and provide a simple way to select a single value from a pre-determined set. The component can have disabled dates and it's really easy to use.</p>
    </div>

    <div class="page-container-section">
      <h2 id="timepicker">Dual Datepicker</h2>

      <code-example title="Dual Timepicker" :component="examples['example']" />

      <api-item title="API - md-Timepicker">
        <p>All the following options can be applied to the md-dual-datepicker component:</p>

        <api-table :headings="props.headings" :props="props.props" slot="props" />
        <api-table :headings="events.headings" :props="events.props" slot="events" />
      </api-item>

    </div>
  </page-container>
</template>

<script>
  import examples from 'docs-mixins/docsExample'

  export default {
    name: 'DocDualTimepicker',
    mixins: [examples],
    data: () => ({
      props: {
        headings: ['Name', 'Description', 'Default'],
        props: [
          {
            name: 'v-model',
            type: 'Date|Number|String',
            description: 'The model variable to bind the selected date',
            defaults: 'null'
          },
          {
            name: 'md-model-type',
            type: 'Constructor',
            description: 'Model type. This props will be overwritten by <code>typeof v-model</code>. It could be <code>Date</code>, <code>Number</code> or <code>String</code>.',
            defaults: 'Date'
          },
          {
            name: 'md-disabled-dates',
            type: 'Array|Function',
            description: 'The optional disabled dates. Can be either Array or Function. <br>- If <code>Array</code>, the Datepicker will disable all days inside. <br>- If <code>Function</code>, the Datepicker will pass the current day as a parameter of this function. If the return false, then the date will be disabled.',
            defaults: 'null'
          },
          {
            name: 'md-open-on-focus',
            type: 'Boolean',
            description: 'Disable the on focus event. Will open only if the user clicks on the icon.',
            defaults: 'true'
          },
          {
            name: 'md-immediately',
            type: 'Boolean',
            description: 'Select the date without confirm and close the dialog immediately.',
            defaults: 'false'
          },
          {
            name: 'md-override-native',
            type: 'Boolean',
            description: 'Override native browser pickers by changing type of input to text.',
            defaults: 'true'
          },
          {
            name: 'md-debounce',
            type: 'Number',
            description: 'Debounces the conversion of plaintext into a date object. Set to a longer time if your users type slowly, or shorter if your users type really fast.',
            defaults: 1000
          }
        ]
      },
      events: {
        headings: ['Name', 'Description', 'Value'],
        props: [
          {
            name: 'md-opened',
            description: 'Triggered when a datepicker dialog opens',
            value: 'null'
          },
          {
            name: 'md-closed',
            description: 'Triggered when a datepicker dialog closes',
            value: 'null'
          },
        ]
      }
    })
  }
</script>
