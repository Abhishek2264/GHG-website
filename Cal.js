function calculateFootprint() {
    const miles = document.getElementById('miles').value;
    const electricity = document.getElementById('electricity').value;
    const emissions = (miles * 0.9) + (electricity * 0.7); // Simplified calculation
    document.getElementById('result').textContent = `Estimated daily CO2 emissions: ${emissions.toFixed(2)} kg`;
}
