<template>
  <a-entity daydream-controls
            raycaster="far: 5"></a-entity>
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
      },
      isControllerMovement: false,
    };
  },
  methods: {
    moveActor() {
      /**
       * +ve: Looking right
       * -ve: Looking left
       */
      const radian = -this.camera.getAttribute('rotation').y * (Math.PI / 180);

      const cosRad = Math.cos(radian);
      const sinRad = Math.sin(radian);

      const moveX = (this.speed.x * cosRad) - (this.speed.z * sinRad);
      const moveZ = (this.speed.z * cosRad) + (this.speed.x * sinRad);

      const movementData = {
        x: this.value.x + moveX,
        y: this.value.y + this.speed.y,
        z: this.value.z + moveZ,
      };
      this.$emit('input', movementData);
      animationRequestId = window.requestAnimationFrame(this.moveActor);
    },
  },
  watch: {
    isControllerMovement(newVal, oldVal) {
      if (newVal === oldVal) return;

      if (newVal) {
        animationRequestId = window.requestAnimationFrame(this.moveActor);
      } else {
        window.cancelAnimationFrame(animationRequestId);
      }
    },
  },
  mounted() {
    /**
     * Relevant documentation on the type of events available can
     * be found here;
     * https://aframe.io/docs/0.6.0/components/laser-controls.html
     * https://aframe.io/docs/0.6.0/components/hand-controls.html
     */
    const movementController = [
      ['touchend', (event) => {
        this.isControllerMovement = false;
      }],
      ['axismove', (event) => {
        const x = event.detail.axis[0];
        const z = event.detail.axis[1];

        const distance = (x * x) + (z * z);
        this.isControllerMovement = (distance > 0.4);

        this.speed.x = MAX_SPEED * x;
        this.speed.z = MAX_SPEED * z;
      }],
    ];

    const interactionController = [
      ['buttondown', (event) => {
        console.log('buttondown');
      }],
      ['buttonup', (event) => {
        console.log('buttonup');
      }],
    ];

    [
      ...movementController,
      ...interactionController,
    ].forEach((listener) => {
      this.$el.addEventListener(...listener);
    });
  },
}
</script>

