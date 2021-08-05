$(document).ready(function(){

const api = `https://api.covid19api.com/summary`;
$.get(api,data=>{
    const {TotalConfirmed,NewConfirmed,TotalDeaths,TotalRecovered} = data.Global;
  document.getElementById("tc").innerHTML = `${TotalConfirmed}`
    document.getElementById("nc").innerHTML = `${NewConfirmed}`
    document.getElementById("td").innerHTML = `${TotalDeaths}`
    document.getElementById("tr").innerHTML = `${TotalRecovered}`  
})

$("#reload").on("click",()=>{
    window.location.reload();
})



});