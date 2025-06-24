<script setup>
import {ref} from 'vue'
const events=ref([
    {
    name:"Community Outreach at Northern Kenya",
    image:" ../../public/images/eventsimages/nico-smit-NFoerQuvzrs-unsplash.jpg",
    date:"July 7th 2025",
    location:"Northern Kenya Academy",
    category:"Community Outreach"
    },
  {
    name:"Sports",
    image:"../../public/images/eventsimages/benjamin-hershey-qegSxvH9U9Y-unsplash.jpg",
    date:"January 21st 2025",
    location:"Ulinzi Sports Cente Nairobi",
    category:"Health Exercises"
    },
    {
    name:"Cooking",
    image:"../../public/images/eventsimages/nadine-primeau--bLkT8wGV0I-unsplash.jpg",
    date:"June 22nd 2025",
    location:"Nairobi Primary School",
    category:"Hospitality"
    },
    {
    name:"Hackathon",
    image:"../../public/images/eventsimages/safar-safarov-koOdUvfGr4c-unsplash.jpg",
    date:"November 24th 2025",
    location:"Meru University",
    category:"Coding"
    }  
])
</script>
<template>
    <v-container>
        <v-row>
            <v-col md="4" v-for="event in events" :key="event">
    <v-card 
    class="mx-auto"
    max-width="400"
    color = "black"
  >
    <v-img
      class="align-end text-white"
      height="200"
      :src="event.image"
      cover
    >
      <v-card-title>{{ event.name }}</v-card-title>
    </v-img>

    <v-card-subtitle class="pt-4">
      {{ event.date }}
    </v-card-subtitle>

    <v-card-text>
      <div>{{ event.location }}</div>

      
    </v-card-text>

    <v-card-actions>
      <v-btn color="orange" :text="event.category"></v-btn>

     
    </v-card-actions>
  </v-card>
  </v-col>
 </v-row>
</v-container>
    </template>