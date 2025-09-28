<script setup>

import {useMenuStore} from '../stores/menu'
const menuStore = useMenuStore()
const menuitem = menuStore.selectedMenuItem
</script>

<template>
  <v-container fluid class="d-flex fill-height">
    <v-row>
      <v-col md="6">
         <v-card class="pa-6 rounded-lg" justify="center"><v-img :src="menuitem.image" cover height="500">
         </v-img></v-card>
      </v-col>
      <v-col md="6">
        <v-card class="pa-6 rounded-lg" justify="center">
          <v-card-title>{{ menuitem.name }}</v-card-title>
          <v-card-subtitle>{{ menuitem.price }}</v-card-subtitle>
          <v-card-text>{{ menuitem.description }}</v-card-text>
          <v-card-text>{{ Quantity }}<v-text-field></v-text-field></v-card-text>

         <v-row>
          <v-col md="2">Quantity</v-col>
          <v-col md="4">
            <v-number-input
              control-variant="split"
              density="compact"
              :min="1"
              :max="10">
            </v-number-input>
          
          </v-col>
         </v-row>
          <v-card-actions>
            <v-btn background-color="#03A9F4" >ORDER</v-btn>
          </v-card-actions>
        </v-card>
        <v-card clss="pa-6 mt-3 rounded-lg">
          <v-card-title>Reviews</v-card-title>
            <v-rating
                        hover 
                        :length="5" 
                        :size="40"
                        :model-value="5"
                        active-color="#03A9F4">

                        </v-rating>
        </v-card>

      </v-col>
    </v-row>
  </v-container>
</template>    
