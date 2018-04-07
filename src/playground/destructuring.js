// console.log('destructuring');

// const book = {
//     title: 'Start with Why',
//     author: 'Simon Sinek',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { title, author } = book;
// const { name: publisherName = 'Self Published' } = book.publisher;

// console.log(`${author} wrote a great book called ${title}! You should check it out.. published by ${publisherName}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [ itemName, , mediumPrice ] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);