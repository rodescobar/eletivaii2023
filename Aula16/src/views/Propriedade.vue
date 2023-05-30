<template>
  <div>
    <h3>{{ titulo }}</h3>
    {{ img }}
  </div>
</template>

<script>
export default {
  name: "Propriedade",
  props: [
    'titulo',
    'img'
  ]
};
</script>
