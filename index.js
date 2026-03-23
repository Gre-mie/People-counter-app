// document.getElementById("count-el").innerText = 10

// console.log(count)

let countEl = document.getElementById("count-el")
let count = 0

function increment() {
  count++
  //console.log("count: ", count)
  //document.getElementById("count-el").innerText = count
  countEl.innerText = count
}

function save() {
  document.getElementById("enteries").innerText += ` ${count} -`
  count = 0
  countEl.innerText = count
  
}

// TEST: test area vvv



// TEST: test area ^^^

