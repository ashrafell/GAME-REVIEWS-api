let APIData
let DefCategoryName = 'MMORPG'


async function getGames() {

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '663af2ea7fmsh27fde12a8d7c39ap13ebdejsn16917ceee4e9',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    }

    APIData = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${DefCategoryName}`, options)
    result = await APIData.json()

    displayData(result)
}


getGames()



function displayData(result) {
    let box = ''
    for (let i = 0; i < result.length; i++) {

        box += `
                        <div class=" col-xs-12  col-sm-6  col-md-4 col-lg-3  my-3  "  " onclick="openItem()" myCode=${result[i].id} id="clickOnMe">
                            <div class="card h-100">
                                <img class="pt-3 ps-3 pe-3" src="${result[i].thumbnail}" alt="">
                                <div class="title d-flex justify-content-between">
                                    <h4 class="ms-3 mt-3">${result[i].title}</h4>
                                    <h5 class=" mt-3 me-2 bg-primary p-2 rounded-2">Free</h5>
                                </div>
                                <div class="card-body ">
                                    <p class="card-text text-center">${result[i].short_description}</p>
                                </div>
                                <div class="card-footer d-flex  justify-content-between">
                                    <span>${result[i].genre}</span>
                                    <span>${result[i].platform}</span>
                                </div>
                            </div>
                        </div>
        
        `

        document.getElementById('display').innerHTML = box
    }


}

let navLinks = document.querySelectorAll(".nav-link")
function getCategory() {
    navLinks.forEach((el) => {
        el.addEventListener("click", function (e) {
            let myCategory = el.innerHTML
            console.log(myCategory);
            DefCategoryName = myCategory
            getGames(myCategory)

        })
    })
}
getCategory()






let dataTwo = {}

async function getDataTwo(number) {


    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '663af2ea7fmsh27fde12a8d7c39ap13ebdejsn16917ceee4e9',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };



    let resp = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${number}`, options)

    dataTwo = await resp.json()
    console.log(dataTwo);
    displayDetails()
}






let myOverLayer = document.getElementById("myOverLayer")
let closeIcon = document.getElementById("closeIcon")
let myTitle = document.getElementById("myTitle")
let myCategory = document.getElementById("myCategory")
let myPlatform = document.getElementById("myPlatform")
let myStatus = document.getElementById("myStatus")
let overLayerImg = document.getElementById("overLayerImg")
let myParagraph = document.getElementById("myParagraph")
let idNum = document.getElementById("idNum")
myOverLayer.style.display = "none"



function displayDetails() {
    myTitle.innerHTML = dataTwo.title
    overLayerImg.setAttribute("src", dataTwo.thumbnail)
    myCategory.innerHTML = dataTwo.genre
    myPlatform.innerHTML = dataTwo.platform
    myStatus.innerHTML = dataTwo.status
    myParagraph.innerHTML = dataTwo.description

}


function openItem() {
    let clickMe = Array.from(document.querySelectorAll("#clickOnMe"))

    clickMe.forEach((item) => {
        item.addEventListener('click', function (e) {
            let codeNumber = item.getAttribute("myCode")
            console.log(codeNumber)
            getDataTwo(codeNumber)
            opItem()
        })
    })
}



function opItem() {
    myOverLayer.style.display = "block"
}


function closeItem() {
    closeIcon.addEventListener('click', function (e) {
        myOverLayer.style.display = "none"
    })
}
closeItem()






















