// Get by ID
getImage = async () => {
  const taskId = '1790';
  const response = await fetch(`https://dog.ceo/api/breeds/image/random`);

  if (!response.ok) {
    console.error('Запрос не удался');
    return;
  }

  const data = await response.json();
  // console.log(data);
  return data
};
// Get by ID

createImage = async () => {
  let form = document.getElementById("picture");
  let img = document.createElement("img");
  
  const data = await getImage()
  const url = data.message
  console.log(url)  
  img.src = url;
  form.appendChild(img);
  // form.removeChild(img)
}

