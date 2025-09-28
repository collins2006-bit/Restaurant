<script setup>

import {useMenuStore} from '../stores/menu'
import {useRouter} from"vue-router";

const router=useRouter();
const menustore= useMenuStore()
const menu= menustore.menu
  
  function view(menu){
    menustore.updateSelectedMenuItem(menu)
    router.push('/menuitem')
  }
</script>
 
<template>
  <h1>menu</h1>

  <v-container>
    <v-row>
      <v-col md="3" v-for="item in menu" :key="item">
        <v-card color="#03A9F4">
          <v-img :src="item.image"class="align-end text-white" height="300px" cover></v-img>
          <v-row>
            <v-col md="6">
              <v-card-title>{{ item.name }}</v-card-title>
            </v-col>
            <v-col md="6">
              <v-chip>{{ item.category }}</v-chip>
            </v-col>
          </v-row>    
              
              <v-card-subtitle>{{ item.description }}</v-card-subtitle>
              <v-card-title>{{ item.price }}</v-card-title>
              
              <v-card-actions>
                <v-btn @click="view(item)">view</v-btn>
                <v-btn>ORDER</v-btn>
              </v-card-actions>
        </v-card>
      </v-col>
    </v-row>    
  </v-container>    
</template>   

