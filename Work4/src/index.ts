console.log('Домашка');
// // Create
// (async (): Promise<void> => {
//   const response = await fetch('https://intership-liga.ru/tasks', {
//     method: 'POST',
//     headers: {
//       'content-type': 'application/json',
//     },
//     body: JSON.stringify({
//       name: 'Mustafaev',
//       info: 'Just fine',
//       isImportant: true,
//     }),
//   });

//   if (!response.ok) {
//     console.error('Запрос не удался');
//     return;
//   }
//   const data: unknown = await response.json();
//   console.log(data);
// })();
// // Create

// // Get ALL
// (async (): Promise<unknown> => {
//   const name = 'Mustafaev';
//   const response = await fetch(`https://intership-liga.ru/tasks?isImportant=${true}&name_like=${name}`);

//   if (!response.ok) {
//     console.error('Запрос не удался');
//     return;
//   }

//   const data: unknown = await response.json();
//   console.log(data);
//   return data;
// })();
// // Get ALL

// // Get by ID
// type TaskResponse = {
//   id: number;
//   info: string;
//   isImportant: boolean;
//   name: string;
// };
// (async (): Promise<TaskResponse | null> => {
//   const taskId = '90';
//   const response = await fetch(`https://intership-liga.ru/tasks/${taskId}`);

//   if (!response.ok) {
//     console.error('Запрос не удался');
//     return null;
//   }

//   const data: TaskResponse = await response.json();
//   console.log(data);
//   return data;
// })();
// // Get by ID

// // Delete
// (async (): Promise<void> => {
//   const taskId = '91';
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
// (async (): Promise<unknown | null> => {
//   const taskId = '90';
//   const response = await fetch(`https://intership-liga.ru/tasks/${taskId}`, {
//     method: 'PATCH',
//     headers: {
//       'content-type': 'application/json',
//     },
//     body: JSON.stringify({ isCompleted: true }),
//   });

//   if (!response.ok) {
//     console.error('Запрос не удался');
//     return null;
//   }

//   const data: unknown = await response.json();
//   console.log(data);
//   return data;
// })();
// // Update
