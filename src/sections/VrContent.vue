<template>
  <a-scene>
    <Stage></Stage>
    <Background></Background>
    <Actor></Actor>
  </a-scene>
</template>

<script>
import Actor from './ComponentsVR/Actor'
import Stage from './Scene/Stage/Starting'
import Background from './Scene/Background'

export default {
  components: {
    Actor,
    Stage,
    Background,
  },
}
</script>


<style>
a-scene {
  position: static;
}
</style>
