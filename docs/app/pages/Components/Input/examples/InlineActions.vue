<template>
  <div>
    <md-field md-clearable>
      <label>Cleareable</label>
      <md-input v-model="initial"></md-input>
    </md-field>

    <md-field>
      <label>Password toggle</label>
      <md-input v-model="password" type="password"></md-input>
    </md-field>

    <md-field mdOutlined>
      <label>Password toggle</label>
      <md-input v-model="password" type="password"></md-input>
      <template v-slot:helper>
        <span class="md-helper-text">
          <!-- Helper text -->
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quaerat dignissimos accusantium. Quia laborum excepturi, impedit maiores ducimus fugiat autem id consectetur placeat, sed modi eos aspernatur iusto numquam nisi voluptate mollitia culpa expedita odio accusantium libero consequuntur neque. Quas quos consequuntur itaque minus molestias atque qui maiores, ipsam magnam aliquid! Deserunt exercitationem ut dolorem beatae dolorum, saepe numquam sapiente ipsa quam dignissimos praesentium natus similique corrupti esse laboriosam quisquam vitae fugiat non doloremque repellat autem. Sint ipsa quas dolor laboriosam repudiandae quae suscipit harum explicabo laborum deleniti, quod iste quidem itaque beatae, voluptatibus earum quis sunt perspiciatis sed commodi?
        </span>
      </template>
    </md-field>

    <md-field :md-toggle-password="false">
      <label>Password field without toggle</label>
      <md-input v-model="password" type="password"></md-input>
    </md-field>

    <md-field mdOutlined :md-toggle-password="false">
      <label>Password field without toggle</label>
      <md-input v-model="password" type="password"></md-input>
    </md-field>
  </div>
</template>

<script>
  export default {
    name: 'InlineActions',
    data: () => ({
      initial: 'Initial Value',
      password: 'mysecurepassword'
    })
  }
</script>

<style lang="scss" scoped>
  .md-field:last-child {
    margin-bottom: 40px;
  }
</style>
