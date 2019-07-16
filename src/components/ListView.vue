<template>
  <vec-fragment>
    <td>{{ item.name }}</td>
    <td>{{ item.surname }}</td>
    <td>{{ item.age }}</td>
    <td>{{ item.country }}</td>
    <td>{{ item.club }}</td>
  </vec-fragment>
</template>

<script>
export default {
  props: {
    item: { type: Object, required: true, default: () => { } }
  }
}
</script>
