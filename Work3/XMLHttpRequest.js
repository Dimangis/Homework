// // GET ALL
// const getResponse = (url) => new Promise((resolve, reject) => {
//   const xhr = new XMLHttpRequest()
//   xhr.open('GET', url)
//   xhr.onload = () => resolve(xhr.response)
//   xhr.onerror = () => reject(xhr.status)
//   xhr.send()
// })

// getResponse('https://intership-liga.ru/tasks?isImportant=true&name_like=Mustafaev')
//   .then((data) => console.log(data))
//   .catch((error) => console.warn(error))
// // GET ALL


// // POST
// const postResponse = () => new Promise((resolve, reject) => {
//   const xhr = new XMLHttpRequest()
//   const body = JSON.stringify({
//     name: "Mustafaev",
//     info: "Just fine",
//     isImportant: true
//   })
//   xhr.open('POST', 'https://intership-liga.ru/tasks')
//   xhr.setRequestHeader('Content-type', 'application/json');
//   xhr.send(body)
//   xhr.onload = () => resolve(xhr.response)
//   xhr.onerror = () => reject(xhr.status)
// })

// postResponse()
//   .then((data) => console.log(JSON.parse(data)))
//   .catch((error) => console.warn(error))
// // POST


// // GET by ID
// const getIDResponse = (url) => new Promise((resolve, reject) => {
//   const xhr = new XMLHttpRequest()
//   xhr.open('GET', url)
//   xhr.onload = () => resolve(xhr.response)
//   xhr.onerror = () => reject(xhr.status)
//   xhr.send()
// })

// getIDResponse('https://intership-liga.ru/tasks/1789')
//   .then((data) => console.log(data))
//   .catch((error) => console.warn(error))
// // GET by ID


// // DELETE
// const deleteResponse = (url) => new Promise((resolve, reject) => {
//   const xhr = new XMLHttpRequest()
//   xhr.open('DELETE', url)
//   xhr.onload = () => resolve(xhr.response)
//   xhr.onloadend = function () {
//     if (xhr.status == 200) {
//       console.log("Пользователь успешно удалён");
//     } else {
//       console.log("Ошибка " + this.status);
//     }
//   }
//   xhr.onerror = () => reject(xhr.status)
//   xhr.send()
// })

// deleteResponse('https://intership-liga.ru/tasks/1783')
//   .then()
//   .catch((error) => console.warn(error))
// // DELETE


// // PATCH
// const patchResponse = (url) => new Promise((resolve, reject) => {
//   const xhr = new XMLHttpRequest()
//   const body = JSON.stringify({
//     isCompleted: true
//   })
//   xhr.open('PATCH', url)
//   xhr.setRequestHeader('Content-type', 'application/json');
//   xhr.send(body)
//   xhr.onload = () => resolve(xhr.response)
//   xhr.onerror = () => reject(xhr.status)
// })

// patchResponse('https://intership-liga.ru/tasks/1781')
//   .then((data) => console.log(data))
//   .catch((error) => console.warn(error))
// // PATCH