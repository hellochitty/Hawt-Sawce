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
secret_aardvark = SauceCompany.create(name: 'Secret Aardvark')
tabasco = SauceCompany.create(name: 'TABASCO')
cholula = SauceCompany.create(name: 'Cholula')
tapatio = SauceCompany.create(name: 'Tapatio')
huy_fong = SauceCompany.create(name: 'Huy Fong')
bravado = SauceCompany.create(name: 'Bravado Spice Co.')
nandos = SauceCompany.create(name: "Nando's")
el_yucateco = SauceCompany.create(name: "El Yucateco")


Sauce.destroy_all
sriracha = Sauce.create(name: "Sriracha", description: "Our most popular sauce. Created from sun ripened chilies into a smooth paste we have captured its flavor in a convenient squeeze bottle that is easy to use.", scoville_units: 2200, image_url: "http://assets.bonappetit.com/photos/57e187987c2b8d7760781c75/master/w_1200,c_limit/maar-sriracha-recipes-intro-v.jpg", company_id: huy_fong.id)

tabasco = Sauce.create(name: "Original Red", description: "TABASCO® brand Original Red Sauce owes much of its unique, pungent flavor to the handcrafted way it’s been made for over 140 years. Equally important is the heart of the one family who created this world-famous sauce as a labor of love.", scoville_units: 2500, image_url: "http://images.selfridges.com/is/image/selfridges/554-78042186-200318_M?$PDP_M_ALL$", company_id: tabasco.id)

yucateco_green = Sauce.create(name: "Salsa Picante de Chile Habanero Green", description: "From Merida, Yucatan, Mexico, this is the hotter of the two original El Yucateco colors. Elaborated with another of our classic recipes based on green habanero peppers, garlic and spices. This special blend of ingredients gives a fresh, home flavor to the meals.", scoville_units:  8910, image_url: "https://cdn3.volusion.com/pvqf3.cnxy3/v/vspfiles/photos/1117-2.jpg", company_id: el_yucateco.id)
