<example src="./examples/Example.vue" />

<template>
  <page-container centered :title="$t('pages.drawerCulqi.title')">
    <div class="page-container-section">
      <p>Lorem ipsum</p>
    </div>

    <div class="page-container-section">
      <h2>DrawerCulqi</h2>

      <code-example title="Example" :component="examples['example']" />

      <api-item title="API - md-drawer-culqi">
        <p>This component do not have any extra option.</p>
        <api-table :headings="api.props.headings" :props="api.props.values" slot="props" />
        <!-- <api-table :headings="api.icons.classes.headings" :props="api.icons.classes.props" slot="classes2" /> -->
      </api-item>
    </div>
  </page-container>
</template>

<script>
  import examples from 'docs-mixins/docsExample'

  export default {
    name: 'DocDrawerCulqi',
    mixins: [examples],
    data: () => ({
      api: {
        props: {
          headings: ['Name', 'Description', 'Default'],
          values: [
            {
              name: 'mdMenus',
              description: 'Type Array',
              defaults: ' '
            },
            {
              name: 'merchants',
              description: 'Type Array',
              defaults: ' '
            },
            {
              name: 'support',
              description: 'Type Array',
              defaults: ' '
            },
            {
              name: 'notification',
              description: 'Type Array',
              defaults: ' '
            },
            {
              name: 'notificacionVisible',
              description: 'Type Boolean',
              defaults: 'False'
            },
            {
              name: 'adminName',
              description: 'Type String',
              defaults: 'null'
            },
            {
              name: 'adminRole',
              description: 'Type String',
              defaults: 'null'
            },
            {
              name: 'currentMerchantImg',
              description: 'Type String',
              defaults: 'null'
            },
            {
              name: 'currentMerchant',
              description: 'Type String',
              defaults: 'null'
            },
            {
              name: 'adminNameInitials',
              description: 'Type String',
              defaults: 'null'
            },
            {
              name: 'numberPhoneCulqi',
              description: 'Type String',
              defaults: 'null'
            },
            {
              name: 'imgNotificationNone',
              description: 'Type String',
              defaults: 'null'
            },
          ]
        },
      }
    })
  }
</script>

<style lang="scss" scoped>

</style>
