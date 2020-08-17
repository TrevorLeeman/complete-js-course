// Asynchronous concepts
// const second = () => {
//     setTimeout(() => {
//         console.log('Async');
//     }, 1000)
// }

// const first = () => {
//     console.log('Hey there');
//     second();
//     console.log('The end');
// }

// first();



// Callback hell
// function getRecipe() {
//     setTimeout(() => {
//         const recipeID = [523, 883, 432, 974];
//         console.log(recipeID);

//         setTimeout((id) => {
//             const recipe = {
//                 title: 'Fresh tomato pasta',
//                 publisher: 'Trevor'
//             }
//             console.log(`${id}: ${recipe.title}`)

//             setTimeout(publisher => {
//                 const recipe = {
//                     title: 'Italian Pizza',
//                     publisher: 'Trevor'
//                 }
//                 console.log(recipe.publisher);
//             }, 1500, recipe.publisher)
//         }, 1500, recipeID[2]);
//     }, 1500);
// }

// getRecipe();



// Promises
// const getIDs = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve([523, 883, 432, 974]);
//     }, 1500)
// });

// const getRecipe = recipeID => {
//     return new Promise((resolve, reject) => {
//         setTimeout(ID => {
//             const recipe = {
//                 title: 'Fresh tomato pasta',
//                 publisher: 'Trevor'
//             }
//             resolve(`${ID}: ${recipe.title}`);
//         }, 1500, recipeID)
//     })
// }

// const getRelated = publisher => {
//     return new Promise((resolve, reject) => {
//         setTimeout(pub => {
//             const recipe = {
//                 title: 'Italian Pizza',
//                 publisher: 'Trevor'
//             }
//             resolve(`${pub}'s ${recipe.title}`);
//         }, 1500, publisher)
//     })
// }

// getIDs
// .then(IDs => {
//     console.log(IDs);
//     return getRecipe(IDs[2]);
// })
// .then(recipe => {
//     console.log(recipe);
//     return getRelated('Trevor')
// })
// .then(related => {
//     console.log(related);
// })
// .catch(error => {
//     console.log('Error occured');
// })

// async function getRecipesAW(){
//     const IDs = await getIDs;
//     console.log(IDs);
//     const recipe = await getRecipe(IDs[2]);
//     console.log(recipe);
//     const related = await getRelated('Trevor');
//     console.log(related);

//     return recipe;
// }

// getRecipesAW().then(recipe => console.log(recipe));

// function getWeather(woeid){
//     fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`)
//         .then(result => {
//             console.log(result);
//             return result.json();
//         })
//         .then(data => {
//             const today = data.consolidated_weather[0];
//             console.log(`Temperatures in ${data.title} stay between ${today.min_temp}C and ${today.max_temp}C today`);
//         })
//         .catch(error => {
//             console.log(error);
//         });
// }

// async function getWeather(woeid){
//     try{
//         const result = await (await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`));
//         const data = await result.json();
//         const today = data.consolidated_weather[0];
//         console.log(`Temperatures in ${data.title} stay between ${today.min_temp}C and ${today.max_temp}C today`);
//         return data;
//     }catch(error){
//         console.log(error);
//     }
    
// }

// let dataLondon, dataSeattle;
// getWeather(44418).then(result => {
//     dataLondon = result
//     console.log(dataLondon);
// });

// getWeather(2490383).then(result => {
//     dataSeattle = result
//     console.log(dataSeattle);
// });




