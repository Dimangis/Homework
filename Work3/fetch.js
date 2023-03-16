// // Create
// (async () => {
//   const response = await fetch('https://intership-liga.ru/tasks', {
//     method: 'POST',
//     headers: {
//       'content-type': 'application/json'
//     },
//     body: JSON.stringify({
//       name: "Mustafaev",
//       info: "Just fine",
//       isImportant: true
//     })
//   });

//   if (!response.ok) {
//     console.error('Запрос не удался');
//     return;
//   }

//   const data = await response.json();
//   console.log(data);
// })();
// // Create



// // Get ALL
// (async () => {
//   const isImportant = true;
//   const name = 'Mustafaev';
//   const response = await fetch(`https://intership-liga.ru/tasks?isImportant=${true}&name_like=${name}`);

//   if (!response.ok) {
//     console.error('Запрос не удался');
//     return;
//   }

//   const data = await response.json();
//   console.log(data);
// })();
// // Get ALL



// // Get by ID
// (async () => {
//   const taskId = '1790';
//   const response = await fetch(`https://intership-liga.ru/tasks/${taskId}`);

//   if (!response.ok) {
//     console.error('Запрос не удался');
//     return;
//   }

//   const data = await response.json();
//   console.log(data);
// })();
// // Get by ID



// // Delete
// (async () => {
//   const taskId = '1790'
//   const response = await fetch(`https://intership-liga.ru/tasks/${taskId}`, {
//     method: 'DELETE',
//   });

//   if (!response.ok) {
//     console.error('Запрос не удался');
//     return;
//   }

//   console.log('Пользователь успешно удалён');
// })();
// // Delete



// // Update
// (async () => {
//   const taskId = '1789'
//   const response = await fetch(`https://intership-liga.ru/tasks/${taskId}`, {
//     method: 'PATCH',
//     headers: {
//       'content-type': 'application/json'
//     },
//     body: JSON.stringify({ isCompleted: true })
//   });

//   if (!response.ok) {
//     console.error('Запрос не удался');
//     return;
//   }

//   const data = await response.json();
//   console.log(data);
// })();
// // Update