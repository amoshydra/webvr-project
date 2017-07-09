<template>
  <a-entity daydream-controls></a-entity>
</template>

<script>

const MAX_SPEED = 0.1;
let animationRequestId = null;

export default {
  props: ['value', 'camera'],
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
      const radian = this.camera.getAttribute('rotation').y * (Math.PI / 180);

      const cosRad = Math.cos(radian);
      const sinRad = Math.sin(radian);

      const moveX = (this.speed.x * cosRad) + (this.speed.z * sinRad);
      const moveZ = (this.speed.z * cosRad) + (this.speed.x * sinRad);

      this.$emit('input', {
        x: this.value.x + moveX,
        y: this.value.y + this.speed.y,
        z: this.value.z + moveZ,
      });
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

