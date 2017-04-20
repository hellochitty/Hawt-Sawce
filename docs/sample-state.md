```js
{
  currentUser: {
    id: 1,
    username: "meowth",
    description: "meowth",
  },
  errors: {

  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createSauce: {errors: ["body can't be blank"]},
    createCheckin: {errors: ["body can't be blank"]},
  },
  check_ins: {
    1: {
      id: 1,
      description: "greatest sauce ever",
      overall_rating: 4,
      heat_rating: 5,
      image_url: "/blah/habanero_3.jpg",
      user_id: 1235,
      sauce_id: 7
    }
  },
  sauces: {
    1: {
      id: 5,
      name: "Habanero sauce",
      company: "Secret Aardvark",
      image_url: "/blah/habanero.jpg"
    }
  },
  sauce: {
    id: 5,
    name: "Habanero sauce",
    creator: "Secret Aardvark",
    image_url: "/blah/habanero.jpg"
  }
  companies: [{id: 2, name: Huy Fong}, {id: 3, name: TABASCO}]
}
```
