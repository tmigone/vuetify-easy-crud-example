<template>
  <vec-fragment>
    <td>{{ item.name }}</td>
    <td>{{ item.surname.toUpperCase() }}</td>
    <td>{{ item.age }}</td>
    <td><b>{{ item.country }}</b></td>
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
