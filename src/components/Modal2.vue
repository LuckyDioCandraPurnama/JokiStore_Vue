<template>
  <div>
    <button type="button" class="btn btn-warning" @click="showModal = true">Banner</button>
    <p></p>
    <modal-template v-if="showModal" @close="showModal = false">
      <template #header></template>
      <template #body></template>
      <template #footer>
        <button class="btn btn-secondary btn-sm" @click="showModal = false">Tutup</button>
      </template>
    </modal-template>
  </div>
</template>

<script>
import ModalTemplate from './Modal.vue';

export default {
  components: {
    ModalTemplate,
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    submitForm() {
      // handle form submission
    },
  },
};
</script>
