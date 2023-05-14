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
    return _.reduce(array, function(accumulator, current){
        if (current.name[0].toUpperCase() === letter.toUpperCase()){
            accumulator ++
        }
        return accumulator
    }, 0)
}

// Find how many friends of a given customer have names that start with a given letter
var friendFirstLetterCount = function(array, customer, letter){
    const customer1 = _.find(array, (customerObj) => customerObj.name === customer)
    const friendsLetter = _.filter(customer1.friends, (finder) => finder.name[0].toUpperCase() === letter.toUpperCase())
    return friendsLetter.length
}

// Find the customers' names that have a given customer's name in their friends list
// I can use .map to return an array of names but how to find all customers that are friends with <name>
/**
 * 
 *  need to iterate thru the arrays to see which array[i].friends.name === <name>
 *  if true, push array[i].name to an empty array and return it
 * 
 */


var friendsCount = function(array, name){
    return _.map(_.filter(array, (customer) => _.find(customer.friends, (friend) => friend.name === name)),
     (obj) => obj.name)
}

// Find the three most common tags among all customers' associated tags
// returns an array
// should find three of the top tags
var topThreeTags = function(array){
    const tagMap = {};
    _.forEach(array, function(item){
       _.forEach(item.tags,function(tag){
          tagMap[tag] = (tagMap[tag] || 0 ) + 1;
       })
    //    console.log(tagMap);
    });
    let sortable = [];
    for (var key in tagMap) {
        sortable.push([key, tagMap[key]]);
    }
    // console.log(sortable)
    sortable.sort(function(a, b) {
        return b[1] - a[1];
    })
    // console.log(sortable)
    let three3s = [];
    three3s.push(sortable[0][0], sortable[1][0], sortable[2][0])
    return three3s
}

// Create a summary of genders, the output should be:
// should return an object
// should return a summary of customer genders
// use reduce
/*
{
    male: 3,
    female: 4,
    non-binary: 1
}
*/

var genderCount = function(array){
    return _.reduce(array, function(acc, current){
        const gender = current.gender;
        if (acc[gender]){
            acc[gender] ++
        } else {
            acc[gender] = 1
        }
        return acc
    }, {})
}

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