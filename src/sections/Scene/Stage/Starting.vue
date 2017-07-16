<template>
  <a-entity>
    <a-plane position="0 0 -4" rotation="-90 0 0" width="40" height="40" color="#7BC8A4"></a-plane>

    <Interactable>
      <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
    </Interactable>

    <Interactable>
      <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
    </Interactable>

    <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
  </a-entity>
</template>

<script>
import Interactable from '../Props/Interactable';

export default {
  components: {
    Interactable,
  },
}
</script>
