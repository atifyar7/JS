// ++++++++++++++++++++++ Filter function +++++++++++++++++

const myNums= [1,2,3,4,5,6,7,8,9,10]

const newNums= myNums.filter( (nums)=> {
    return nums>=5
} )
// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const NewBooks= books.filter( (bk)=> {
    return bk.genre === "History" && bk.publish>=1990
})

  // console.log(NewBooks);


// +++++++++++++++++++++++ Map Function +++++++++++++++++++

const myArr= [1,2,3,4,5,6,7,8,9,10]

const myNewArr = myArr
                      .map( (num)=> num *10 )
                      .filter( (num)=> num>=50 )
// console.log(myNewArr);

// +++++++++++++++++++++++++++ Reduce Function +++++++++++++++++

const numbers = [1,2,3,4,5]

const newNumber= numbers.reduce( function (acc, currvalue) {
  console.log(`Accumulator is ${acc} and Current value is ${currvalue}`);
  return acc + currvalue
}, 0)
console.log(newNumber);