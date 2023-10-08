import _get from `./service-helpers`;
async function getAllBike() {

  const BIKE_API = `${BASE_API_URL}/bike`;
  return _get(BIKE_API);
}
(async ()=>{
  const bike = await getAllBike();
  console.log(bike);
  if (bike.length) {
    const div = document.getElementById('bike');
    const loadingDiv = div.childNodes[1];

    const ul = document.createElement('ul');
    div.replaceChild(ul, loadingDiv); // <- order is important here!
    bike.map((bike) => {
      
      // building blocks
      const li = document.createElement('li');
      li.className = 'bike-item';
      const block = document.createElement('div');
      block.className = 'bike-item-block';

      /*const checkboxSpan = document.createElement('span');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkboxSpan.className = 'bike-checkbox';
      checkboxSpan.appendChild(checkbox);*/

      const displayName = document.createTextNode("Bike Name:");
      const spaceSpan = document.createElement('span');
      const nameSpan = document.createElement('span');
      const spaceSpan1 = document.createElement('span');
      nameSpan.className = 'bike-name';
      nameSpan.innerText = bike.bike_name;
  
      const displayDescription = document.createTextNode("Bike Description:");
      const spaceSpan2 = document.createElement('span');
      const descriptionSpan = document.createElement('span');
      const spaceSpan3 = document.createElement('span');
      descriptionSpan.className = 'bike-description';
      descriptionSpan.innerText = bike.description;
  
      const displayRentPrice = document.createTextNode("Bike Rent Price:");
      const spaceSpan4 = document.createElement('span');
      const rentPriceSpan = document.createElement('span');
      const spaceSpan5 = document.createElement('span');
      rentPriceSpan.className = 'rent_price';
      rentPriceSpan.innerText = bike.rent_price;
      
      const reserveButton = document.createElement('button');
        reserveButton.appendChild(document.createTextNode('Reserve this bike'));
        reserveButton.onclick = () => {
            console.log(`Reserving: ${bike.bike_id}`);
            window.location.href = `./reservation.html?bike=${bike.bike_id}`;

        };
     
        // add list item
      //block.appendChild(checkboxSpan);
      block.appendChild(displayName);
      block.appendChild(spaceSpan);
      block.appendChild(nameSpan);
      block.appendChild(spaceSpan1);
      block.appendChild(displayDescription);
      block.appendChild(spaceSpan2);
      block.appendChild(descriptionSpan);
      block.appendChild(spaceSpan3);
      block.appendChild(displayRentPrice);
      block.appendChild(spaceSpan4);
      block.appendChild(rentPriceSpan);
      block.appendChild(spaceSpan5);
      block.appendChild(reserveButton);
  
      li.appendChild(block);
      ul.appendChild(li);
      });
    }
  })();
  



  


