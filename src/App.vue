<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>DEMO</span>
        <span class="font-weight-light">VUETIFY EASY CRUD</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat href="https://github.com/tomasmigone/vuetify-easy-crud" target="_blank">
        <span class="mr-2">See repo on GitHub</span>
        <v-icon>open_in_new</v-icon>
      </v-btn>
    </v-toolbar>

    <v-content>
      <vec-table
        :title="'This are some good players '"
        :items="players"
        :headers="tableHeaders"
        @add-item="addPlayer"
        @update-item="updatePlayer"
        @delete-item="deletePlayer"
      >
        <template v-slot:list-view="props">
          <list-view :item="props.item"></list-view>
        </template>
        <template v-slot:create-form="props">
          <create-form></create-form>
        </template>
        <template v-slot:update-form="props">
          <update-form :item="props.item"></update-form>
        </template>
      </vec-table>
    </v-content>
  </v-app>
</template>

<script>
import ListView from '@/components/ListView.vue'
import CreateForm from '@/components/CreateForm.vue'
import UpdateForm from '@/components/UpdateForm.vue'

export default {
  name: 'app',
  components: { ListView, CreateForm, UpdateForm },
  data: () => {
    return {
      tableHeaders: [
        { text: 'Name', value: 'name' },
        'Surname (not searchable)',
        { text: 'Age', value: 'age', sortable: true },
        { text: 'Country', value: 'country' },
        { text: 'Club', value: 'club', sortable: true }
      ],
      players: [
        { id: 0, name: 'Lionel', surname: 'Messi', age: 32, country: 'Argentina', club: 'Barcelona' },
        { id: 1, name: 'Cristiano', surname: 'Ronaldo', age: 34, country: 'Portugal', club: 'Juventus' },
        { id: 2, name: 'Ramiro', surname: 'Funes Mori', age: 28, country: 'Argentina', club: 'Villareal' }
      ]
    }
  },
  methods: {
    addPlayer: function (player) {
      player.id = this.players.length
      this.players.push(player)
    },
    updatePlayer: function (player) {
      this.players = this.players.map(i => i.id === player.id ? player : i)
    },
    deletePlayer: function (player) {
      this.players = this.players.filter(i => i.id !== player.id)
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
