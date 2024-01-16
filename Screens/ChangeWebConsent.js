const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8081/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer your-token-here',
          'Custom-Header': 'CustomValue',
        },
        body: JSON.stringify({ message: 'Your message here' }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.text();
      console.log(data);
    } catch (error) {
      console.error('There was an error!', error);
    }
  };
  
  fetchData();
  