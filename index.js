class ProductManager {
    id = 1;
  
    constructor() {
      this.products = [];
    }
  
    addProduct(product) {
      const checkCode = this.products.find((p) => p.code === product.code);
      if (checkCode) {
        // throw new Error('This code already exists');
        return 'This code already exists';
      }
      //______________________________________________Función para remplazar el IF
      function validateFields(product) {
        const requiredFields = ['title', 'description', 'price', 'thumbnail', 'code', 'stock'];
        for (const field of requiredFields) {
          if (!product[field]) {
            return 'Fields missing';
          }
        }
        return null;
      }
      const validationError = validateFields(product);
       if (validationError) {
        console.log(validationError);
        }
    //____________________________________________________________
    //   if (
    //     !product.title ||
    //     !product.description ||
    //     !product.price ||
    //     !product.thumbnail ||
    //     !product.code ||
    //     !product.stock
    //   ) {
    //     // throw new Error('Fields missing');
    //     return 'Fields missing';
    //   }
      const newProduct = { ...product, id: this.id };
      this.products.push(newProduct);
      this.id++;
      return 'Product added';
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const found = this.products.find((p) => p.id === id);
      if (!found) {
        return 'Not found';
      }
      return found;
    }
  }
  
  const disco5 = {
    title: 'Beauty Behind The Madness',
    description: 'The Weeknds 5th Album',
    price: 6000,
    thumbnail:
      'https://i.discogs.com/chdaqKfIQd_pa0Q9CR9OEQa7vNaP5aVrNZc4w7zqxDA/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc1ODkx/NDItMTQ0NDY1NDc4/Ni0zODc0LmpwZWc.jpeg',
    code: 'abel2015',
    stock: 2000,
  };
  const disco8 = {
    title: 'Dawn FM',
    description: 'The Weeknds 8th Album ',
    price: 8000,
    thumbnail:
      'https://i.discogs.com/KL5CE197nZ4hnfBAAivjMc92VZXXnwmkOk5BarIyUsM/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIxNTg4/OTM0LTE2NjQzOTYy/ODEtNjg1NS5qcGVn.jpeg',
    code: 'abel2022',
    stock: 1500,
  };
  
  const productManager = new ProductManager();
  
  console.log(productManager.addProduct(disco5));
  console.log(productManager.addProduct(disco8));
  console.log(productManager.getProducts());
  console.log(productManager.getProductById(4));