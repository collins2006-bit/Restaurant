<script setup>
const isloggedin =false
</script>

<template>
  <h1></h1>
  <v-app-bar color="#03A9F4">
    <v-app-bar-title>McTomminay</v-app-bar-title>

    <v-btn to="/">Home</v-btn>
    <v-btn to="/Menu">Menu</v-btn>
    <v-btn to="/Signup">Signup</v-btn>
    <v-btn to="/Login"else="isloggedin">Login</v-btn>
    <v-btn to="/Reservation">Reservation</v-btn>
    <v-btn to="/Orders" v-if="isloggedin">My orders</v-btn>
    <v-btn to="/Userprofile" v-if="isloggedin">Userprofile</v-btn>

    <v-avatar to="/userprofile" v-if="isloggedin">
      <span class="text-h5">A</span>
    </v-avatar>
  </v-app-bar>
</template>    
