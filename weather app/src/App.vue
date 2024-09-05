<template>
  <div class="min-h-screen flex justify-center items-center">
    <img src="https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="absolute top-0 left-0 w-full h-full -z-10" alt="">
    <div class="bg-cover bg-center p-6 max-w-md mx-auto rounded-xl overflow-hidden md:max-w-2xl flex gap-4 flex-col md:flex-row justify-center items-center">
      <div v-if="weatherData" class="bg-orange-100 p-4 rounded-xl shadow-md text-center h-full">
        <div class="text-xl font-semibold text-orange-600">Today</div>
        <div class="flex justify-center items-center space-x-2 text-orange-600 mt-2">
          <span class="text-6xl font-bold">{{ weatherData.temperature }}°</span>
          <span class="text-lg font-medium">{{ weatherData.description }}</span>
        </div>
        <div class="text-sm text-orange-500 mt-2">
          {{ weatherData.city }}, {{ weatherData.date }}
        </div>
      </div>
      <div v-if="weatherData">
        <div class="bg-white bg-opacity-50 p-4 mt-4 rounded-xl shadow-md">
          <div class="flex justify-between items-center text-gray-800 text-xs font-semibold">
            <div class="flex flex-col items-center">
              <span>Now</span>
              <span>25° 🌤</span>
            </div>
            <div class="flex flex-col items-center">
              <span>2 AM</span>
              <span>25° 🌤</span>
            </div>
            <div class="flex flex-col items-center">
              <span>3 AM</span>
              <span>23° 🌥</span>
            </div>
            <div class="flex flex-col items-center">
              <span>4 AM</span>
              <span>22° 🌥</span>
            </div>
            <div class="flex flex-col items-center">
              <span>5 AM</span>
              <span>20° 🌥</span>
            </div>
          </div>
        </div>

        <div class="bg-white bg-opacity-50 p-4 mt-4 rounded-xl shadow-md text-gray-700">
          <h2 class="text-lg font-bold">Random Text</h2>
          <p class="text-sm mt-2">
            Improve him believe opinion offered met and end cheered forbade.
            Friendly as stronger speedily by recurred. Son interest wandered sir
            addition end say. Manners beloved affixed picture men ask.
          </p>
        </div>
      </div>
      
    </div>
  </div>
</template>


<script>

import { fetchWeatherData } from "@/services/weatherService";

export default {
  data() {
    return {
      weatherData: null,
      city: "Los Angeles",
      from: "2024-09-01",
      to: "2024-09-02",
    };
  },
  async created() {
    try {
      this.weatherData = await fetchWeatherData(this.city, this.from, this.to);
    } catch (error) {
      console.error("Failed to fetch weather data:", error);
    }
  },
};

</script>
