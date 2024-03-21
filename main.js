const getProducts = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  const products = data.products;
  const result = products
    .map(
      (ele) =>
        `
          <h2>${ele.title}</h2> 
          <img src="${ele.thumbnail}"/>
        `
    )
    .join("");

  document.querySelector(".product").innerHTML += result;
};

getProducts();

const btn= document.querySelector(".btn");

btn.onclick=function() {

  document.querySelector(".sidebar").classList.remove('d-none');
  document.querySelector(".overlay").classList.remove('d-none'); 
  document.querySelector(".product").classList.remove('d-none'); 
  document.querySelector(".btn").classList.add('d-none');
   
}

const btn2 = document.querySelector(".close");
btn2.onclick =function(){
    document.querySelector(".overlay").classList.add('d-none');

}


   
  


