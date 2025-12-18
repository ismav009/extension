
let myLeads = [];
let oldLeads = [];
const save_el = document.getElementById("save-btn");
const input_el = document.getElementById("input-el");
const ul_el = document.getElementById("ul_El");

let delete_el = document.getElementById("delete-btn");
let tab_el = document.getElementById("tab-btn");
let old_el = document.getElementById("old-btn");



const leadsfromLocalstorage = JSON.parse(localStorage.getItem("myLeads"))// get leads from local storage
// console.log(leadsfromLocalstorage);


// const tabs = [
//   {url: "https://www.linkedin.com/in/vamsi-krishna"}
// ]

tab_el.addEventListener("click", function() {
   chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
      myLeads.push(tabs[0].id);
      localStorage.setItem("myLeads", JSON.stringify(myLeads));
      render(myLeads);
   });
});

save_el.addEventListener("click", function() {
   myLeads.push(input_el.value);
   // ul_el.innerHTML += "<li>" + input_el.value + "</li>";

   localStorage.setItem("myLeads", JSON.stringify(myLeads));
   console.log( localStorage.getItem("myLeads"));
   render(myLeads);
   
   input_el.value = "";

})

if (leadsfromLocalstorage) {
   myLeads = leadsfromLocalstorage;
   render(myLeads);
}

function render(leads) {
   let listItems = "";
   for (let i = 0; i < leads.length; i++) {


   listItems += `
   <li>
     <a target="_blank" href="${leads[i]}">
      ${leads[i]}
     </a>
    </li>;
   `
  }
ul_el.innerHTML = listItems;
}


delete_el.addEventListener("dblclick", function() {
   oldLeads = myLeads;
   localStorage.clear();
   myLeads = [];
   render(myLeads);
});

old_el.addEventListener("click", function() {
   render(oldLeads);
});



   // const li = document.createElement("li");
   // li.textContent = myLeads[i];
   // ul_el.appendChild(li);


/*
 function renderLead() {
 let listitem = "<li>" + input_el.value + "</li>";
 ul_el.innerHTML += listitem;
}

*/


// falsy values: 0, "", null(how you as a developer ignalizes emptiness), undefined(how javascript signalizes emptiness), NaN, false


const dict = [
  {"largest countries": "[china, india, usa]"}
]

function generateSentence(desc, arr) {
   let sentence = `The ${arr.length} ${desc} are `;
   for (let i = 0; i < arr.length; i++) {
      sentence += arr[i];
      if (i < arr.length - 1) {
         sentence += ", ";
      }
   }
   return sentence;
}

console.log(generateSentence(dict[0]));

