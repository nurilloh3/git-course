// const verifyCats = function(catsJane, catsJulia){
//     const shallow = catsJane.slice(1, -1);
//     const full = [...shallow, ...catsJulia]
//     full.forEach(function (cats, num) { 
//         cats > 2 ? console.log(`Кошка № ${num+1} взрослая, ей ${cats} лет `) : console.log(`Кошка № ${num+1} ещё котёнок`);
//      })
// }

// const jane = [4, 5, 3, 11, 6, 2, 4, 1, 5, 9];
// const julia = [2, 4, 5, 1, 13, 2, 15, 8, 3, 7];

// verifyCats(jane, julia)
// console.log(jane);



// const transact = [500, 250, -300, 5000, -850, -110, -170, 1100];
// // const transFilter = transact.filter(item => item > 0);
// // console.log(transFilter);

// const balance = transact.reduce(function(acc, item, index, arr){
//   return acc + item;
// }, 0)

// console.log(balance);

// const min = transact.reduce((acc, item) => acc < item ? acc : item, transact[0])
// console.log(min);

// const getAverageHumanAge = function(catAges){
//     const ages = catAges.map(age => age <= 2 ? age * 10 : age * 7).filter(age => age > 18);
//     return ages.reduce((acc, age) => acc + age, 0) / ages.length
// }


// const getAverageHumanAge = catAges => catAges.map(age => age <= 2 ? age * 10 : age * 7).filter(age => age > 18).reduce((acc, age, index, arr) => acc + age / arr.length, 0);
// console.log(getAverageHumanAge([1, 16, 12, 4, 5, 1, 3, 11, 7, 2]));


// Simply Bank App

// const account1 = {
//   userName: 'Cecil Ireland',
//   transactions: [500, 250, -300, 5000, -850, -110, -170, 1100],
//   interest: 1.5,
//   pin: 1111,
// };

// const account2 = {
//   userName: 'Amani Salt',
//   transactions: [2000, 6400, -1350, -70, -210, -2000, 5500, -30],
//   interest: 1.3,
//   pin: 2222,
// };

// const account3 = {
//   userName: 'Corey Martinez',
//   transactions: [900, -200, 280, 300, -200, 150, 1400, -400],
//   interest: 0.8,
//   pin: 3333,
// };

// const account4 = {
//   userName: 'Kamile Searle',
//   transactions: [530, 1300, 500, 40, 190],
//   interest: 1,
//   pin: 4444,
// };

// const account5 = {
//   userName: 'Oliver Avila',
//   transactions: [630, 800, 300, 50, 120],
//   interest: 1.1,
//   pin: 5555,
// };

// const accounts = [account1, account2, account3, account4, account5];


// // 1-task
// const bankDeposit = accounts.flatMap(trans => trans.transactions).filter(trans => trans > 0).reduce((acc, trans) => acc + trans, 0);
// console.log(bankDeposit);

// //2-task

// const widrawalNum = accounts.flatMap(user => user.transactions).filter(trans => trans <= -500).reduce((acc, trans) => acc + trans, 0);
// console.log(widrawalNum);

// //task-3

// const depositAndwidraw = accounts.flatMap(acc => acc.transactions).reduce((acc, trans) => {
//     trans > 0 ? acc.deposit += trans : acc.withdraw += trans;
//     return acc
// }, {deposit: 0, withdraw: -0});
// console.log(depositAndwidraw);

// const toTitleText = function (text){
//     text = text.split(' ');
//     const titleText = text.map(item => {
//        let itemText = item.trim()
//        itemText = itemText.length > 0 ? itemText[0].toUpperCase() : itemText;
//        return itemText 
//     })
//     console.log(titleText);
//   };
  
//   console.log(toTitleText('Salom mening ismim nurilloh'));

const cats = [
    { catWeight: 3, foodWeight: 20, owners: ['Наташа'] },
    { catWeight: 6, foodWeight: 90, owners: ['Марина', 'Алиса'] },
    { catWeight: 4, foodWeight: 45, owners: ['Алекс', 'Ирина'] },
    { catWeight: 7, foodWeight: 80, owners: ['Борис'] },
   ];

function eda(num){
   return num.recommendet * 0.9 < num.foodWeight && num.foodWeight < num.recommendet * 1.1;
}

let catsEatTooMuchOwners = []
let catsEatTooLittleOwners = []
cats.forEach((item, index, arr) => {
    item.recommendet = item.catWeight * 0.75 * 12
    if(item.owners.includes('Алекс') && eda(item)){
        item.foodWeight > item.recommendet < eda(item) ? console.log('aleksi mushugi kop yevotti') : console.log('aleksi mushugi kam yevotti');
    }
    if(!eda(item)){
        item.foodWeight > item.recommendet ? catsEatTooMuchOwners = catsEatTooMuchOwners.concat(item.owners) : catsEatTooLittleOwners = catsEatTooLittleOwners.concat(item.owners)
    }
});
console.log(cats);
console.log(`${catsEatTooMuchOwners.join(',')} - хозяева кошек, которые едят слишком много! и ${catsEatTooLittleOwners.join(',')}  - хозяева кошек, которые едят слишком мало!"`);
console.log(cats.some(item => item.foodWeight == item.recommendet));
console.log(cats.some(item => eda(item)));

const shalloy = cats.map(item => item).sort((a,b) => {
    return a.recommendet - b.recommendet
});
console.log(shalloy);


// const barcode = []
// for(let i = 0; i < 500000; i++){
//     barcode.push(i);
// }

// console.log(barcode);
// console.log(barcode.includes(235836));
console.log('Hello GitHub');