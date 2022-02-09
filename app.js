let menu = [

  { id: 1, name: 'Cookie Dough', image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg', price: 1 },
  { id: 2, name: 'Vanilla', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg', price: 1 },
  { id: 3, name: 'Strawberry', image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg', price: 2 },
  { id: 4, name: 'Waffle Cone', image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg', price: 2 },
  { id: 5, name: 'Waffle Bowl', image: 'http://images.wbmason.com/350/L_JOY66050.jpg', price: 4 },

  { id: 6, name: 'Sprinkles', image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg', price: 1 },
  { id: 7, name: 'Chocolate Chips', image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360', price: 2 }
]





let cart = []
let total = 0


function drawMenuOne() {
  let template = ''
  for (let i = 0; i < menu.length; i++) {
    const flavor = menu[i];
    template += `
      <div class="col-6 d-flex p-1 justify-content-between selectable" onclick="buyIceCream('${flavor.id}')">
        <img class="img-fluid"
          src='${flavor.image}' alt="">
        <div class="d-flex justify-content-between p-2">
          <h6>'${flavor.name}'</h6>
          <p>${flavor.price}</p>
        </div>
      </div>
        `
    document.getElementById('icecream-menu').innerHTML = template

  }
}

function drawCart() {
  let template = ''
  let total = 0
  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    total += item.price
    template += `
    <div class="col-6">
          <div class="d-flex justify-content-between p-1">
            <h6>'${item.name}</h6>
            <p>${item.price}</p>
          </div>
        </div>
    `
  }
  document.getElementById('shopping-cart').innerHTML = template
  document.getElementById('total').innerText = total.toFixed(2)
}

function buyIceCream(itemID) {
  // console.warn("The item ID is: ", itemID)
  let itemToAdd = menu.find(mi => mi.id == itemID)
  cart.push(itemToAdd)
  // console.log('cart', cart)
  drawCart()

}

function checkOut() {
  cart = []
  total = 0
  drawCart()
}

drawCart()
drawMenuOne()