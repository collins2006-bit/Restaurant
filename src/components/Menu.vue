<script setup>
const menu = {
  
  0:{
    name:`Beef Burrito recipes`,
    image:'public/images/Menu/beefburritorecipe.jpeg',
    price:750,
    description:`with cheese`,
    category: `combo`,
  },

  1:{
    name:`beefpizza`,
    image:`public/images/Menu/beefpzza.jpeg`,
    price:1300,
    description:`well sliced beef`,
    category:`pizza`,
  },

  2:{
    name:`burger`,
    image:`public/images/Menu/burger.jpeg`,
    price:930,
    description:`premium burger`,
    category:`burger`,
  },

  3:{
    name:`burger lunch box`,
    image:`public/images/Menu/burgerlunchbox.jpeg`,
    price:1200,
    description:`contains combo`,
    category:`burger`,
  },

  4:{
    name:`Burger,chips and chicken`,
    image:`public/images/Menu/Burgerxchickenplatter.jpeg`,
    price:1500,
    description:` semi combo`,
    category:`combo`,
  },

  5:{
    name:`Steet wise 1`,
    image:`public/images/Menu/chickenandfrenchfries.jpeg`,
    price:670,
    description:`includes spices`,
    category:`combo`,
  },

  6:{
    name:`Chicken Dumplings`,
    image:`public/images/Menu/Chickendumplings.jpeg`,
    price:900,
    description:`contains spices`,
    category:`chicken`,
  },

  7:{
    name:`Chicken and Burger`,
    image:`public/images/Menu/chickenxburgerxfries.jpeg`,
    price:1100,
    description:`perfect combo`,
    category:`Combo`,
  },

  8:{
    name:`copy cat recipes`,
    image:`public/images/Menu/copycatrecipes.jpeg`,
    price:900,
    description:`recipes`,
    category:`recipes`,
  },

  9:{
    name:`Crispy Aloo`,
    image:`public/images/Menu/CrispyAlooTikkiChaat.jpeg`,
    price:1000,
    description:`crispy`,
    category:`Aloo`,
  },

  10:{
    name:`Fries`,
    image:`public/images/Menu/fries.jpeg`,
    price:200,
    description:`deep fried an crispy`,
    category:``,
  },

  11:{
    name:`Korean Corn Dog`,
    image:`public/images/Menu/koreancorndog.jpeg`,
    price:300,
    description:`premium korean hot dod`,
    category:``,
  },

  12:{
    name:`Sandwich`,
    image:`public/images/Menu/Sandwich.jpeg`,
    price:500,
    description:`contains vegetable`,
    category:`sanswich`,
  },

  13:{
    name:`Steetwise 2`,
    image:`public/images/Menu/streetwise.jpeg`,
    price:1000,
    description:`Mega size street wise`,
    category:`combo`,
  },

  14:{
    name:`Yummy Chicken`,
    image:`public/images/Menu/yummychickenfryrecipe.jpeg`,
    price:700,
    description:`flavoured chicken`,
    category:`chicken`,
  }
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
              <v-card-actions>
                 <v-card-title>{{ item.price }}</v-card-title>
                <v-btn>ORDER</v-btn>
              </v-card-actions>
        </v-card>
      </v-col>
    </v-row>    
  </v-container>    
</template>   

