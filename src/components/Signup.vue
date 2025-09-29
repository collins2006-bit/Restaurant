<script setup>
import {ref} from'vue'

const showPassword=ref(false)
const showConfirmPassword=ref(false)

//models
const name = ref(null)
const Email = ref(null)
const PhoneNumber = ref(null)
const Deliveryadress = ref(null)
const Password = ref(null)

function Signup(){
  const SignupData={
    'name':name.value,
    'Email':Email.value,
    'PhoneNumber':PhoneNumber.value,
    'Deliveryadress':Deliveryadress.value,
    'Password':Password.value,
  }
  try {
    //save data in browser
    localStorage.setItem ("SignupData",
    JSON.stringify(SignupData),
  );
  //To do:send Data to backend
  }catch(err) {
    console.error('Reservationprocess failed',err)
  }
}

</script>

<template>
  <v-container align="center">
    <v-row>
      <v-col>
        <v-card class="pa-6" width="600" color="#03A9F4">
          <v-card-title>Sign Up</v-card-title>
          <v-text-field v-model="name" label="Name" :rules="[(v) => !!v || 'Name is required']"></v-text-field>
          <v-text-field v-model="Email" label="Email" :rules="[
                            (v) => !!v || 'Email is required',
                            (v) => /.+@.+\..+/.test(v) || 'Email must be valid',
                        ]"
                        required ></v-text-field>
             
          <v-text-field v-model="PhoneNumber" label="Phone Number" type="number"></v-text-field>
          <v-text-field v-model="Deliveryadress" label="Delivery adress" :rules="[(v) => !!v || 'Delivery Address is required']"></v-text-field>
          <v-text-field v-model="Password" label="Password" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="showPassword ? 'text' : 'password'"
                        @click:append="showPassword = !showPassword"
                        :rules="[
                            (v) => !!v || 'Password is required',
                            (v) => v.length >= 8 || 'Password must be at least 8 characters',
                        ]"
                        required></v-text-field>
             
          <v-text-field label="Confirm Password":append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="showConfirmPassword ? 'text' : 'password'"
                        @click:append="showConfirmPassword = !showConfirmPassword"
                        :rules="[
                            (v) => !!v || 'Please confirm your password',
                            (v) => v === Password || 'Passwords must match',
                        ]"
                        required></v-text-field>
          <v-card-text>
            Already registered
            <router-link to="/login">Back to login</router-link>
          </v-card-text>
          <v-card-actions>
            <v-btn color="white" variant="elevated"@click="Signup()">Sign up</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>    
