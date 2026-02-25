import React, { createContext, useState } from 'react'

export const RecipeContext = createContext();

export const recipeData = [
    {
        slug: "1",
        img: '/Recepies/Big and Juicy Wagyu Beef Cheeseburger.png',
        video: "https://www.youtube.com/embed/9qH6zd3a7Ss?si=uYEOzM8LWWrawUOZ",
        name: "Big and Juicy Wagyu Beef Cheeseburger",
        prepTime: "25",
        type: "Lunch",
        cookName: "John Smith",
        cookImg: "/Users/John-Smith.png",
        cookTime: "15",
        date: "21 Jan 2024",
        category: "Meat",
        liked: false,
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quisquam odio, vel ab amet blanditiis nam dicta natus molestias aperiam adipisci officiis nesciunt sapiente. Voluptas dolore quisquam voluptate blanditiis fugit, adipisci esse veniam deleniti, vitae saepe distinctio corporis provident sed culpa quis facilis inventore ipsam. A molestias nam deserunt fuga omnis minus culpa illum aliquam.",
        nutritions: [
            {name: "Calories", count: "219.9 kcal"},
            {name: "Total Fat", count: "10.7 g"},
            {name: "Protein", count: "7.9 g"},
            {name: "Carbohydrate", count: "22.3 g"},
            {name: "Cholesterol", count: "37.4 mg"},
        ],
        ingredients_for_dish: [
            {name: "Brioche burger buns"},
            {name: "Butter"},
            {name: "Lettuce leaves"},
            {name: "Tomato slices"},
            {name: "Red onion slices"},
            {name: "Pickles"},
        ],
        ingredients_for_sauce: [
            {name: "Mayonnaise"},
            {name: "Ketchup"},
            {name: "Dijon mustard"},
            {name: "Garlic powder"},
            {name: "Onion powder"},
            {name: "Salt and pepper"},
        ],
        directions: [
            {
                step: "1. Lorem ipsum dolor sit amet",
                stepDetails: [
                    {details: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."},
                    {img: "/RecipeDetails/Women.png"},
                    {details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quisquam odio, vel ab amet blanditiis nam dicta natus molestias aperiam adipisci officiis nesciunt sapiente. Voluptas dolore quisquam voluptate blanditiis fugit."},
                ],
            },
            {
                step: "2. Lorem ipsum dolor sit amet",
                stepDetails: [
                    {details: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, labore et dolore magnam aliquam quaerat voluptatem."},
                ],
            },
        ],
    },
    {
        slug: "2",
        img: '/Recepies/Fresh Lime Roasted Salmon with Ginger Sauce.png',
        video: "https://www.youtube.com/embed/yX73Cui8Sss?si=YoXtLTXZgv94N99-",
        name: "Fresh Lime Roasted Salmon with Ginger Sauce",
        prepTime: "22",
        type: "Non-Veg",
        cookTime: "13",
        cookName: "Will Smith",
        cookImg: "/Users/John-Smith.png",
        date: "10 Mar 2022",
        category: "Fish",
        liked: false,
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quisquam odio, vel ab amet blanditiis nam dicta natus molestias aperiam adipisci officiis nesciunt sapiente. Voluptas dolore quisquam voluptate blanditiis fugit, adipisci esse veniam deleniti, vitae saepe distinctio corporis provident sed culpa quis facilis inventore ipsam. A molestias nam deserunt fuga omnis minus culpa illum aliquam.",
        nutritions: [
            {name: "Calories", count: "278.3 kcal"},
            {name: "Total Fat", count: "8.92 g"},
            {name: "Protein", count: "12.03 g"},
            {name: "Carbohydrate", count: "18.2 g"},
            {name: "Cholesterol", count: "26.7 mg"},
        ],
        ingredients_for_dish: [
            { name: "Salmon fillets" },
            { name: "Fresh lime juice" },
            { name: "Olive oil" },
            { name: "Garlic cloves" },
            { name: "Grated ginger" },
            { name: "Salt and pepper" },
        ],
        ingredients_for_sauce: [
            { name: "Soy sauce" },
            { name: "Honey" },
            { name: "Rice vinegar" },
            { name: "Sesame oil" },
            { name: "Cornstarch" },
        ],
        directions: [
            {
                step: "1. Lorem ipsum dolor sit amet",
                stepDetails: [
                    {details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quisquam odio, vel ab amet blanditiis nam dicta natus molestias aperiam adipisci officiis nesciunt sapiente."},
                ],
            },
            {
                step: "2. Lorem ipsum dolor sit amet",
                stepDetails: [
                    {details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quisquam odio, vel ab amet blanditiis nam dicta natus molestias aperiam adipisci officiis nesciunt sapiente. Voluptas dolore quisquam voluptate blanditiis fugit."},
                    {img: "/RecipeDetails/woman-pouring-sugar-into-glass-bowl.jpg"},
                    {details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quisquam odio, vel ab amet blanditiis nam dicta natus molestias aperiam adipisci officiis nesciunt sapiente."},
                ],
            },
        ],
    },
    {
        slug: "3",
        img: '/Recepies/Strawberry Oatmeal Pancake with Honey Syrup.png',
        video: "https://www.youtube.com/embed/UOKJCwyUJGU?si=Ziip80hj7rah1xFG",
        name: "Banana Oatmeal Pancake with Honey Syrup",
        prepTime: "20",
        type: "Dessert",
        cookTime: "24",
        cookName: "Jack Doe",
        cookImg: "/Users/John-Smith.png",
        date: "18 Jun 2022",
        category: "Pancake",
        liked: false,
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quisquam odio, vel ab amet blanditiis nam dicta natus molestias aperiam adipisci officiis nesciunt sapiente. Voluptas dolore quisquam voluptate blanditiis fugit, adipisci esse veniam deleniti, vitae saepe distinctio corporis provident sed culpa quis facilis inventore ipsam. A molestias nam deserunt fuga omnis minus culpa illum aliquam.",
        nutritions: [
            {name: "Calories", count: "310.3 kcal"},
            {name: "Total Fat", count: "10.21 g"},
            {name: "Protein", count: "10.03 g"},
            {name: "Carbohydrate", count: "24.2 g"},
            {name: "Cholesterol", count: "27.7 mg"},
        ],
        ingredients_for_dish: [
            { name: "Rolled oats" },
            { name: "Mashed bananas" },
            { name: "Eggs" },
            { name: "Milk" },
            { name: "Baking powder" },
            { name: "Cinnamon" },
        ],
        ingredients_for_sauce: [
            { name: "Honey" },
            { name: "Vanilla extract" },
            { name: "Butter" },
        ],
        directions: [
            {
                step: "1. Lorem ipsum dolor sit amet",
                stepDetails: [
                    {details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quisquam odio, vel ab amet blanditiis nam dicta natus molestias aperiam adipisci officiis nesciunt sapiente."},
                ],
            },
            {
                step: "2. Lorem ipsum dolor sit amet",
                stepDetails: [
                    {details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quisquam odio, vel ab amet blanditiis nam dicta natus molestias aperiam adipisci officiis nesciunt sapiente. Voluptas dolore quisquam voluptate blanditiis fugit."},
                ],
            },
            {
                step: "2. Lorem ipsum dolor sit amet",
                stepDetails: [
                    {details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quisquam odio, vel ab amet blanditiis nam dicta natus molestias aperiam adipisci officiis nesciunt sapiente. Voluptas dolore quisquam voluptate blanditiis fugit."},
                    {img: "/RecipeDetails/Women.png"},
                    {details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quisquam odio, vel ab amet blanditiis nam dicta natus molestias aperiam adipisci officiis nesciunt sapiente."},
                ],
            },
        ],
    },
    {
        slug: "4",
        img: '/Recepies/Fresh and Healthy Mixed Mayonnaise Salad.png',
        video: "https://www.youtube.com/embed/jh43NWgSd1s?si=38-wyavHzh8j8y4o",
        name: "Fresh and Healthy Mixed Mayonnaise Salad",
        prepTime: "20",
        type: "Breakfast",
        cookTime: "15",
        cookName: "Jack Doe",
        cookImg: "/Users/John-Smith.png",
        date: "04 Apr 2021",
        category: "Salad",
        liked: false,
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quisquam odio, vel ab amet blanditiis nam dicta natus molestias aperiam adipisci officiis nesciunt sapiente. Voluptas dolore quisquam voluptate blanditiis fugit, adipisci esse veniam deleniti, vitae saepe distinctio corporis provident sed culpa quis facilis inventore ipsam. A molestias nam deserunt fuga omnis minus culpa illum aliquam.",
        nutritions: [
            {name: "Calories", count: "289.3 kcal"},
            {name: "Total Fat", count: "14.21 g"},
            {name: "Protein", count: "15.03 g"},
            {name: "Carbohydrate", count: "29.21 g"},
            {name: "Cholesterol", count: "20.4 mg"},
        ],
        ingredients_for_dish: [
            { name: "Lettuce" },
            { name: "Cucumber" },
            { name: "Carrots" },
            { name: "Tomatoes" },
            { name: "Bell peppers" },
            { name: "Corn kernels" },
        ],
        ingredients_for_sauce: [
            { name: "Mayonnaise" },
            { name: "Lemon juice" },
            { name: "Salt and pepper" },
            { name: "Olive oil" },
        ],
        directions: [
            {
                step: "1. Lorem ipsum dolor sit amet",
                stepDetails: [
                    {details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quisquam odio, vel ab amet blanditiis nam dicta natus molestias aperiam adipisci officiis nesciunt sapiente."},
                    {img: "/RecipeDetails/chopping-vegetables-cooking-dinner.jpg"},
                ],
            },
            {
                step: "2. Lorem ipsum dolor sit amet",
                stepDetails: [
                    {details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quisquam odio, vel ab amet blanditiis nam dicta natus molestias aperiam adipisci officiis nesciunt sapiente. Voluptas dolore quisquam voluptate blanditiis fugit."},
                    {img: "/RecipeDetails/girl-baking-kitchen-making-dough-holding-recipe-book.jpg"},
                    {details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quisquam odio, vel ab amet blanditiis nam dicta natus molestias aperiam adipisci officiis nesciunt sapiente. Voluptas dolore quisquam voluptate blanditiis fugit."},
                    {details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quisquam odio, vel ab amet blanditiis nam dicta natus molestias aperiam adipisci officiis nesciunt sapiente. Voluptas dolore quisquam voluptate blanditiis fugit."},
                ],
            },
            {
                step: "3. Lorem ipsum dolor sit amet",
                stepDetails: [
                    {details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quisquam odio, vel ab amet blanditiis nam dicta natus molestias aperiam adipisci officiis nesciunt sapiente."},
                    {img: "/RecipeDetails/girl-making-vegan-dinner-showing-okay-sign-recommending.jpg"},
                ],
            },
        ],
    },
    {
        slug: "5",
        img: '/Recepies/Chicken Meatballs with Cream Cheese.png',
        video: "https://www.youtube.com/embed/OzJRZhAMvAo?si=7vq0YYbDqoLT1hQK",
        name: "Chicken Meatballs with Cream Cheese",
        prepTime: "20",
        type: "Non-Veg",
        cookTime: "30",
        cookName: "Alex Carry",
        cookImg: "/Users/John-Smith.png",
        date: "28 Aug 2024",
        category: "Meatballs",
        liked: false,
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quisquam odio, vel ab amet blanditiis nam dicta natus molestias aperiam adipisci officiis nesciunt sapiente. Voluptas dolore quisquam voluptate blanditiis fugit, adipisci esse veniam deleniti, vitae saepe distinctio corporis provident sed culpa quis facilis inventore ipsam. A molestias nam deserunt fuga omnis minus culpa illum aliquam.",
        nutritions: [
            {name: "Calories", count: "348.57 kcal"},
            {name: "Total Fat", count: "24.4 g"},
            {name: "Protein", count: "28.40 g"},
            {name: "Carbohydrate", count: "34.08 g" },
            {name: "Cholesterol", count: "23.34 mg"},
        ],
        ingredients_for_dish: [
            { name: "Ground chicken" },
            { name: "Bread crumbs" },
            { name: "Egg" },
            { name: "Parsley" },
            { name: "Cream cheese cubes" },
        ],
        ingredients_for_sauce: [
            { name: "Tomato puree" },
            { name: "Garlic" },
            { name: "Olive oil" },
            { name: "Basil" },
        ],
        directions: [
            {
                step: "1. Lorem ipsum dolor sit amet",
                stepDetails: [
                    {img: "/RecipeDetails/Chicken Meatballs with Cream Cheese.jpg"},
                    {details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quisquam odio, vel ab amet blanditiis nam dicta natus molestias aperiam adipisci officiis nesciunt sapiente."},
                    {details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quisquam odio, vel ab amet blanditiis nam dicta natus molestias aperiam adipisci officiis nesciunt sapiente. Voluptas dolore quisquam voluptate blanditiis fugit."},
                ],
            },
            {
                step: "2. Lorem ipsum dolor sit amet",
                stepDetails: [
                    {details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quisquam odio, vel ab amet blanditiis nam dicta natus molestias aperiam adipisci officiis nesciunt sapiente. Voluptas dolore quisquam voluptate blanditiis fugit."},
                ],
            },
        ],
    },
    {
        slug: "6",
        img: '/Recepies/Fruity Pancake with Orange & Blueberry.png',
        video: "https://www.youtube.com/embed/Sa0vl4sXCjA?si=Vn2nSUO4yoWwORu_",
        name: "Fruity Pancake with Orange & Blueberry",
        prepTime: "20",
        type: "Dessert",
        cookTime: "25",
        cookName: "John Smith",
        cookImg: "/Users/John-Smith.png",
        date: "01 Nov 2020",
        category: "Pancake",
        liked: false,
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quisquam odio, vel ab amet blanditiis nam dicta natus molestias aperiam adipisci officiis nesciunt sapiente. Voluptas dolore quisquam voluptate blanditiis fugit, adipisci esse veniam deleniti, vitae saepe distinctio corporis provident sed culpa quis facilis inventore ipsam. A molestias nam deserunt fuga omnis minus culpa illum aliquam.",
        nutritions: [
            {name: "Calories", count: "246.82 kcal"},
            {name: "Total Fat", count: "21.4 g"},
            {name: "Protein", count: "17.6 g"},
            {name: "Carbohydrate", count: "29.90 g"},
            {name: "Cholesterol", count: "20.51 mg"},
        ],
        ingredients_for_dish: [
            { name: "Flour" },
            { name: "Baking powder" },
            { name: "Eggs" },
            { name: "Milk" },
            { name: "Orange zest" },
        ],
        ingredients_for_sauce: [
            { name: "Blueberries" },
            { name: "Orange juice" },
            { name: "Maple syrup" },
        ],
        directions: [
            {
                step: "1. Lorem ipsum dolor sit amet",
                stepDetails: [
                    {details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quisquam odio, vel ab amet blanditiis nam dicta natus molestias aperiam adipisci officiis nesciunt sapiente."},
                    {img: "/RecipeDetails/istockphoto-1400565491-612x612.jpg"},
                    {details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quisquam odio, vel ab amet blanditiis nam dicta natus molestias aperiam adipisci officiis nesciunt sapiente. Voluptas dolore quisquam voluptate blanditiis fugit."},
                ],
            },
            {
                step: "2. Lorem ipsum dolor sit amet",
                stepDetails: [
                    {details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quisquam odio, vel ab amet blanditiis nam dicta natus molestias aperiam adipisci officiis nesciunt sapiente. Voluptas dolore quisquam voluptate blanditiis fugit."},
                    {details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quisquam odio, vel ab amet blanditiis nam dicta natus molestias aperiam adipisci officiis nesciunt sapiente. Voluptas dolore quisquam voluptate blanditiis fugit."},
                ],
            },
        ],
    },
    {
        slug: "7",
        img: '/Recepies/The Best Easy One Pot Chicken and Rice.png',
        video: "https://www.youtube.com/embed/J0LAvL4G_cA?si=v7TIzPeHy8UKBtZT",
        name: "The Best Easy One Pot Chicken and Rice",
        prepTime: "20",
        type: "Non-Veg",
        cookTime: "30",
        cookName: "Will Smith",
        cookImg: "/Users/John-Smith.png",
        date: "08 Sept 2025",
        category: "Chicken",
        liked: false,
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quisquam odio, vel ab amet blanditiis nam dicta natus molestias aperiam adipisci officiis nesciunt sapiente. Voluptas dolore quisquam voluptate blanditiis fugit, adipisci esse veniam deleniti, vitae saepe distinctio corporis provident sed culpa quis facilis inventore ipsam. A molestias nam deserunt fuga omnis minus culpa illum aliquam.",
        nutritions: [
            {name: "Calories", count: "395.7 kcal"},
            {name: "Total Fat", count: "45.80 g"},
            {name: "Protein", count: "20.42 g"},
            {name: "Carbohydrate", count: "49.73 g"},
            {name: "Cholesterol", count: "31.02 mg"},
        ],
        ingredients_for_dish: [
            { name: "Chicken thighs" },
            { name: "Basmati rice" },
            { name: "Onion" },
            { name: "Garlic" },
            { name: "Coriander" },
            { name: "Cumin" },
            { name: "Paprika" },
        ],
        ingredients_for_sauce: [
            { name: "Chicken broth" },
            { name: "Tomato paste" },
            { name: "Olive oil" },
        ],
        directions: [
            {
                step: "1. Lorem ipsum dolor sit amet",
                stepDetails: [
                    {details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quisquam odio, vel ab amet blanditiis nam dicta natus molestias aperiam adipisci officiis nesciunt sapiente."},
                    {img: "/RecipeDetails/green-curry-made-with-chicken-chili-basil-with-tomato-lime-kaffir-lime-leaves-garlic.jpg"},
                    {details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quisquam odio, vel ab amet blanditiis nam dicta natus molestias aperiam adipisci officiis nesciunt sapiente. Voluptas dolore quisquam voluptate blanditiis fugit."},
                ],
            },
            {
                step: "2. Lorem ipsum dolor sit amet",
                stepDetails: [
                    {details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quisquam odio, vel ab amet blanditiis nam dicta natus molestias aperiam adipisci officiis nesciunt sapiente. Voluptas dolore quisquam voluptate blanditiis fugit."},
                    {img: "/RecipeDetails/rice-noodle-chicken-feet-liquid.jpg"},
                ],
            },
            {
                step: "3. Lorem ipsum dolor sit amet",
                stepDetails: [
                    {details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quisquam odio, vel ab amet blanditiis nam dicta natus molestias aperiam adipisci officiis nesciunt sapiente. Voluptas dolore quisquam voluptate blanditiis fugit."},
                    {details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quisquam odio, vel ab amet blanditiis nam dicta natus molestias aperiam adipisci officiis nesciunt sapiente. Voluptas dolore quisquam voluptate blanditiis fugit."},
                ],
            },
            {
                step: "4. Lorem ipsum dolor sit amet",
                stepDetails: [
                    {details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quisquam odio, vel ab amet blanditiis nam dicta natus molestias aperiam adipisci officiis nesciunt sapiente. Voluptas dolore quisquam voluptate blanditiis fugit."},
                    {img: "/RecipeDetails/high-angle-pakistan-dish-arrangement.jpg"}
                ],
            },
        ],
    },
    {
        slug: "8",
        img: '/Recepies/The Creamiest Creamy Chicken and Bacon Pasta.png',
        video: "https://www.youtube.com/embed/09q_CT-xVlM?si=RJif6BGIEx4g0Qng",
        name: "The Creamiest Creamy Noodles and Bacon Pasta",
        prepTime: "20",
        type: "Vegan",
        cookTime: "30",
        cookName: "Alex Carry",
        cookImg: "/Users/John-Smith.png",
        date: "20 Dec 2022",
        category: "Noodles",
        liked: false,
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quisquam odio, vel ab amet blanditiis nam dicta natus molestias aperiam adipisci officiis nesciunt sapiente. Voluptas dolore quisquam voluptate blanditiis fugit, adipisci esse veniam deleniti, vitae saepe distinctio corporis provident sed culpa quis facilis inventore ipsam. A molestias nam deserunt fuga omnis minus culpa illum aliquam.",
        nutritions: [
            {name: "Calories", count: "240.30 kcal"},
            {name: "Total Fat", count: "32.82 g"},
            {name: "Protein", count: "10.02 g"},
            {name: "Carbohydrate", count: "29.24 g"},
            {name: "Cholesterol", count: "28.04 mg"},
        ],
        ingredients_for_dish: [
            { name: "Vegan noodles" },
            { name: "Vegan bacon strips" },
            { name: "Onions" },
            { name: "Garlic" },
        ],
        ingredients_for_sauce: [
            { name: "Cashew cream" },
            { name: "Nutritional yeast" },
            { name: "Plant milk" },
            { name: "Salt and pepper" },
        ],
        directions: [
            {
                step: "1. Lorem ipsum dolor sit amet",
                stepDetails: [
                    {details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi id alias earum ex corporis, voluptas, natus illo, atque maxime labore suscipit. Modi itaque repellendus sunt sed vel laudantium alias, tempore eum! Debitis eveniet deserunt eaque totam inventore placeat."},
                ],
            },
            {
                step: "2. Lorem ipsum dolor sit amet",
                stepDetails: [
                    {img: "/RecipeDetails/closeup-asian-woman-eating-noodle.jpg"},
                    {details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quisquam odio, vel ab amet blanditiis nam dicta natus molestias aperiam adipisci officiis nesciunt sapiente. Voluptas dolore quisquam voluptate blanditiis fugit."},
                ],
            },
        ],
    },
    {
        slug: "9",
        img: '/Recepies/Savory Sesame Beef Stir-Fry with Vegetables.jpg',
        video: "https://www.youtube.com/embed/0VKk1R5aAUI?si=yktEq16JC4ZTwK1-",
        name: "Savory Sesame Beef Stir-Fry with Vegetables",
        prepTime: "23",
        type: "Non-Veg",
        cookTime: "20",
        cookName: "John Smith",
        cookImg: "/Users/John-Smith.png",
        date: "18 Jan 2024",
        category: "Meat",
        liked: false,
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quisquam odio, vel ab amet blanditiis nam dicta natus molestias aperiam adipisci officiis nesciunt sapiente. Voluptas dolore quisquam voluptate blanditiis fugit, adipisci esse veniam deleniti, vitae saepe distinctio corporis provident sed culpa quis facilis inventore ipsam. A molestias nam deserunt fuga omnis minus culpa illum aliquam.",
        nutritions: [
            {name: "Calories", count: "267.41 kcal"},
            {name: "Total Fat", count: "33.82 g"},
            {name: "Protein", count: "18.40 g"},
            {name: "Carbohydrate", count: "38.19 g"},
            {name: "Cholesterol", count: "28.70 mg"},
        ],
        ingredients_for_dish: [
            { name: "Beef strips" },
            { name: "Bell peppers" },
            { name: "Broccoli" },
            { name: "Carrots" },
        ],
        ingredients_for_sauce: [
            { name: "Soy sauce" },
            { name: "Sesame oil" },
            { name: "Brown sugar" },
            { name: "Garlic" },
        ],
        directions: [
            {
                step: "1. Lorem ipsum dolor sit amet",
                stepDetails: [
                    {details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quisquam odio, vel ab amet blanditiis nam dicta natus molestias aperiam adipisci officiis nesciunt sapiente. Voluptas dolore quisquam voluptate blanditiis fugit."},
                    {img: "/RecipeDetails/Savory Sesame Beef Stir-Fry with Vegetables.jpg"},
                    {details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quisquam odio, vel ab amet blanditiis nam dicta natus molestias aperiam adipisci officiis nesciunt sapiente. Voluptas dolore quisquam voluptate blanditiis fugit."},
                ],
            },
            {
                step: "2. Lorem ipsum dolor sit amet",
                stepDetails: [
                    {details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi id alias earum ex corporis, voluptas, natus illo, atque maxime labore suscipit. Modi itaque repellendus sunt sed vel laudantium alias, tempore eum! Debitis eveniet deserunt eaque totam inventore placeat."},
                ],
            },
        ],
    },
    {
        slug: "10",
        img: '/Recepies/Mediterranean Garden Salad with Feta & Olives.jpg',
        video: "https://www.youtube.com/embed/E_AKsQc08-0?si=OCcAszi_SxlOVDK7",
        name: "Mediterranean Garden Salad with Feta & Olives",
        prepTime: "25",
        type: "Vegan",
        cookTime: "20",
        cookName: "Jack Doe",
        cookImg: "/Users/John-Smith.png",
        date: "15 Feb 2020",
        category: "Healthy",
        liked: false,
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quisquam odio, vel ab amet blanditiis nam dicta natus molestias aperiam adipisci officiis nesciunt sapiente. Voluptas dolore quisquam voluptate blanditiis fugit, adipisci esse veniam deleniti, vitae saepe distinctio corporis provident sed culpa quis facilis inventore ipsam. A molestias nam deserunt fuga omnis minus culpa illum aliquam.",
        nutritions: [
            {name: "Calories", count: "208.01 kcal"},
            {name: "Total Fat", count: "28.82 g"},
            {name: "Protein", count: "11.40 g"},
            {name: "Carbohydrate", count: "32.13 g"},
            {name: "Cholesterol", count: "29.04 mg"},
        ],
        ingredients_for_dish: [
            { name: "Mixed greens" },
            { name: "Cucumber" },
            { name: "Feta cheese" },
            { name: "Kalamata olives" },
        ],
        ingredients_for_sauce: [
            { name: "Olive oil" },
            { name: "Lemon juice" },
            { name: "Oregano" },
            { name: "Salt and pepper" },
        ],
        directions: [
            {
                step: "1. Lorem ipsum dolor sit amet",
                stepDetails: [
                    {details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quisquam odio, vel ab amet blanditiis nam dicta natus molestias aperiam adipisci officiis nesciunt sapiente."},
                    {img: "/RecipeDetails/Mediterranean Garden Salad with Feta & Olives-1.jpg"},
                    {details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quisquam odio, vel ab amet blanditiis nam dicta natus molestias aperiam adipisci officiis nesciunt sapiente. Voluptas dolore quisquam voluptate blanditiis fugit."},
                ],
            },
            {
                step: "2. Lorem ipsum dolor sit amet",
                stepDetails: [
                    {details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi id alias earum ex corporis, voluptas, natus illo, atque maxime labore suscipit. Modi itaque repellendus sunt sed vel laudantium alias, tempore eum! Debitis eveniet deserunt eaque totam inventore placeat."},
                ],
            },
            {
                step: "3. Lorem ipsum dolor sit amet",
                stepDetails: [
                    {details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quisquam odio, vel ab amet blanditiis nam dicta natus molestias aperiam adipisci officiis nesciunt sapiente."},
                    {img: "/RecipeDetails/Mediterranean Garden Salad with Feta & Olives-2.jpg"},
                    {details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi id alias earum ex corporis, voluptas, natus illo, atque maxime labore suscipit. Modi itaque repellendus sunt sed vel laudantium alias, tempore eum! Debitis eveniet deserunt eaque totam inventore placeat."},
                ],
            },
        ],
    },
    {
        slug: "11",
        img: '/Recepies/Beef Shawarma Wrap with Spinach Pita.jpg',
        video: "https://www.youtube.com/embed/xzS5hnLLwmA?si=Dha78k6b2M8EZY4P",
        name: "Beef Shawarma Wrap with Spinach Pita",
        prepTime: "30",
        type: "Non-Veg",
        cookTime: "10",
        cookName: "Jack Doe",
        cookImg: "/Users/John-Smith.png",
        date: "20 Jan 2025",
        category: "Meat",
        liked: false,
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quisquam odio, vel ab amet blanditiis nam dicta natus molestias aperiam adipisci officiis nesciunt sapiente. Voluptas dolore quisquam voluptate blanditiis fugit, adipisci esse veniam deleniti, vitae saepe distinctio corporis provident sed culpa quis facilis inventore ipsam. A molestias nam deserunt fuga omnis minus culpa illum aliquam.",
        nutritions: [
            {name: "Calories", count: "297.24 kcal"},
            {name: "Total Fat", count: "36.49 g"},
            {name: "Protein", count: "16.42 g"},
            {name: "Carbohydrate", count: "43.91 g"},
            {name: "Cholesterol", count: "29.20 mg"},
        ],
        ingredients_for_dish: [
            { name: "Beef strips" },
            { name: "Spinach pita bread" },
            { name: "Lettuce" },
            { name: "Tomato" },
        ],
        ingredients_for_sauce: [
            { name: "Garlic" },
            { name: "Yogurt" },
            { name: "Lemon juice" },
        ],
        directions: [
            {
                step: "1. Lorem ipsum dolor sit amet",
                stepDetails: [
                    {details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quisquam odio, vel ab amet blanditiis nam dicta natus molestias aperiam adipisci officiis nesciunt sapiente. Voluptas dolore quisquam voluptate blanditiis fugit."},
                    {img: "/RecipeDetails/Beef Shawarma Wrap with Spinach Pita.jpg"},
                    {details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quisquam odio, vel ab amet blanditiis nam dicta natus molestias aperiam adipisci officiis nesciunt sapiente."},
                ],
            },
            {
                step: "2. Lorem ipsum dolor sit amet",
                stepDetails: [
                    {details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi id alias earum ex corporis, voluptas, natus illo, atque maxime labore suscipit. Modi itaque repellendus sunt sed vel laudantium alias, tempore eum! Debitis eveniet deserunt eaque totam inventore placeat."},
                ],
            },
        ],
    },
    {
        slug: "12",
        img: '/Recepies/Zesty Tacos with Signature Sauce.jpg',
        video: "https://www.youtube.com/embed/KJxOzeivt_o?si=f-yjGCsuHCjNW7zk",
        name: "Zesty Tacos with Signature Sauce",
        prepTime: "30",
        type: "Vegan",
        cookTime: "15",
        cookName: "Alex Carry",
        cookImg: "/Users/John-Smith.png",
        date: "10 May 2022",
        category: "Tacos",
        liked: false,
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quisquam odio, vel ab amet blanditiis nam dicta natus molestias aperiam adipisci officiis nesciunt sapiente. Voluptas dolore quisquam voluptate blanditiis fugit, adipisci esse veniam deleniti, vitae saepe distinctio corporis provident sed culpa quis facilis inventore ipsam. A molestias nam deserunt fuga omnis minus culpa illum aliquam.",
        nutritions: [
            {name: "Calories", count: "250.70 kcal"},
            {name: "Total Fat", count: "30.12 g"},
            {name: "Protein", count: "8.51 g"},
            {name: "Carbohydrate", count: "28.30 g"},
            {name: "Cholesterol", count: "30.20 mg"},
        ],
        ingredients_for_dish: [
            { name: "Taco shells" },
            { name: "Black beans" },
            { name: "Corn" },
            { name: "Lettuce" },
        ],
        ingredients_for_sauce: [
            { name: "Vegan mayo" },
            { name: "Hot sauce" },
            { name: "Lime juice" },
        ],
        directions: [
            {
                step: "1. Lorem ipsum dolor sit amet",
                stepDetails: [
                    {details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quisquam odio, vel ab amet blanditiis nam dicta natus molestias aperiam adipisci officiis nesciunt sapiente. Voluptas dolore quisquam voluptate blanditiis fugit."},
                    {details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quisquam odio, vel ab amet blanditiis nam dicta natus molestias aperiam adipisci officiis nesciunt sapiente."},
                ],
            },
            {
                step: "2. Lorem ipsum dolor sit amet",
                stepDetails: [
                    {img: "/RecipeDetails/Zesty Tacos with Signature Sauce.jpg"},
                    {details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi id alias earum ex corporis, voluptas, natus illo, atque maxime labore suscipit. Modi itaque repellendus sunt sed vel laudantium alias, tempore eum! Debitis eveniet deserunt eaque totam inventore placeat."},
                ],
            },
            {
                step: "3. Lorem ipsum dolor sit amet",
                stepDetails: [
                    {details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quisquam odio, vel ab amet blanditiis nam dicta natus molestias aperiam adipisci officiis nesciunt sapiente."},
                ],
            },
        ],
    },
]

const RecipeProvider = ( {children} ) => {

    const [recipe, setRecipe] = useState(recipeData);

  return (
    <RecipeContext.Provider value={{recipe, setRecipe}}>
        {children}
    </RecipeContext.Provider>
  )
}

export default RecipeProvider