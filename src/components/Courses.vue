<script setup>
import {ref} from 'vue'
const courses= ref([
    {
        name:"Computer Science",
        school:" SCI",
        description:" Best course for computer enthusiasts",
        intake:"July 2025"
    },
    {
    name:"Medicine",
        school:"School of Health Science",
        description:"Best course for learning about health",
        intake:"Sep 2025"
    },
    {
        name:"BBIT",
        school:"SCI",
        description:" BEST for IT course",
        intake:"May 2025"
    },
    {
        name:"BIT",
        school:"SCI",
        description:"Best for ICT",
        intake:"January 2025"
    },
    {
name:"Education",
        school:"BED",
        description:"Best for teaching courses",
        intanke:"Sep 2025"
    },
   {
name:"Journalism",
        school:"BED",
        description:"Best for media courses",
        intake:"Sep 2025"
    },  
     {
name:"Clinical medicine",
        school:"BED",
        description:"Best for health courses",
        intake:"Sep 2025"
    },
  {
name:"Engineering",
        school:"BED",
        description:"Best for engineering courses",
        intake:"Sep 2025"
    },   
   {
name:"pyscologogy",
        school:"BED",
        description:"Best for health courses",
        intake:"Sep 2025"
    },  
 {
name:"Animal Health",
        school:"BED",
        description:"Best for vetinary courses",
        intake:"Sep 2025"
    },
])
</script>

<template>
   <v-container>
   </v-container>
    <v-row>

    
        <v-col md="6" v-for="course in courses">
             <v-card color = "purple">
        <v-card-item>
          <v-card-title>{{course.name}}</v-card-title>

          <v-card-subtitle>{{course.school}}</v-card-subtitle>
        </v-card-item>

        <v-card-text>
        {{course.description}}
        </v-card-text>
        <v-card-text>
            {{ course.intake }}
        </v-card-text>
      </v-card>

        </v-col>
        </v-row>

</template>