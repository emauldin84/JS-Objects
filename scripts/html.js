
    const addressBook = {
        DigitalCrafts: {
            phone: '404-123-1234', 
            address: '3423 Piedmont', 
            city: 'Atlanta',
        },
        "Chris Aquino": {
            phone: '404-999-1234', 
            address: '3421 Piedmont', 
            city: 'Atlanta',
        },
    };
// function printEntries(book) {
//     const allTheKeys = Object.keys(book);

//     allTheKeys.forEach(function (stringKey) {
//         let entry = book[stringKey];
//         console.log(entry);
//     });
    
// }

function printEntries(book, item) {
    const allTheKeys = Object.keys(book);

    allTheKeys.forEach(function (stringKey) {
        let entry = book[stringKey];
        console.log(entry[item]);
    });
    
}