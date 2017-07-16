<template>
  <a-entity class="interactable">
    <slot></slot>
  </a-entity>
</template>

<script>
import eventHub from '../../EventManager';

export default {
  data() {
    return {
      isIntersecting: false,
    }
  },
  mounted() {
    this.$el.addEventListener('raycaster-intersected', (event) => {
      this.isIntersecting = true;
    });
    this.$el.addEventListener('raycaster-intersected-cleared', (event) => {
      this.isIntersecting = false;
    })
    eventHub.$on('buttondown', () => {
      if (this.isIntersecting) {
        console.log('out', event);
      }
    });
  }
}
</script>

