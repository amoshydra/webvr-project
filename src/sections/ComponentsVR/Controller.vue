<template>
  <a-entity daydream-controls></a-entity>
</template>

<script>

const MAX_SPEED = 0.1;
let animationRequestId = null;

export default {
  props: ['value'],
  data() {
    return {
      speed: {
        x: 0,
        y: 0,
        z: 0,
      }
    };
  },
  mounted() {
    const move = () => {
      this.$emit('input', {
        x: this.value.x + this.speed.x,
        y: this.value.y + this.speed.y,
        z: this.value.z + this.speed.z,
      });
      console.log(this.speed.x, this.speed.y, this.speed.z);
      animationRequestId = window.requestAnimationFrame(move);
    };

    this.$el.addEventListener('touchstart', (event) => {
      animationRequestId = window.requestAnimationFrame(move);

    });
    this.$el.addEventListener('touchend', (event) => {
      window.cancelAnimationFrame(animationRequestId);
    });
    this.$el.addEventListener('axismove', (event) => {
      this.speed.x = MAX_SPEED * event.detail.axis[0];
      this.speed.z = MAX_SPEED * event.detail.axis[1];
    });
  },
}
</script>

