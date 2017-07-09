<template>
  <a-entity daydream-controls></a-entity>
</template>

<script>
export default {
  props: ['value'],
  data() {
    return {
      isTouching: 0, // 0: false, 1: first touch, 2: moving
      touchStart: {
        x: 0, z: 0,
      },
      touchDiff: {
        x: 0, z: 0,
      }
    };
  },
  mounted() {
    this.$el.addEventListener('touchend', (event) => {
      this.isTouching = 0;
    });
    this.$el.addEventListener('touchstart', (event) => {
      this.isTouching = 1;
    });
    this.$el.addEventListener('axismove', (event) => {
      if (event.detail.axis[0] + event.detail.axis[1] === 0) return;

      if (this.isTouching === 1) {
        this.touchStart.x = event.detail.axis[0];
        this.touchStart.z = event.detail.axis[1];
        this.isTouching = 2;
      }

      this.touchDiff.x = event.detail.axis[0] - this.touchStart.x;
      this.touchDiff.z = event.detail.axis[1] - this.touchStart.z;

      this.$emit('input', {
        x: this.value.x + this.touchDiff.x,
        y: this.value.y,
        z: this.value.z + this.touchDiff.z,
      });

      this.touchStart.x = event.detail.axis[0];
      this.touchStart.z = event.detail.axis[1];
    });
  },
}
</script>

