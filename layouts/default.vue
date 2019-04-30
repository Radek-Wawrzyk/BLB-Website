<template>
  <div>
    <navigation />
    <nuxt />
  </div>
</template>

<script>

import Navigation from '@/components/Navigation/Navigation';

export default {
  name: 'DefaultLayout',
  components: { 
    Navigation
  }
};

</script>
