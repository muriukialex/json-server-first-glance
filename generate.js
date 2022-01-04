//this module exports the function below
module.exports = () => {
  const _ = require("lodash")
  const faker = require("faker")

  return {
    people: _.times(100, (n) => {
      return {
        id: n,
        name: faker.name.findName(),
        avatar: faker.internet.avatar(),
      }
    }),
  }
}
