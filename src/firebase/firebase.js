import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  };

  firebase.initializeApp(config);

  const database = firebase.database();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export { firebase, database , googleAuthProvider as default};

  //////************************************************************************** */

  // //child_removed
  // database.ref('expense').on('child_removed', (snaphot) => {
  //     console.log(snaphot.key, snaphot.val())
  // })

  // //child_changed
  // database.ref('expense').on('child_changed', (snaphot) => {
  //     console.log(snaphot.key, snaphot.val())
  // })

  // //child_added
  // database.ref('expense').on('child_added', (snaphot) => {
  //   console.log(snaphot.key, snaphot.val())
  // })

//   database.ref('expense')
//     .once('value')
//     .then((snaphot) => {
//         const expenses = [];

//         snaphot.forEach((childSnaphot) => {
//             expenses.push({
//                 id: childSnaphot.key,
//                 ...childSnaphot.val()
//             })
//         })

//         console.log(expenses);

//     })

// database.ref('expense').on('value', (snaphot) => {
//     const expenses = [];

//     snaphot.forEach((childSnaphot) => {
//         expenses.push({
//             id: childSnaphot.key,
//             ...childSnaphot.val()
//         })
//     })
//     console.log(expenses);
// })

//   database.ref('expense').push({
//       description: 'Rent',
//       amount: 109500,
//       createdAt: 98878979 
//   })



//  database.ref('notes/-MPexJ3nS3gA578n_bWY').remove()

//   database.ref('notes').push({
//       title: 'Course topics',
//       body: 'react'
//   })

//   const firebaseNotes = {
//     notes:{
//         asdas:{
//             title: 'first note',
//             body: 'asdasd'
//         },
//         asdasdasdas:{
//             title:'eres',
//             body: 'aecfe'
//         }
//     }
//   }

//   const notes = [{
//       id: 12,
//       title: 'first note',
//       body: 'this is my note'
//   }, {
//       id: 23,
//       title: 'second note',
//       body: 'asdasd'
//   }]

//   database.ref('notes').set(notes)
//   database.ref('notes/')
//   database.ref().on('value', (snapshot) => {
//       const val = snapshot.val();
//       console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
//   }, (e) => {
//     console.log('errro', e)
//   })

//   database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
//   }, (e) => {
//       console.log('error with data fetching', e)
//   })

//   setTimeout(() =>{
//       database.ref('age').set(29);
//   }, 3500);

//   setTimeout(() =>{
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() =>{
//     database.ref('age').set(30);
// }, 10500);


//   database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     }).catch((e) => {
//         console.log('Error fetching data', e)
//     })

//   database.ref().set({
//       name: 'Gaurav Rana',
//       age: 28,
//       stressLevel: 9,
//       job: {
//           title: 'Software developer',
//           company: 'google'

//       },
//       location:{
//           city: 'West Chester',
//           country: 'USA'
//       }
//   }).then(() => {
//       console.log('data is saved');
//   }).catch((e) => {
//       console.log('This failed.', e)
//   })

//   database.ref().set('This is my data');

// database.ref('age').set(27);
// database.ref('location/city').set('PA')

// database.ref('attributes').set({
//     height: 65,
//     weight: 198
// }).then(() => {
//     console.log('data is saved')
// }).catch((e) => {
//     console.log('This failed!', e)
// })

// database.ref().update({
//     stressLevel: 9,
//     'job/company':'Amazon',
//     'location/city': 'Seattle'
// })
// console.log('data changed')

// database.ref()
// .remove()
// .then(() => {
//     console.log('Data was removed')
// }).catch((e) => {
//     console.log('did not remove data', e)
// })