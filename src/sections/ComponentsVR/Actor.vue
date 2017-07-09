<template>
  <a-entity>
    <a-entity 
      camera="userHeight: 1.6"
      look-controls
      :position="positionAttribute">
    </a-entity>
    <Controller v-model="position"></Controller>
  </a-entity>
</template>

<script>
import Controller from './Controller'
export default {
  components: {
    Controller
  },
  data() {
    return {
      position: {
        x: 0,
        y: 1.6,
        z: 0,
      }
    }
  },
  computed: {
    positionAttribute() {
      return `${this.position.x} ${this.position.y} ${this.position.z}`;
    },
  },
}
</script>
