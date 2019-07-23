<template>
  <v-card>
    <!-- TITLE -->
    <v-card-title>
      <span class="headline">Add new awesome player</span>
    </v-card-title>

    <!-- FORM -->
    <v-card-text>
      <v-form>
        <v-container>
          <v-layout>
            <v-flex xs12 md4>
              <v-text-field v-model="editableItem.name" label="First name"></v-text-field>
            </v-flex>

            <v-flex xs12 md4>
              <v-text-field v-model="editableItem.surname" label="Surname"></v-text-field>
            </v-flex>

            <v-flex xs12 md4>
              <v-text-field v-model="editableItem.age" type="number" label="Age"></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs12 md6>
              <v-text-field v-model="editableItem.country" label="Country"></v-text-field>
            </v-flex>

            <v-flex xs12 md6>
              <v-text-field v-model="editableItem.club" label="Club"></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
      </v-form>
    </v-card-text>

    <!-- FORM ACTIONS -->
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" flat @click.prevent="exit">Close</v-btn>
      <v-btn color="blue darken-1" flat @click.prevent="createAndExit">Save</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
// import { VecFormMixin } from '@tmigone/vuetify-easy-crud'
import { VecFormMixin } from '../../../vuetify-easy-crud/dist/vuetify-easy-crud.common.js'


export default {
  mixins: [ VecFormMixin ]
}
</script>
