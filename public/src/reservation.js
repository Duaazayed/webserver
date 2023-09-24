const doReservation= async(e)=>{
    e.preventDefault();

    const queryString= window.location.search;
    const URLParameters= new URLSearchParams(queryString);
    const bike_id= URLParameters.get('bike');
    const reservation_date= document.getElementById('reservation_date').value;
    const reservation_start_time= document.getElementById('reservation_start_time').value;
    const reservation_end_time= document.getElementById('reservation_end_time').value;
    const res= await reservation({ bike_id, reservation_date, reservation_start_time, reservation_end_time}).catch((err)=>{
      alert('Failed to reserve. Please try again later.');
      });
     console.log(res);
    
     window.location.href = `./myReservation.html?reservationId=${res.reservation_id}`;
  
    };
    