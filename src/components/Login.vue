<script setup>

import {ref} from'vue'
import{useRouter} from "vue-router"

const router= useRouter();
const showPassword=ref(false)

//models
const Email = ref(null)
const Password = ref(null)

function login(){
    try {
        //get user data
        let user = JSON.parse(localStorage.getItem( "SignupData"));
       
        //check user details
        if(Email.value == user.Email && Password.value == user.Password){
            localStorage.setItem( "isLoggedIn", true );
            router.push('/')

        }else{
            console.log("Invalid credentials")
        }

        // To Do: send data to backend
    } catch (err) {
        console.error('Sign up process failed', err)
    }

}

</script>

<template>
  <v-container align="center">
    <v-row>
      <v-col>
        <v-card class="pa-6" width="600" color="#03A9F4">
          <v-card-title>Login</v-card-title>
          <v-text-field v-model="Email" label="Email" :rules="[
                            (v) => !!v || 'Email is required',
                            (v) => /.+@.+\..+/.test(v) || 'Email must be valid',
                        ]"
                        required ></v-text-field>
      
          <v-text-field v-model="Password" label="Password" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="showPassword ? 'text' : 'password'"
                        @click:append="showPassword = !showPassword"
                        :rules="[
                            (v) => !!v || 'Password is required',
                            (v) => v.length >= 8 || 'Password must be at least 8 characters',
                        ]"
                        required></v-text-field>
             
          
          <v-card-text>
            Dont have an account
            <router-link to="/Signup">Signup</router-link>
          </v-card-text>
          <v-card-actions>
            <v-btn color="white" variant="elevated"@click="login()">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>    
