<script setup>

</script>
<template>
  <!-- rotating images -->
    <v-carousel>
  <v-carousel-item
    src="../../public/images/andrey-zvyagintsev-Eyg5Z7ARjWk-unsplash (3).jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="../../public/images/erika-fletcher-2Z0yN0Dhomw-unsplash.jpg"
    cover
 ></v-carousel-item>

  <v-carousel-item
    src="../../public/images/trnava-university-k8XfWMG-a0U-unsplash.jpg"
    cover
  ></v-carousel-item>
  <v-carousel-item
    src="../../public/images/dhiraj-chouhan-_1c5jIwOFUY-unsplash.jpg"
    cover
  ></v-carousel-item>
</v-carousel>

<!-- latest from jitegemee -->

  <v-container>
 <v-row>
    <v-col cols="12" md="4">
      <v-card
        subtitle="This is a card subtitle"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!"
        title="This is a title"
      ></v-card>

      <div class="text-center text-caption">Using Props Only</div>
    </v-col>

    <v-col cols="12" md="4">
      <v-card>
        <template v-slot:title>
          This is a title
        </template>

        <template v-slot:subtitle>
          This is a card subtitle
        </template>

        <template v-slot:text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!
        </template>
      </v-card>

      <div class="text-center text-caption">Using Slots Only</div>
    </v-col>

    <v-col cols="12" md="4">
      <v-card>
        <v-card-item>
          <v-card-title>This is a title</v-card-title>

          <v-card-subtitle>This is a card subtitle</v-card-subtitle>
        </v-card-item>

        <v-card-text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!
        </v-card-text>
      </v-card>

      <div class="text-center text-caption">Using Markup Only</div>
    </v-col>
  </v-row>
   
  </v-container>
  <!-- partners -->

   <v-container>
   <v-row>
    <v-col cols="12" md="2"> 
      <v-img src="../../public/images/safaricom-logo-green.png"></v-img>
    </v-col>
    <v-col cols="12" md="2">
      <v-img src="../../public/images/skyworth.png"></v-img>
    </v-col>
    <v-col cols="12" md="2">
      <v-img src="../../public/images/oraimo.png"></v-img>
    </v-col>
    <v-col cols="12" md="2">
      <v-img src="../../public/images/Hisia-Company-Logo-AI-File-Rectified-03-2.png"></v-img>
    </v-col>
    <v-col cols="12" md="2">
      <v-img src="../../public/images/wikipedia-wordmark-en.svg"></v-img>
    </v-col>
    <v-col cols="12" md="2">
      <v-img src="../../public/images/safaricom-logo-green.png"></v-img>
    </v-col>
  </v-row>
   </v-container>
</template>