let cards = document.querySelector('.cards'),
search = document.querySelector('#search'),
btnForm = document.querySelector('#btnForm'),
Cardretcips  = document.querySelector('.Cardretcips')

fetch (`https://www.themealdb.com/api/json/v1/1/categories.php`)
.then(res=> res.json())
.then(data=> {

    // console.log(data)
    // console.log(data.categories)

    for(let elem of data.categories){
        // console.log(elem);
        let card = document.createElement('div')
        let img = document.createElement('img')
        let title= document.createElement('p')
        let des = document.createElement('p')
        let btn = document.createElement('a')
        btn.className = 'waves-effect waves-light btn'
        btn.innerHTML = 'Watch categories'
        des.innerHTML = elem.strCategoryDescription.slice(0,80)+'...'
        title.className = 'card-title'
        title.innerHTML  =elem.strCategory
        card.className = 'card'
        img.src  = elem.strCategoryThumb

        // appends
        cards.appendChild(card)
        card.appendChild(img)
        card.appendChild(title)
        card.appendChild(des)
        card.appendChild(btn)

    }
});


btnForm.addEventListener('click',(e)=> {
    e.preventDefault()
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search.value}`)
    .then(res=> res.json())
    .then(data=> {

        // console.log(data.meals[0].strMealThumb );

        for(let child of cards.children){
            cards.removeChild(child)
        }

        for(let child of cards.children){
            cards.removeChild(child)
        }

        for(let child of cards.children){
            cards.removeChild(child)
        }

        for(let child of cards.children){
            cards.removeChild(child)
        }

        let card = document.createElement('div')
        let =img = document.createElement('img')
        img.src = data.meals[0].strMealThumb
        img.className = 'src'
        let title_1= document.createElement('h1')
        let des_1 = document.createElement('p')
        let btn_1 = document.createElement('a')
        btn_1.className = 'waves-effect waves-light btn'
        btn_1.id = 'btn_1'
        btn_1.innerHTML = 'Watch Retcips'
        // console.log(data.meals[0]);
        des_1.innerHTML = data.meals[0].strInstructions
        title_1.className = 'card-title'
        title_1.innerHTML  =data.meals[0].strCategory
        card.className = 'card_1'
        card.appendChild(img)
        card.appendChild(title_1)
        card.appendChild(des_1)
        card.appendChild(btn_1)
        cards.appendChild(card)

console.log(data.meals[0]);
        // btn_1.addEventListener('click', ()=> {
        // })
        console.log('qwerty');
    })

});