/*<article class="flex-30">
            <div class="flex justify-between align-center">
              <img src="https://raw.githubusercontent.com/nnnkit/json-data-collections/master/game-of-thrones/game-of-thrones-eddard-stark.jpg" alt="1">
              <p>Eddard "Ned" Stark'</p>

            </div>
            <h2 class="description"> "Lord of Winterfell - Warden of the North - Hand of the King - Married to Catelyn (Tully) Stark"</h2>
              <a href="#">Learn More!</a>
          </article>*/


          /*let div  = document.querySelector(".container")
          let art  = document.querySelector(".flex-30")
          let insidediv  = document.querySelector(".align-center")

          got.houses.*/



          let allPeople  =got.houses.reduce((acc,cv)=>{
              acc=acc.concat(cv.people)
              return acc

          }, [])


         let cardsHTML= allPeople.map(function(el) {
              return  `

              <article class="flex-30">
            <div class="flex justify-between align-center">
              <img src=${el.image} alt="1">
              <p>${el.name}</p>

            </div>
            <h2 class="description"> ${el.description}</h2>
              <a href=${el.wikiLink}>Learn More!</a>
          </article>

              `
          })


          let div  = document.querySelector(".container")

          div.innerHTML =cardsHTML.join("")