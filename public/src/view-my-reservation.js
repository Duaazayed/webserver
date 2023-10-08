const getReservation= async()=>{
  const queryString= window.location.search;
    const URLParameters= new URLSearchParams(queryString);
    const reservationId= URLParameters.get('reservationId');
  const RESERVATION_API = `${BASE_API_URL}/reservation/${reservationId}`;
      return  _get(RESERVATION_API);    
}
(async ()=>{
  const myReservation = await getReservation();
  console.log(myReservation);
  if (myReservation.length) {
    const div = document.getElementById('myReservation');
    const loadingDiv = div.childNodes[1];

    const tr = document.createElement('tr');
    div.replaceChild(tr, loadingDiv); // <- order is important here!
    myReservation.map((myReservation) => {
      
      // building blocks
      const th = document.createElement('th');
      th.className = 'reservation-list';
      const block = document.createElement('div');
      block.className = 'reservation-block';

  
      const nameSpan = document.createElement('span');
      nameSpan.className = 'reservation-username';
      nameSpan.innerText = myReservation.username;
  
      const dateSpan = document.createElement('span');
      dateSpan.className = 'reservation-date';
      dateSpan.innerText = myReservation.reservation_date;
  
      const startTimeSpan = document.createElement('span');
      startTimeSpan.className = 'start-time';
      startTimeSpan.innerText = myReservation.reservation_start_time;

      const endTimeSpan = document.createElement('span');
      endTimeSpan.className = 'end-time';
      endTimeSpan.innerText = myReservation.reservation_end_time;
      
     
        // add list item
      //block.appendChild(checkboxSpan);
      block.appendChild(nameSpan);
      block.appendChild(dateSpan);
      block.appendChild(startTimeSpan);
      block.appendChild(endTimeSpan);
  
      th.appendChild(block);
      tr.appendChild(th);
      });
    }
  })();



  


