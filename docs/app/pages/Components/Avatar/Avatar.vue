<example src="./examples/Regular.vue" />
<example src="./examples/Sizes.vue" />
<example src="./examples/Placeholder.vue" />
<example src="./examples/Full.vue" />
<example src="./examples/Squared.vue" />



<template>
  <page-container centered :title="$t('pages.avatar.title')">
    <div class="page-container-section">
      <p>Avatars can be used to represent people. When used with a specific logo, avatars can also be used to represent a brand. They also can be a placeholder when there is no image to be shown, showing a initial letter of a name on contacts that have no picture yet, for example.</p>
    </div>

    <div class="page-container-section">
      <h2 id="avatar">Avatar</h2>

      <p>
        Avatars can show a single image by default but can also display an icon (using the
        <code>md-icon</code> component):
      </p>
      <code-example title="Default" :component="examples['regular']" />
      <api-item title="API - md-avatar">
        <p>The following option can be applied to any avatar:</p>

        <api-table :headings="regular.headings" :props="regular.props" slot="classes" />
      </api-item>
    </div>

    <div class="page-container-section">
      <h2 id="initial">Initial letter as a placeholder</h2>

      <p>Let's assume that you want to show a list of contacts, but some of them do not have a picture in your database. You can use the initial letter of the contact name as a placeholder. It can even show 2 letters (for compound names) without problems:</p>
      <code-example title="Placeholder" :component="examples['placeholder']" />
    </div>

    <div class="page-container-section">
      <h2 id="multipleSizes">Multiple sizes</h2>

      <p>You can specify three different sizes, if you want: Regular, Small or Large. By default the avatar have a regular size.</p>
      <code-example title="Sizes" :component="examples['sizes']" />
      <api-item title="API - md-avatar">
        <p>The following options will change the size of a avatar:</p>

        <api-table :headings="sizes.headings" :props="sizes.props" slot="classes" />
      </api-item>
    </div>

       <div class="page-container-section">
      <h2 id="squared">Squared</h2>

      <p>You can specify three different sizes, if you want: Regular, Small or Large. By default the avatar have a regular size.</p>
      <code-example title="Squared" :component="examples['squared']" />
      <api-item title="API - md-avatar">
        <p>The following options will change the size of a avatar:</p>

        <api-table :headings="squared.headings" :props="squared.props" slot="classes" />
      </api-item>
    </div>

    <div class="page-container-section">
      <h2 id="Full">Complete</h2>

      <p>You can specify three different sizes, if you want: Regular, Small or Large. By default the avatar have a regular size.</p>
      <code-example title="Full" :component="examples['full']" />
      <api-item title="API - md-avatar">
        <p>The following options will change the size of a avatar:</p>

        <api-table :headings="sizes.headings" :props="sizes.props" slot="classes" />
      </api-item>
    </div>
  </page-container>
</template>

<script>
import examples from "docs-mixins/docsExample";

export default {
  name: "DocAvatar",
  mixins: [examples],
  data: () => ({
    regular: {
      headings: ["Name", "Description"],
      props: [
        {
          name: "md-avatar-icon",
          description: "Creates a avatar that can show a icon.",
        },
      ],
    },
    sizes: {
      headings: ["Name", "Description"],
      props: [
        {
          name: "md-small",
          description:
            "Makes a small avatar, changing the size of image, icon or text.",
        },
        {
          name: "md-large",
          description:
            "Makes a large avatar. Commonly used as the current user avatar inside a left md-drawer.",
        },
      ],
    },
    squared: {
      headings: ["Name", "Description"],
      props: [
        {
          name: "md-small",
          description:
            "Makes a small avatar, changing the size of image, icon or text.",
        },
        {
          name: "md-large",
          description:
            "Makes a large avatar. Commonly used as the current user avatar inside a left md-drawer.",
        },
        {
          name: "md-border",
          description:
            "Makes the avatar square. with border-radius 3px.",
        },
      ],
    },
    mdavatarMedia: {
      props: {
        headings: ["Name", "Description", "Default"],
        props: [
          {
            name: "md-ratio",
            type: "String",
            description:
              "Resizes or clip the image automatically based on the following options: 1:1 or 1/1, 4:3 or 4/3 and 16:9 or 16/9.",
            defaults: "null",
          },
          {
            name: "md-medium",
            type: "Boolean",
            description:
              "Applies medium size to the media. Works only inside md-avatar-header.",
            defaults: "false",
          },
          {
            name: "md-big",
            type: "Boolean",
            description:
              "Applies big size to the media. Works only inside md-avatar-header.",
            defaults: "false",
          },
        ],
      },
    },
  }),
};
</script>
