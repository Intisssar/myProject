
$(document).ready(function() {
    
    var catProducts = [
      { name: "Cat Toy", price: 9.99 },
      { name: "Cat Bed", price: 29.99 },
      { name: "Scratching Post", price: 39.99 },
      { name: "Cat Tree", price: 79.99 },
      {name:"Cat Food", price: 29.99}
    ];
  
    
    function createProductCard(product) {
      const card = $("<div>").addClass("productCard");
  
      const name = $("<h2>").text(product.name);
      card.append(name);
  
      const price = $("<p>").text(`$${product.price}`);
      card.append(price);
  
      return card;
    }
  
    
    function displayCatProducts(products) {
      const container = $("#productContainer");
      container.empty(); // Clear previous cards
  
      products.forEach(function(product) {
        const card = createProductCard(product);
        container.append(card);
      });
    }
  
    
    function addCatProduct() {
      const nameInput = $("#productName").val();
      const priceInput = $("#productPrice").val();
  
      if (nameInput && priceInput) {
        const newProduct = {
          name: nameInput,
          price: parseFloat(priceInput),
        };
  
        catProducts.push(newProduct);
        displayCatProducts(catProducts);
  
        $("#productName").val("");
        $("#productPrice").val("");
      }
    }
  
    
    $("#addProductForm").submit(function(event) {
      event.preventDefault();
      addCatProduct();
    });
  
   
    function searchCatProducts(searchTerm) {
      const filteredProducts = catProducts.filter(function(product) {
        return product.name.toLowerCase().includes(searchTerm.toLowerCase());
      });
  
      displayCatProducts(filteredProducts);
    }
  
   
    $("#searchButton").click(function() {
      const searchTerm = $("#searchInput").val();
      searchCatProducts(searchTerm);
    });
  
    
    displayCatProducts(catProducts);
  });