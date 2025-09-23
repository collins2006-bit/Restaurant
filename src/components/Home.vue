<script setup>

</script>

<template>
  <!-- Caroulsel -->
   <v-container>
     <v-row>
      <v-carousel>
        <v-carousel-item src="public/images/concepofpizza.jpeg"></v-carousel-item>
        <v-carousel-item src="public/images/Cow Burger 🍔🍟.jpeg"></v-carousel-item>
        <v-carousel-item src="/public/images/Nutrition Burger.jpeg"></v-carousel-item>
        <v-carousel-item src="/public/images/table random.jpeg"></v-carousel-item>
      </v-carousel>
    </v-row>
  </v-container>

  <!-- about -->
  <v-container>
    <v-row>
      <v-card align="center">
        <p class="text-h4"><b>Welcome to McTomminay Fast food</b></p>
        <p class="text h6">Get the 100Ksh Sausage McMuffin® with Egg Meal for a limited time. Or try other AM go-tos like a Sausage, Egg & Cheese McGriddles® Meal plus more with Hash Browns and a small coffee. Not feeling breakfast? Enjoy an 800Ksh Big Mac® Meal for a limited time. Plus, pick from other favorites like a Quarter Pounder®^ with Cheese Meal, 10 piece McNuggets® Meal or McCrispy® Meal with a medium Fries and soft drink.</p>
        <p clsss="text h6">Strike sweet, smoky and tangy gold in the new Special Edition Gold Snack Wrap®, Bacon Special Edition Gold McCrispy® and even McCrispy ™ Strips dipped in the South Nairobi BBQ-inspired sauce—now for a limited time.*</p>
        <p clsss="text h6">Satisfy your cravings—when & where you want From our store to your door, order online and get your favorite subs delivered right to you.</p>
      </v-card>
    </v-row>
  </v-container>

  <!--News  -->
  <v-container>
    <v-row>
      <v-col md="4">
        <v-card color="#03A9F4">
          <v-img src="/public/images/McDonald's Earnings Dip_ Stock Price Falls.jpeg" class="align-end text-white" height="300px" cover>
          </v-img>
          <v-card-title> Coming soon</v-card-title>
          <v-card-subtitle>New Branch to be opened</v-card-subtitle>
          <v-card-actions>
            <v-btn> Read more</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col md="4">
        <v-card color="#03A9F4">
          <v-img src="public/images/All new_ Berlin Designer Outlet.jpeg " class="align-end text-white" height="300px" cover>
          </v-img>
          <v-card-title> Premier Friday</v-card-title>
          <v-card-subtitle>Get your favorite meals and snacks at 40% discount in fridays</v-card-subtitle>
          <v-card-actions>
            <v-btn> Read more</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col md="4">
        <v-card color="#03A9F4">
          <v-img src="public/images/Restaurant Table Tent Design💥💥 I'm available for….jpeg" class="align-end text-white" height="300px" cover>
          </v-img>
          <v-card-title> Special Menu</v-card-title>
          <v-card-subtitle>Ask for your favorite unique food from the golden special menu</v-card-subtitle>
          <v-card-actions>
            <v-btn> Read more</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      
    </v-row>
  </v-container>

  <!-- Footer -->
  <v-container>
    <v-row>
      <v-footer class="text-center d-flex flex-column ga-2 py-4" color="#03A9F4">
                <div class="d-flex ga-3">
                <v-btn icon="'mdi-facebook'" density="comfortable" variant="text" ></v-btn>
                <v-btn icon="'mdi-twitter'" density="comfortable" variant="text" ></v-btn>
                <v-btn icon="'mdi-linkepurple-lighten-1din'" density="comfortable" variant="text" ></v-btn>
                <v-btn icon="'mdi-instagram'" density="comfortable" variant="text" ></v-btn>
                </div>

                <v-divider class="my-2" thickness="2" width="50"></v-divider>

                <div class="text-caption font-weight-regular opacity-60">
                Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </div>

                <v-divider></v-divider>

                <div>
                {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
                </div>
            </v-footer>
    </v-row>
  </v-container>
</template>    
