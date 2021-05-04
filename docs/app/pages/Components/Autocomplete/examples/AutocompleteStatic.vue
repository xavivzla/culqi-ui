<template>
  <div>
    <md-autocomplete 
      v-model="selectedGroup"
      :md-options="dataGroup"
      mdOutlined
      md-group
      md-group-item="detail"
      md-group-item-label="description"
      md-group-name="name"
      @md-changed="prueba">
      <label>mdOutlined group</label>
      
      <template v-slot:helper>
        <span class="md-helper-text">Helper text</span>
        <span class="md-error">There is an error</span>
      </template>
    </md-autocomplete>

    <md-autocomplete v-model="selectedCountry" :md-options="countries" mdOutlined>
      <label>autocomplete group</label>
    </md-autocomplete>

    <md-autocomplete v-model="selectedCountry" :md-options="countries">
      <label>Country</label>
    </md-autocomplete>

    <md-autocomplete v-model="selectedEmployee" :md-options="employees" md-dense>
      <label>Employees</label>
    </md-autocomplete>
  </div>
</template>

<script>
  export default {
    name: 'AutocompleteStatic',
    data: () => ({
      selectedCountry: null,
      selectedGroup: null,
      selectedEmployee: null,
      dataGroup: [
        {
          name: 'group 1',
          slug: "1",
          detail: [
            {
              code: 'codigo 1',
              description: 'prueba 1'
            },
            {
              code: 'codigo 2',
              description: 'prueba 2'
            },
            {
              code: 'codigo 3',
              description: 'prueba 3'
            },
            {
              code: 'codigp 4',
              description: 'prueba 4'
            },
          ]
        },
        {
          name: 'group 2',
          slug: "2",
          detail: [
            {
              code: '1',
              description: 'mi nombre'
            },
            {
              code: '1',
              description: 'mi apelldio'
            },
            {
              code: '1',
              description: 'zara'
            },
            {
              code: '1',
              description: 'carlos'
            },
          ]
        },
        {
          name: 'group 3',
          slug: "3",
          detail: [
            {
              code: 'tenis code',
              description: 'tenis'
            },
            {
              code: '1',
              description: 'futbol'
            },
            {
              code: '1',
              description: 'deveploment'
            },
            {
              code: '1',
              description: 'test'
            },
          ]
        },
      ],
      countries: [
        'Algeria',
        'Argentina',
        'Brazil',
        'Canada',
        'Italy',
        'Japan',
        'United Kingdom',
        'United States'
      ],
      employees: [
        'Jim Halpert',
        'Dwight Schrute',
        'Michael Scott',
        'Pam Beesly',
        'Angela Martin',
        'Kelly Kapoor',
        'Ryan Howard',
        'Kevin Malone',
        'Creed Bratton',
        'Oscar Nunez',
        'Toby Flenderson',
        'Stanley Hudson',
        'Meredith Palmer',
        'Phyllis Lapin-Vance'
      ]
    }),
    methods: {
      prueba (dd) {
        console.log('🚀 ~ file: AutocompleteStatic.vue ~ line 125 ~ prueba ~ dd', dd)
      }
    }
  }
</script>
