const express = require("express");
const app = express();
const port = 8080;

const URL = '/api/products';
app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/api/products", (req, res) => {
  res.json({ products });
});

//Buscar un producto por 'id'
app.get("/api/products/:id", (req, res) => {
  const products_id = products.find(
    (item) => item.id === parseInt(req.params.id)
  );

  if (!products_id) {
    return res.status(404).send("El producto no se encuentra");
  }

  res.json(products_id);
});

//Eliminar un producto segun el 'id'
app.delete("/api/products/:id", (req, res) => {
  const products_id = products.find(
    (item) => item.id === parseInt(req.params.id)
  );

  if (!products_id) {
    return res.status(404).send("El producto no se encuentra");
  }

  const index = products.indexOf(products_id);
  products.splice(index, 1);
  res.json(products_id);
});

//Agregar productos metodo POST
app.post(URL, (req, res) => {
  const newProduct = req.body;

  if(newProduct.title === undefined || newProduct.price === undefined){
    return res.status(400).send("Estas enviando un mal req");
  }else if(newProduct.title == newProduct.title){
    return res.status(400).send("Este titulo ya existe");
  }

  newProduct.id = Math.floor(Math.random() * 100);
  products.push(newProduct)
  res.json(newProduct);
})

app.get("/info", (req, res) => {
  res.send(
    `<p>Our store has info for ${products.length} products</p>
        <h3>Hola: ${new Date()}</h3>`
  );
});

app.get("/about", (req, res) => {
  res.send({ about });
});

const products = [
  {
    id: 1,
    title: "new Title marcos",
    price: 100004,
    description: "new Description",
    images: [
      "https://api.lorem.space/image/shoes?w=640&h=480&r=5193",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=2221",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=2672",
    ],
  },
  {
    id: 2,
    title: "new try",
    price: 29,
    description:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    images: [
      "https://api.lorem.space/image/fashion?w=640&h=480&r=4308",
      "https://api.lorem.space/image/fashion?w=640&h=480&r=4555",
      "https://api.lorem.space/image/fashion?w=640&h=480&r=4493",
    ],
  },
  {
    id: 3,
    title: "Licensed Plastic Table",
    price: 808,
    description:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    images: [
      "https://api.lorem.space/image/fashion?w=640&h=480&r=6769",
      "https://api.lorem.space/image/fashion?w=640&h=480&r=6810",
      "https://api.lorem.space/image/fashion?w=640&h=480&r=2350",
    ],
  },
  {
    id: 4,
    title: "Refined Plastic Shirt",
    price: 252,
    description:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    images: [
      "https://api.lorem.space/image/watch?w=640&h=480&r=9592",
      "https://api.lorem.space/image/watch?w=640&h=480&r=6436",
      "https://api.lorem.space/image/watch?w=640&h=480&r=4565",
    ],
  },
];

const about = [
  {
    name: "Camilo Pimentel Gomez",
    age: 36,
    email: "cpimentel.0325@gmail.com",
    phone: "455-408-5765",
    city: "Mountain View",
    website: "https://camilopimentel.com",
    skills: [
      {
        name: "JavaScript",
        level: "intermediate",
      },
      {
        name: "React",
        level: "intermediate",
      },
      {
        name: "NextJS",
        level: "intermediate",
      },
      {
        name: "Html",
        levle: "Advanced",
      },
      {
        name: "Css",
        level: "Advanced",
      },
    ],
  },
];
