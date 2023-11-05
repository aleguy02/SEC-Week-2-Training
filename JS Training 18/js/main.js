// JSON sends and receives data
// It is a text format that is language independent

const myObj = {
  name: 'Dave',
  hobbies: ['eat', 'sleep', 'code'],
  hello: function () {
    console.log('Hello!')
  }
}
console.log(myObj)
console.log(myObj.name)
myObj.hello()
console.log(typeof myObj)

const sendJSON = JSON.stringify(myObj)
console.log(sendJSON)
console.log(typeof sendJSON)

const receiveJSON = JSON.parse(sendJSON)
console.log(receiveJSON)