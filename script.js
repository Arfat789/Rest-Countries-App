const api = 'https://restcountries.com/v3.1/all';
const mainContainer = document.querySelector('.country-container')
const openRegion = document.querySelector('.open-region')
const input = document.querySelector('input')
const rgnText = document.querySelector('.rgn-text')

 async function  fetchData (){
    const data = await fetch(api)
    const mainData = await data.json()
    console.log(mainData[0].name.common)
    return mainData;
}
let selectedRegion = '';



async function bindData(){

const fetchedData = await fetchData()
let data = []


for(item of fetchedData){//this is to put the into the array named data
    data.push(item)
}


mainContainer.innerHTML = ''


let mainList = data;

var isSelected = false;



secondList  =mainList;
 if(selectedRegion === 'All'){
    secondList == mainList;   
}
else if(selectedRegion !== ''){
    secondList = mainList.filter(item =>{
        return item.region === selectedRegion ||
        item.name.common.toString().substring(0,selectedRegion.length).toUpperCase() === selectedRegion.toUpperCase();
    })
   
}

secondList.forEach(item =>{
    console.log(item.region)
})



secondList.forEach(item =>{
    const theCountryBox = document.createElement('div')
    theCountryBox.classList.add('country-box')
    theCountryBox.innerHTML =  `
              <img src="${item.flags.png}" alt="">
                <h2>${item.name.common}</h2>
                <div class="main-detail">
                    <p><span class="bold">Populaton: </span>${item.population}</p>
                    <p><span class="bold">Region: </span>${item.region}</p>
                    <p><span class="bold">Capital: </span>${item.capital}</p>
                </div>
    `;
    
    
    mainContainer.appendChild(theCountryBox)
    const theBox = mainContainer.querySelectorAll('country-box')
})

document.querySelectorAll('.country-box').forEach(box=>{
    box.addEventListener('click',switchScreen(box))
})
}




openRegion.addEventListener('click',()=>{
    console.log('done')
    const reqions = document.querySelector('.regions')
    reqions.classList.toggle('hide')
    document.querySelector('body').classList.add('overlay')
    console.log(document.querySelector('body').classList)
})



const theRegion = document.querySelectorAll('.region')
theRegion.forEach(item =>{
    item.addEventListener('click',()=>{
        selectedRegion = item.textContent
        rgnText.textContent = item.textContent;
        bindData()
    })
})

input.addEventListener('input',()=>{
    selectedRegion = input.value
    bindData()
})


document.querySelector('.dark-mode-btn').addEventListener('click',()=>{
    document.querySelector('body').classList.toggle('dark')
})


 document.getElementsByClassName('back-btn').addEventListener('click',()=>{
    window.location.href = 'index.html';

})


async function switchScreen(box){

box.addEventListener('click', async ()=>{

  

    const fetchedData = await fetchData()
    let data = []
    
    
    for(item of fetchedData){//this is to put the into the array named data
        data.push(item)
    }
    const country = box.querySelector('h2').textContent
   


    setTimeout(() => {
        window.location.href = 'secondpage.html';
        console.log(document.querySelector('.secondBody'))
        localStorage.setItem('myData', `${country}`);
    }, 1);
   
  
})
}

