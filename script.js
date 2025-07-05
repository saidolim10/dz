function getLocation() {
    document.getElementById('result').innerHTML = 'Yuklanmoqda...';
  
    fetch('https://ipapi.co/json/')
      .then(response => response.json())
      .then(data => {
        let output = `
           <strong>IP manzil:</strong> ${data.ip}<br>
          <strong>Shahar:</strong> ${data.city}<br>
          <strong>Hudud:</strong> ${data.region}<br>
           <strong>Mamlakat:</strong> ${data.country_name}<br>
           <strong>Kontinent:</strong> ${data.continent_code}<br>
           <strong>Koordinatalar:</strong> ${data.latitude}, ${data.longitude}
        `;
        document.getElementById('result').innerHTML = output;
      })
      .catch(error => {
        console.error(error);
        document.getElementById('result').innerHTML = 'Xatolik yuz berdi!';
      });
  }