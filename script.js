console.log("Script running...")
// Task 1: Intro section
// Implement the DOM manipulation code flow such that when you click the "Click for location" button, the text below says "1300 Boynton Ave (moving soon!)"
// Make sure to add whatever IDs/classes you need to select the necessary elements

let locations = document.querySelector("#location")

let p = document.querySelector("#locationText")


locations.addEventListener("click", function(event){
  p.textContent = ("1300 Boynton Ave (moving soon!)")
  
})
// Task 2: Our Values section
// Implement the DOM manipulation code flows for each of the SCORE <h3> tags such that when you click on them, the text changes to the full value
// S -> Self-awareness, C -> Consistency, O -> Ownership, R -> Resilience, E -> Excellence


let s = document.querySelector("#s")
let c = document.querySelector("#c")
let o = document.querySelector("#o")
let r = document.querySelector("#r")
let e = document.querySelector("#e")

s.addEventListener("click", function(event){
  s.textContent = ("Self-awareness")
})

c.addEventListener("click", function(event){
  c.textContent = ("Consistency")
})

o.addEventListener("click", function(event){
  o.textContent = ("Ownership")
})

r.addEventListener("click", function(event){
  r.textContent = ("Resilience")
})

e.addEventListener("click", function(event){
  e.textContent = ("Excellence")
})




// Task 3: Uniform section
// Implement the DOM manipulation code flows for each of the images such that when your mouse is over the image, it displays the back image and when it is off the image, it displayes the front image
// First image: Mouse over -> joggers-front.webp, mouse off -> joggers-back.webp
// Second image: Mouse over -> sweater-front.webp, mouse off -> sweater-back.webp

let joggers = document.querySelector("#joggers")

let sweater = document.querySelector("#sweater")

joggers.addEventListener("mouseover", function(event){
  joggers.src = "joggers-front.webp"
})

joggers.addEventListener("mouseout", function(event){
 joggers.src = "joggers-back.webp"
})

sweater.addEventListener("mouseover", function(event){
  sweater.src = "sweater-front.webp"
})

sweater.addEventListener("mouseout", function(event){
  sweater.src = "sweater-back.webp"
})


// EXTRA CREDIT
// Implement the DOM manipulation code flows for each of the SCORE <h3> tags such that when your mouse is over them, the text color changes to #3ab54b (and back to black when it is off it)


s.addEventListener("mouseover", function(event){
 s.style.color = "#3ab54b"
})

s.addEventListener("mouseout", function(event){
  s.style.color = "black"
})

c.addEventListener("mouseover", function(event){
  c.style.color = "#3ab54b"
})

c.addEventListener("mouseout", function(event){
  c.style.color = "black"
})

o.addEventListener("mouseover", function(event){
  o.style.color = "#3ab54b"
})

o.addEventListener("mouseout", function(event){
  o.style.color = "black"
})

r.addEventListener("mouseover", function(event){
  r.style.color = "#3ab54b"
})

r.addEventListener("mouseout", function(event){
  r.style.color = "black"
})

e.addEventListener("mouseover", function(event){
  e.style.color = "#3ab54b"
})

e.addEventListener("mouseout", function(event){
  e.style.color = "black"
})




