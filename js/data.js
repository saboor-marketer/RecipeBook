// Recipe Data
const recipes = [
    // Burgers
    {
        id: 1,
        name: "Big Mac",
        category: "burgers",
        image: "images/Burgers/big-mac-lead-66574ee4f0ee4.jpg",
        cookTime: "20 mins",
        servings: 2,
        ingredients: ["2 buns", "1 beef patty", "cheese", "lettuce", "special sauce"],
        instructions: ["Grill patty", "Toast buns", "Assemble burger"],
        rating: 4.8,
        reviews: [
            { name: "John", comment: "Great!", rating: 5 },
            { name: "Sarah", comment: "Delicious!", rating: 4.5 }
        ]
    },
    {
        id: 2,
        name: "Thai Burger",
        category: "burgers",
        image: "images/Burgers/thai.jpg",
        cookTime: "25 mins",
        servings: 2,
        ingredients: ["2 buns", "chicken patty", "thai sauce", "veggies"],
        instructions: ["Cook patty", "Toast buns", "Add sauce and veggies"],
        rating: 4.5,
        reviews: [
            { name: "Mike", comment: "Spicy!", rating: 4 },
            { name: "Emma", comment: "Love it!", rating: 5 }
        ]
    },
    
    // Cakes
    {
        id: 3,
        name: "Skull Cake",
        category: "cakes",
        image: "images/Cakes/WS-Skull-Cake-Hero-Blog.jpg",
        cookTime: "2 hours",
        servings: 12,
        ingredients: ["flour", "sugar", "eggs", "butter", "chocolate"],
        instructions: ["Mix ingredients", "Bake at 350°F", "Decorate"],
        rating: 4.9,
        reviews: [
            { name: "Alex", comment: "Perfect!", rating: 5 },
            { name: "Lisa", comment: "Amazing decoration", rating: 5 }
        ]
    },
    {
        id: 4,
        name: "Pineapple Cake",
        category: "cakes",
        image: "images/Cakes/pineapple-cake.jpg",
        cookTime: "1 hour",
        servings: 8,
        ingredients: ["flour", "sugar", "eggs", "pineapple", "cream"],
        instructions: ["Mix ingredients", "Bake", "Add topping"],
        rating: 4.7,
        reviews: [
            { name: "David", comment: "Yummy!", rating: 5 },
            { name: "Sophia", comment: "Great taste", rating: 4.5 }
        ]
    },
    
    // Coffees
    {
        id: 5,
        name: "Iced Cafe Mocha",
        category: "coffees",
        image: "images/Coffees/Iced_Cafe_Mocha.jpg",
        cookTime: "5 mins",
        servings: 1,
        ingredients: ["espresso", "milk", "chocolate syrup", "ice"],
        instructions: ["Mix coffee and chocolate", "Add milk", "Add ice"],
        rating: 4.8,
        reviews: [
            { name: "Chris", comment: "Refreshing!", rating: 5 },
            { name: "Olivia", comment: "Perfect balance", rating: 4.5 }
        ]
    },
    {
        id: 6,
        name: "Creamy Coffee",
        category: "coffees",
        image: "images/Coffees/Cup-Of-Creamy-Coffee.png",
        cookTime: "5 mins",
        servings: 1,
        ingredients: ["coffee", "milk", "sugar", "cream"],
        instructions: ["Brew coffee", "Add milk and sugar", "Top with cream"],
        rating: 4.6,
        reviews: [
            { name: "Daniel", comment: "So creamy!", rating: 5 },
            { name: "Mia", comment: "Perfect morning drink", rating: 4 }
        ]
    },
    
    // Desserts
    {
        id: 7,
        name: "Gulab Jamun",
        category: "desserts",
        image: "images/Desserts/gulab-jamun-desi-ghee.jpg",
        cookTime: "30 mins",
        servings: 4,
        ingredients: ["milk powder", "flour", "sugar syrup", "ghee"],
        instructions: ["Make dough", "Fry balls", "Soak in syrup"],
        rating: 4.9,
        reviews: [
            { name: "Priya", comment: "Authentic taste!", rating: 5 },
            { name: "Rahul", comment: "Perfect sweetness", rating: 5 }
        ]
    },
    {
        id: 8,
        name: "Doodh Dulari",
        category: "desserts",
        image: "images/Desserts/doodh-dulari_14625.jpg",
        cookTime: "20 mins",
        servings: 2,
        ingredients: ["milk", "sugar", "rice flour", "cardamom"],
        instructions: ["Boil milk", "Add sugar and flour", "Garnish with cardamom"],
        rating: 4.7,
        reviews: [
            { name: "Anita", comment: "Creamy and delicious", rating: 5 },
            { name: "Vikram", comment: "Great dessert", rating: 4.5 }
        ]
    },
    
    // Pasta
    {
        id: 9,
        name: "Rigatoni Pasta",
        category: "pasta",
        image: "images/Pasta/rigatoni-pasta.jpg",
        cookTime: "15 mins",
        servings: 2,
        ingredients: ["pasta", "cream", "garlic", "parmesan", "herbs"],
        instructions: ["Cook pasta", "Make sauce", "Mix and serve"],
        rating: 4.8,
        reviews: [
            { name: "Marco", comment: "Creamy perfection!", rating: 5 },
            { name: "Sophie", comment: "Quick and tasty", rating: 4.5 }
        ]
    },
    
    // Pizza
    {
        id: 10,
        name: "Margherita Pizza",
        category: "pizza",
        image: "images/Pizza/9502427.jpg",
        cookTime: "25 mins",
        servings: 2,
        ingredients: ["pizza dough", "tomato sauce", "mozzarella", "basil"],
        instructions: ["Roll dough", "Add toppings", "Bake at 475°F"],
        rating: 4.9,
        reviews: [
            { name: "Luca", comment: "Perfect crust!", rating: 5 },
            { name: "Giulia", comment: "Authentic Italian taste", rating: 5 }
        ]
    }
];
