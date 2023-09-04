const  cardContainer = document.querySelector('.list-continer')
const  playerViewSmall = document.querySelector('.small')
const  playerViewLarge = document.querySelector('.largo')

class ProductCard{
  constructor( category ,img,title,ratin,t1,t2,price){
    this.category= category;
    this.img =img;
    this.titulo = title;
    this.rankin = ratin;
    this.t1 = t1;
    this.t2 = t2;
    this.price = price;
  }
}
const totalProduct = [];
for (let i = 0 ; i <2; i++){
}

totalProduct.push( new ProductCard( "Cabañas","https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2023-08/230828-shakira-sj-915-7c5dfb.jpg", "Shakira - loba", "8.99" , "no se qeu mas poner aqui", "hola como estan" , "7,788"))
totalProduct.push( new ProductCard( "Cabañas","https://www.billboard.com/wp-content/uploads/2020/04/eminem-press-photo-2019-aqu-billboard-1548-1587659998.jpg?w=942&h=623&crop=1", "Eminem", "8.99" , "no se qeu mas poner aqui", "hola como estan" , "7,788"))
totalProduct.push( new ProductCard( "Cabañas","https://m.media-amazon.com/images/I/41X8CKU-TNL._SX300_SY300_QL70_FMwebp_.jpg", "Adele", "8.99" , "no se qeu mas poner aqui", "hola como estan" , "7,788"))
totalProduct.push( new ProductCard( "Cabañas","https://cdn.smehost.net/michaeljacksoncom-uslegacyprod/wp-content/uploads/2017/04/19870831_bad_album.jpg", "Micheal Jackson", "8.99" , "no se qeu mas poner aqui", "hola como estan" , "7,788"))
totalProduct.push( new ProductCard( "Cabañas","https://www.todomusica.org/imagenes/680x380/ricardo_arjona.webp", "Ricardo Arjona", "8.99" , "no se qeu mas poner aqui", "hola como estan" , "7,788"))
totalProduct.push( new ProductCard( "Cabañas","https://cdn.deultimominuto.net/wp-content/uploads/2021/11/las-dos-mujeres-de-alejandro-sanz-tu-a-madrid-y-yo-a-nueva-york.jpg", "Alejandro Zands", "8.99" , "no se qeu mas poner aqui", "hola como estan" , "7,788"))


const cardTemplate =(item) => ` <div class="list">
<img src="${item.img}" alt="aqui va una imagen">
<p class="title">${item.titulo}</p>
<div class="icon ">
  <svg  id="card" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" transform="rotate(90)" stroke="#ff3838"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12,7a2,2,0,1,0-2-2A2,2,0,0,0,12,7Zm0,10a2,2,0,1,0,2,2A2,2,0,0,0,12,17Zm0-7a2,2,0,1,0,2,2A2,2,0,0,0,12,10Z"></path></g></svg>
</div>
</div>`



  totalProduct.map(product =>{
    const newProduct = document.createElement("div")

    newProduct.innerHTML = cardTemplate(product);
    
    cardContainer.appendChild(newProduct)
  })

    const mostrarGrande = ()=>{
      playerViewLarge.classList.toggle('invisible');
      playerViewSmall.classList.toggle('invisible');
    }
    const mostrarSmall = ()=>{
      playerViewLarge.classList.toggle('invisible');
      playerViewSmall.classList.toggle('invisible');
    }
    mostrarGrande()
    