<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      max-width="350"
    >
        <img :src="image" alt="" class="w-100 h-100">
    </v-dialog>
  </v-row>
</template>

<script>
export default {
    name: 'Lightbox',
    props: ['dialog', 'image']
}
</script>