<template>
  <div></div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },

    head () {
      return {
        htmlAttrs: {
          lang: 'en',
          'data-wf-page': '',
          'data-wf-site': ''
        },
        title: this.title,
        meta: [...this.meta]
      }
    },

    computed: {
      meta () {
        return this.mxMetaUtils({
          title: this.title,
          description: this.description
        })
      },

      description () {
         return this.mxDescription
      },

      title () {
        return 'Nuxt SSR Boilerplate'
      }
    },

    mounted () {
      this.$nextTick(() => {
        this.$initWebflow()
      })
    },

    methods: {

    }
  }

</script>
