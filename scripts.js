const testNum = (num) => {
    return new Promise(function(resolve, reject) {
        if(num >= 10) {
            resolve(`${num} is greater than 10, success!`)
        } else {
            reject(`${num} is less than 10, error!`)
        }
    })
}

testNum(15)
  .then(result => console.log(result))
  .catch(error => console.log(error))

testNum(5)
  .then(result => console.log(result))
  .catch(error => console.log(error))

const makeAllCaps = (array) => {
    const isString = (val) => {
        if(typeof val === 'string'){
            return val
        }
    }
    return new Promise(function(resolve, reject) {
        if(array.every(isString)){
            resolve(array.map(word => word.toUpperCase()))
        } else {
            reject('No, the array you passed in contained an element that was not a string!')
        }
    })
}

const sortWords = (array) => {
    return new Promise(function(resolve, reject) {
        if(array) {
            resolve([...array].sort())
        } else {
            reject('ya fucked up')
        }
    })
}

makeAllCaps(['wowow', 'pants', 'bird'])
  .then(words => sortWords(words))
  .then(result => console.log(result))
  .catch(error => console.log(error))

makeAllCaps(['wowow', 5, 'bird'])
  .then(words => sortWords(words))
  .then(result => console.log(result))
  .catch(error => console.log(error))