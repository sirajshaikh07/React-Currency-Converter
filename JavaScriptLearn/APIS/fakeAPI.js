async function sendData(currency) {
    const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`);
    
    // Check if the response is okay
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Hello"+data[currency].akt)
    return data;
}

// Function to fetch and log the data
async function fetchData(currency) {
    try {
        const data = await sendData(currency);
        console.log(data);  // Logs the fetched currency data
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Example usage: Call the function with your chosen currency
fetchData('eur');  // You can change 'eur' to any currency code of your choice (e.g., 'usd', 'btc', etc.)
