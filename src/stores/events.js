import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useeventsStore = defineStore('events', () => {
const events =ref([
    {
        name: "Community outreach at Northern Kenya",
        image:"../../public/images/nico-smit-NFoerQuvzrs-unsplash.jpg",
        date:"July 6th 2025",
        location:"North Kenya National School",
        category: "Community outreach"
    },

      {
        name: "Annual Inter-School Sports",
        image: "../../public/images/benjamin-hershey-qegSxvH9U9Y-unsplash.jpg",
        date: "July 12th 2025",
        location: "Ulinzi Sports Complex",
        category: "Sports Competition"
    },

      {
       name: "Tree Planting Initiative for Green Campus",
       image: "../../public/images/nadine-primeau--bLkT8wGV0I-unsplash.jpg",
       date: "July 19th 2025",
       location: "School Botanical Garden",
       category: "Environmental Action"
    },

      {
      name: "Career Fair & Mentorship Day",
      image: "../../public/images/andrey-zvyagintsev-Eyg5Z7ARjWk-unsplash (1).jpg",
      date: "July 25th 2025",
      location: " Multipurpose Hall",
      category: "Career Development"
    },



])

  return { events }
})
