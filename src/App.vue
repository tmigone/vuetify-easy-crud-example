<template>
  <v-app>
    <!-- Toolbar -->
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>DEMO</span>
        <span class="font-weight-light">VUETIFY EASY CRUD</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat href="https://github.com/tomasmigone/vuetify-easy-crud" target="_blank">
        <span class="mr-2">GitHub</span>
        <v-icon>open_in_new</v-icon>
      </v-btn>
    </v-toolbar>

    <!-- Content -->
    <v-content>
      <!-- VecTable -->
      <vec-table
        title="vec-table"
        :items="players"
        :headers="vecHeaders"
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

      <!-- VexTable -->
      <vex-table module="players" title="vex-table" :headers="vexHeaders">
        <template v-slot:create-form="props">
          <create-form></create-form>
        </template>
        <template v-slot:update-form="props">
          <update-form :item="props.item"></update-form>
        </template>
      </vex-table>

      <!-- VefTable -->
      <vef-table module="playersFirestore" title="vef-table" :headers="vexHeaders">
        <template v-slot:create-form="props">
          <create-form></create-form>
        </template>
        <template v-slot:update-form="props">
          <update-form :item="props.item"></update-form>
        </template>
      </vef-table>


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
      vecHeaders: [
        { text: 'Name', value: 'name' },
        'Surname (not searchable)',
        { text: 'Age', value: 'age', sortable: true },
        { text: 'Country', value: 'country' },
        { text: 'Club', value: 'club', sortable: true }
      ],
      vexHeaders: [
        { text: 'ID', value: 'id' },
        { text: 'Name', value: 'name' },
        'Surname (not shown)',
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
