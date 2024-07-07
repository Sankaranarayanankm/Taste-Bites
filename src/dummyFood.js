const foodItems = [
  {
    id: 1,
    category: "Desserts",
    name: "Chocolate Lava Cake",
    ingredients: `
      - 1/2 cup unsalted butter
      - 4 oz dark chocolate, chopped
      - 1 cup powdered sugar
      - 2 large eggs
      - 2 large egg yolks
      - 1 tsp vanilla extract
      - 1/2 cup all-purpose flour
      - Pinch of salt
    `,
    preparationInstructions: `
      1. Preheat oven to 425°F (220°C). Grease 4 ramekins and place on a baking sheet.
      2. Melt the butter and chocolate in a microwave-safe bowl, stirring until smooth.
      3. Stir in the powdered sugar until well combined.
      4. Whisk in the eggs, egg yolks, and vanilla extract.
      5. Fold in the flour and salt until just combined.
      6. Divide the batter evenly among the ramekins.
      7. Bake for 12-14 minutes, until the edges are firm but the centers are still soft.
      8. Let cool for 1 minute, then run a knife around the edges to loosen and invert onto plates.
      9. Serve warm with ice cream or whipped cream.
    `,
    price: "6.00",
    image:
      "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 2,
    category: "Breakfast",
    name: "Avocado Toast",
    ingredients: `
      - 1 ripe avocado
      - 2 slices of whole grain bread
      - 1 tbsp olive oil
      - 1/2 tsp sea salt
      - 1/4 tsp black pepper
      - 1/4 tsp red pepper flakes
      - 1 tsp lemon juice
      - Optional toppings: cherry tomatoes, radishes, microgreens
    `,
    preparationInstructions: `
      1. Toast the bread slices to your desired level of crispiness.
      2. While the bread is toasting, cut the avocado in half, remove the pit, and scoop the flesh into a bowl.
      3. Mash the avocado with a fork, mixing in the olive oil, sea salt, black pepper, red pepper flakes, and lemon juice.
      4. Spread the mashed avocado evenly onto the toasted bread slices.
      5. Add any optional toppings as desired.
      6. Serve immediately.
    `,
    price: "4.50",
    image: "https://example.com/avocado_toast.jpg",
  },
  {
    id: 3,
    category: "Dinner",
    name: "Grilled Salmon",
    ingredients: `
      - 4 salmon fillets
      - 2 tbsp olive oil
      - 1 tbsp lemon juice
      - 2 cloves garlic, minced
      - 1 tsp salt
      - 1/2 tsp black pepper
      - 1 tbsp fresh dill, chopped
      - Lemon wedges, for serving
    `,
    preparationInstructions: `
      1. Preheat the grill to medium-high heat.
      2. In a small bowl, whisk together the olive oil, lemon juice, garlic, salt, and pepper.
      3. Brush the salmon fillets with the mixture, ensuring they are well coated.
      4. Place the salmon fillets on the grill, skin side down, and cook for 4-5 minutes per side, or until the salmon is opaque and flakes easily with a fork.
      5. Remove from the grill and sprinkle with fresh dill.
      6. Serve with lemon wedges.
    `,
    price: "15.00",
    image:
      "https://www.thecookierookie.com/wp-content/uploads/2023/05/grilled-salmon-recipe-2-960x1200.jpg",
  },
  {
    id: 4,
    category: "Vegetarian",
    name: "Veggie Stir-Fry",
    ingredients: `
      - 2 tbsp vegetable oil
      - 1 red bell pepper, sliced
      - 1 yellow bell pepper, sliced
      - 1 broccoli head, cut into florets
      - 1 carrot, sliced
      - 1 zucchini, sliced
      - 2 cloves garlic, minced
      - 1 tbsp soy sauce
      - 1 tbsp hoisin sauce
      - 1 tsp sesame oil
      - 1 tsp cornstarch mixed with 2 tbsp water
      - Cooked rice, for serving
    `,
    preparationInstructions: `
      1. Heat the vegetable oil in a large skillet or wok over medium-high heat.
      2. Add the garlic and stir-fry for 30 seconds until fragrant.
      3. Add the bell peppers, broccoli, carrot, and zucchini to the skillet. Stir-fry for 5-7 minutes until the vegetables are tender-crisp.
      4. In a small bowl, mix the soy sauce, hoisin sauce, sesame oil, and cornstarch mixture.
      5. Pour the sauce over the vegetables and stir to coat.
      6. Cook for another 1-2 minutes until the sauce has thickened.
      7. Serve the stir-fry over cooked rice.
    `,
    price: "8.00",
    image: "https://example.com/veggie_stir_fry.jpg",
  },
  {
    id: 5,
    category: "Seafood",
    name: "Shrimp Scampi",
    ingredients: `
      - 1 lb large shrimp, peeled and deveined
      - 3 tbsp unsalted butter
      - 2 tbsp olive oil
      - 4 cloves garlic, minced
      - 1/4 tsp red pepper flakes
      - 1/4 cup dry white wine
      - 1 tbsp lemon juice
      - 1/4 cup chopped parsley
      - Salt and pepper, to taste
      - Cooked pasta, for serving
    `,
    preparationInstructions: `
      1. Heat the butter and olive oil in a large skillet over medium-high heat.
      2. Add the garlic and red pepper flakes, and sauté for 1 minute until fragrant.
      3. Add the shrimp and cook for 2-3 minutes on each side until pink and opaque.
      4. Remove the shrimp from the skillet and set aside.
      5. Add the white wine and lemon juice to the skillet, scraping up any browned bits from the bottom.
      6. Simmer for 2 minutes, then return the shrimp to the skillet.
      7. Toss the shrimp in the sauce and sprinkle with chopped parsley.
      8. Season with salt and pepper to taste.
      9. Serve over cooked pasta.
    `,
    price: "12.00",
    image: "https://example.com/shrimp_scampi.jpg",
  },
  {
    id: 6,
    category: "Street Food",
    name: "Tacos",
    ingredients: `
      - 1 lb ground beef or chicken
      - 1 packet taco seasoning
      - 1/2 cup water
      - 8 small corn or flour tortillas
      - 1 cup shredded lettuce
      - 1 cup diced tomatoes
      - 1/2 cup shredded cheese
      - 1/4 cup sour cream
      - 1/4 cup salsa
    `,
    preparationInstructions: `
      1. Cook the ground beef or chicken in a large skillet over medium heat until browned and cooked through.
      2. Drain any excess fat.
      3. Add the taco seasoning and water to the skillet, stirring to combine.
      4. Simmer for 5 minutes until the sauce has thickened.
      5. Warm the tortillas in a dry skillet or microwave.
      6. Fill each tortilla with the seasoned meat, shredded lettuce, diced tomatoes, shredded cheese, sour cream, and salsa.
      7. Serve immediately.
    `,
    price: "10.00",
    image: "https://example.com/tacos.jpg",
  },
];

export default foodItems;
