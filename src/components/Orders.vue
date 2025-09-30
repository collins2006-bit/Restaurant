<script setup>
    const orders=JSON.parse(localStorage.getItem("order"))
</script>

<template>
  <v-container align center>
    <v-row>
      <v-col v-for="item in orders" :key="item">
        <v-row>
          <v-col md="4">
            <v-card class="pa-6 rounded-lg" justify="center">
                    <v-img :src="item.menuItem.image" cover height="200" width="200"></v-img>
                </v-card>
          </v-col>
          <v-col>
            <v-card class="pa-6 rounded-lg">
               <v-card-text>{{ item.menuItem.name}}</v-card-text>
               <v-card-subtitle>{{ item.quantity }}</v-card-subtitle>
               <v-card-title>Total{{ item.quantity * item.menuItem.price}}</v-card-title>
               <v-card-actions>
                <v-btn color="#03A9F4" variant="elevated">Remove</v-btn>
               </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>    
