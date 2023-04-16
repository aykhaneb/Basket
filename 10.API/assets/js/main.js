if (localStorage.getItem("products") === null) {
    localStorage.setItem('products',JSON.stringify([]))
}

let buttons = document.querySelectorAll(".btn")

for (let btn of buttons) {
    btn.onclick = function (e) {
        e.preventDefault()
        let id = this.parentElement.parentElement.id;
        let src = this.parentElement.previousElementSibling.src;
        let title = this.previousElementSibling.previousElementSibling.innerHTML
        let price = this.previousElementSibling.innerHTML;

        let product_list = JSON.parse(localStorage.getItem("products"))

        let existProd = product_list.find(item => item.Id == id);

      if (existProd===undefined) {
        product_list.push({
            Id: id,
            Title: title,
            Image: src,
            Price: price,
            Count: 1
        })
      }
      else{
        existProd.Count+=1
      }

      localStorage.setItem('products',JSON.stringify(product_list))

      ShowCount()
    }
}


function ShowCount() {
    let items = JSON.parse(localStorage.getItem('products'))
    document.querySelector('#count').innerHTML = `${items.length}`;
}