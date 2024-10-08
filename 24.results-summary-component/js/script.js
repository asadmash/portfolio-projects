fetch('data.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log(err);
  });

function appendData(data) {
  const category = document.querySelectorAll('.category');
  const image = document.querySelectorAll('img');
  const point = document.querySelectorAll('.point');
  console.log(image);
console.log(category);

for (let i = 0; i < data.length; i++){
  category[i].textContent = data[i].category;
  image[i].src = data[i].icon;
  point[i].textContent = data[i].score;
}
}
