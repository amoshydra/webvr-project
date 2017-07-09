<template>
  <div>
    <vr-content></vr-content>
    <page-content></page-content>
  </div>
</template>

<script>
import VrContent from './sections/VrContent';
import PageContent from './sections/PageContent';

export default {
  components: {
    'vr-content': VrContent,
    'page-content': PageContent,
  },
}
</script>
