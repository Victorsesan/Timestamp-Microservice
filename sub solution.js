const express = require('express');
const app = express();

app.get('/api/timestamp/:date_string?', (req, res) => {
  let dateString = req.params.date_string;
  
  if (!dateString) {
    const currentDate = new Date();
    res.json({ unix: currentDate.getTime(), utc: currentDate.toUTCString() });
  } else {
    let date;
    
    if (isNaN(dateString)) {
      date = new Date(dateString);
    } else {
      date = new Date(parseInt(dateString));
    }
    
    if (date.toString() === 'Invalid Date') {
      res.json({ error: 'Invalid Date' });
    } else {
      res.json({ unix: date.getTime(), utc: date.toUTCString() });
    }
  }
});

app.listen(3000, () => {
  console.log('Timestamp Microservice running on port 3000');
});