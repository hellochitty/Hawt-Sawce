# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
User.create(username: 'chithra', password: 'password', email: 'chithra@chithra.com')
User.create(username: 'SPICY', password: 'password', email:'spicy@spicy.com')

SauceCompany.destroy_all
SauceCompany.create(name: 'Secret Aardvark')
SauceCompany.create(name: 'TABASCO')
SauceCompany.create(name: 'Cholula')
SauceCompany.create(name: 'Tapatio')
SauceCompany.create(name: 'Huy Fong')
SauceCompany.create(name: 'Bravado Spice Co.')
SauceCompany.create(name: "Nando's")
