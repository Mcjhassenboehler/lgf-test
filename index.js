// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./lgf-test
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array){
    let males = _.filter(array, function(customer){
        return customer.gender === 'male';
    })
    return males.length;
}

var femaleCount = function(array){
    let females = _.reduce(array, function(accumulator, current){
        if (current.gender === 'female'){
            accumulator += 1;
        }
        return accumulator
    }, 0)
    return females;
}

var oldestCustomer = function(array){
    let old = _.reduce(array, function(acc, current){
        return current.age > acc.age ? current.name : acc
    })
    return old
}

var youngestCustomer = function(array){
    let young = _.reduce(array, function(acc, current){
        return acc.age < current.age ? acc.name : current;
    })
    return young
}

var averageBalance = function(array){
        // console.log(typeof array[i].balance)
    let completeBalance = _.reduce(array, function(acc, current){
        return acc + current.balance.replace(/[$,]/g, "") / array.length
        }, 0)
    return completeBalance
}

var firstLetterCount = function(array, letter){
    let fritt = _.reduce(array, function(accumulator, current){
        if (current.name[0].toUpperCase() === letter.toUpperCase()){
            accumulator ++
        }
        return accumulator
    }, 0)
    return fritt
}

// Find how many friends of a given customer have names that start with a given letter
var friendFirstLetterCount = function(array, customer, letter){
    for (let j = 0; j < array.length; j++){
        if (array[j].name === customer){
            var friends = _.filter(array, function(customerFriend){
                for (let i = 0; i < customerFriend.friends.length; i++){
                    return customerFriend.friends[i].name.toUpperCase() === letter.toUpperCase()
                }
            })
        }
    }
    return friends.length
}

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;