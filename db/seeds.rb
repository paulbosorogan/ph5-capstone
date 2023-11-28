# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
Item.destroy_all
User.destroy_all

puts 'Seeding data 📝'

admin = User.create(
    name: "admin",
    email: "admin@admin.com",
    address: "33 Admin Street, New York",
    phone: "999-999-9999",
    password: "100"
)


array = [
    {
        id: 1,
        name: "Fortune Poke Bowl",
        category: 'bowl',
        description: "Ahi Tuna (Raw), Salmon (Raw), seaweed salad, cucumber, edamame, kale, corn, pickled ginger, sesame seed, crispy onion with signature fortune bowl sauce.",
        price: 12.95,
    },
    {
        id: 2,
        name: "Ponzu Poke Bowl",
        category: 'bowl',
        description: "Ahi Tuna (Raw), Salmon (Raw), seaweed salad, cucumber, edamame, kale, corn, pickled ginger, sesame seed, crispy onion with ponzu sauce.",
        price: 12.95,
    },
    {
        id: 3,
        name: "Ahi Tuna Avocado Bowl",
        category: 'bowl',
        description: "Ahi Tuna (Raw), seaweed salad, cucumber, edamame, corn, avocado, sesame seed with spicy mayo sauce.",
        price: 14.50,
    },
    {
        id: 4,
        name: "Salmon Avocado Bowl",
        category: 'bowl',
        description: "Salmon (Raw), seaweed salad, cucumber, edamame, corn, avocado, sesame seed with ponzu sauce.",
        price: 14.50,
    },
    {
        id: 5,
        name: "Spice Beef Bowl",
        description: "Prime beef, charred broccoli, roasted sweet potato, cucumber, edamame, corn, sesame seed with teriyaki sauce.",
        price: 12.95,
        category: 'bowl',
    },
    {
        id: 6,
        name: "Herb Roasted Chicken Bowl",
        description: "Herb roasted chicken breast, charred broccoli, cucumber, edamame, corn, kale, sesame seed with roasted garlic sauce.",
        price: 12.95,
        category: 'bowl',
    },
    {
        id: 7,
        name: 'Charred Chicken Bowl',
        category: 'bowl',
        description: "Charred chicken thigh, charred broccoli, roasted sweet potato, cucumber, edamame, com, sesame seed with spicy mayo.",
        price: 12.95,
    },
    {
        id: 8,
        name: 'Chili Fusion Bowl',
        category: 'bowl',
        description: "Prime beef and charred chicken thigh, charred broccoli, cucumber, edamame, corn, sesame seed with chili garlic sauce.",
        price: 12.95,
    },
    {
        id: 9,
        name: 'Grilled Salmon Bowl',
        category: 'bowl',
        description: "Grilled Salmon, charred broccoli, roasted sweet potato, cucumber, edamame, corn, sesame seed with teriyaki sauce.",
        price: 14.95,
    },
    {
        id: 10,
        name: 'Grilled Shrimp Bowl',
        category: 'bowl',
        description: "Grilled Shrimp, charred broccoli, roasted sweet potato, cucumber, edamame, corn, sesame seed with roasted garlic sauce.",
        price: 12.95,
    },
    {
        id: 11,
        name: 'Classic Tofu Bowl',
        category: 'bowl',
        description: "Seared tofu, charred broccoli, cucumber, edamame, corn, kale, roasted sweet potato, sesame seed with teriyaki sauce.",
        price: 11.95,
    },
    {
        id: 12,
        name: 'Daily Harvest Bowl',
        category: 'bowl',
        description: "Charred broccoli, cucumber, edamame, corn kale, tomato, roasted sweet potato, sesame seed with roasted garlic sauce.",
        price: 11.95,
    }, 
    # noodle soups
    {
        id: 13,
        name: 'Prime Beef Ramen Noodle Soup',
        category: 'soup',
        description: "Japanese ramen noodle with tonkotsu soup base. Contains prime beef, spinach, corn, cilantro, onion crispy, scallions.",
        price: 12.95,
    },
    {
        id: 14,
        name: 'Charred Chicken Ramen Noodle Soup',
        category: 'soup',
        description: "Japanese ramen noodle with tonkotsu soup base. Contains charred chicken, spinach, corn, cilantro, onion crispy, scallions.",
        price: 12.95,
    },
    {
        id: 15,
        name: 'Beef and Shrimp Ramen Noodle Soup',
        category: 'soup',
        description: "Japanese ramen noodle with tonkotsu soup base. Contains prime beef, grilled shrimp, spinach, corn, cilantro, onion crispy, scallions.",
        price: 13.95,
    },
    # ramen
    {
        id: 16,
        name: 'Prime Beef Ramen Noodle',
        category: 'ramen',
        description: "Japanese ramen noodle. Contains prime beef, cucumber, corn, tomatoes, cilantro, scallions, sesame seed with garlic chili sauce",
        price: 12.95,
    },
    {
        id: 17,
        name: 'Charred Chicken Ramen Noodle',
        category: 'ramen',
        description: "Japanese ramen noodle. Contains charred chicken, cucumber, corn, tomatoes, cilantro, scallions, sesame seed with garlic chili sauce.",
        price: 12.95,
    },
    {
        id: 18,
        name: 'Grilled Shrimp Ramen Noodle',
        category: 'ramen',
        description: "Japanese ramen noodle. Contains grilled shrimp, cucumber, corn, tomatoes, cilantro, scallions, sesame seed with garlic chili sauce.",
        price: 13.95,
    },
    {
        id: 19,
        name: 'Grilled Salmon Ramen Noodle',
        category: 'ramen',
        description: "Japanese ramen noodle. Contains grilled salmon, cucumber, corn, tomatoes, cilantro, scallions, sesame seed with garlic chili sauce.",
        price: 14.95,
    },
    # scallion pancakes
    {
        id: 20,
        name: 'Chicken Scallion Pancake Wrap',
        category: 'pancake',
        description: "Our signature flaky, crispy scallion pancake filled with roasted chicken thigh, sauted onions, pickled carrots, fresh cucumbers, lettuce, and sesame seed. Your choice of sauce on the side.",
        price: 5.95,
    },
    {
        id: 21,
        name: 'Beef Scallion Pancake Wrap',
        category: 'pancake',
        description: "Our signature flaky, crispy scallion pancake filled with prime beef, sauted onions, pickled carrots, fresh cucumbers, lettuce, and sesame seed. Your choice of sauce on the side.",
        price: 6.95,
    },
    {
        id: 22,
        name: 'Shrimp Scallion Pancake Wrap',
        category: 'pancake',
        description: "Our signature flaky, crispy scallion pancake filled with grilled shrimp, sauted onions, pickled carrots, fresh cucumbers, lettuce, and sesame seed. Your choice of sauce on the side.",
        price: 6.95,
    },
    # sides
    {
        id: 23,
        name: 'Scallion Beef Roll',
        category: 'side',
        description: "Contains beef, cheese, lettuce, tomato, cucumber, carrot. Sliced in five pieces, served with special sauce.",
        price: 8.95,
    },
    {
        id: 24,
        name: 'Edamame',
        category: 'side',
        description: "Broiled soybean served hot.",
        price: 5,
    },
    {
        id: 25,
        name: 'Gyoza',
        category: 'side',
        description: "6 piece pan-fried pork dumplings.",
        price: 6,
    },
    {
        id: 26,
        name: 'Shumai',
        category: 'side',
        description: "6 pieces shrimp dumplings.",
        price: 6,
    },
    {
        id: 27,
        name: 'Pork Dumplings',
        category: 'side',
        description: "10 pieces dumplings in chili oil with scallions.",
        price: 7.95,
    },
    {
        id: 28,
        name: 'Scallion Pancake',
        category: 'side',
        description: "4 piece.",
        price: 5,
    },
    {
        id: 29,
        name: 'Miso Soup',
        category: 'side',
        description: "Japanese soup consisting of a dashi stock into which softened miso paste is mixed.",
        price: 2,
    },
    #drinks 
    {
        id: 30,
        name: 'Soda',
        category: 'drink',
        description: "Cold beverage.",
        price: 1.5,
    },
    {
        id: 31,
        name: 'Bottled Water',
        category: 'drink',
        description: "Mineral water.",
        price: 1.5,
    },
    {
        id: 32,
        name: 'Calpico',
        category: 'drink',
        description: "Japanese non-carbonated soft drink.",
        price: 2.5,
    },
    {
        id: 33,
        name: 'Bottled Jasmine Green Tea',
        category: 'drink',
        description: "Unsweetened.",
        price: 3,
    },
    {
        id: 34,
        name: 'Bottled Green Tea',
        category: 'drink',
        description: "Unsweetened.",
        price: 3,
    }
]


array.each do |o|
    Item.create!(name: o[:name], category: o[:category], 
    description: o[:description], price: o[:price])
end

u1 = User.create(
    name: "test",
    email: "test@test.com",
    address: "33 Admin Street, New York",
    phone: "999-999-9999",
    password: "test"
)

order1 = Order.create(
    user_id: u1.id
)

order_item1 = OrderItem.create(
    order_id: order1.id,
    item_id: Item.first.id,
    quantity: 3
)

order_item2 = OrderItem.create(
    order_id: order1.id,
    item_id: Item.second.id,
    quantity: 2
)
order_item3 = OrderItem.create(
    order_id: order1.id,
    item_id: Item.third.id,
    quantity: 1
)

puts 'Seeding complete ✅'