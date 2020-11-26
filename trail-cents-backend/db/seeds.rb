# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


events = 
    [{
        title: "Rocktown Trail Day",
        lat: 35.67,
        long: -85.39,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: Date.new(2020, 12, 15),
        category: "trail",
        start: Time.new(2020, 12, 15, 8, 0,0, '-05:00'),
        end:  Time.new(2020, 12, 15, 12,0,0, '-05:00'),
        duration: 4,
        img_src: "https://es.pinkbike.org/246/sprt/i/trailforks/trailforks_avatar.png"
    },
    {
        title: "Hells Kitchen Trail Day",
        lat: 35.46,
        long: -85.10,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: Date.new(2021, 1, 15),
        category: "trail",
        start: Time.new(2020, 12, 15, 8, 0,0, '-05:00'),
        end:  Time.new(2020, 12, 15, 12,0,0, '-05:00'),
        duration: 4,
        img_src: "https://es.pinkbike.org/246/sprt/i/trailforks/trailforks_avatar.png"
    },
    {
        title: "Dogwood Trail Day",
        lat: 35.50,
        long: -85.08,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: Date.new(2020, 12, 13),
        category: "trail",
        start: Time.new(2020, 12, 15, 7, 30,0, '-05:00'),
        end:  Time.new(2020, 12, 15, 12,0,0, '-05:00'),
        duration: 4.5,
        img_src: "https://es.pinkbike.org/246/sprt/i/trailforks/trailforks_avatar.png"
    },
    {
        title: "Stone Fort Trail Day",
        lat: 35.25,
        long: -85.22,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: Date.new(2020, 12, 12),
        category: "trail",
        start: Time.new(2020, 12, 15, 9, 0,0, '-05:00'),
        end:  Time.new(2020, 12, 15, 14,0,0, '-05:00'),
        duration: 5,
        img_src: "https://es.pinkbike.org/246/sprt/i/trailforks/trailforks_avatar.png"
    }]

rewards = [
    {
        desc: "Flying Squirrel $50 gift card",
        cost: 20,
        num_available: 5
    },
    {
        desc: "Organic Crash Pad",
        cost: 100,
        num_available: 2
    },
    {
        desc: "climbing shoes",
        cost: 75,
        num_available: 3
    },
    {
        desc: "$20 Clumpies Ice Crema Gift Card",
        cost: 10,
        num_available: 10
    }
]

Event.create(events)
Reward.create(rewards)