// GET ALL NECESSARY FROM THE DOM
const app = document.querySelector(".weather-app")
const temp = document.querySelector(".temp")
const dateOutput = document.querySelector("date")
const timeOutput = document.querySelector(".time")
const conditionOutput = dateOutput.querySelector(".condition")
const nameOutput = document.querySelector(".name")
const icon = document.querySelector(".icon")
const cloudOutput = document.querySelector(".cloud")
const humidityOutput = document.querySelector(".humidity")
const windOutput = document.querySelector(".wind")
const form = document.querySelector(".locationInput")
const search = document.querySelector(".search")
const btn = document.querySelector(".submit")
const cities = document.querySelector(".city")

// DEFAULT CITY WHEN THE PAGE LEADS
let cityInput = "London"
