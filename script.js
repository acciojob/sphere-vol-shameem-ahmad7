function volume_sphere() {
    // Get the input value from the user
    let radius = document.getElementById('radius').value;

    // Convert the input to a number and validate
    radius = parseFloat(radius);

    // If input is invalid (not a number or negative), display 'NaN'
    if (isNaN(radius) || radius < 0) {
        document.getElementById('volume').value = 'NaN';
    } else {
        // Calculate the volume using the formula: V = (4/3) * π * r^3
        const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
        
        // Display the volume, rounded to four decimal places
        document.getElementById('volume').value = volume.toFixed(4);
    }

    // Prevent the form from submitting (so the page doesn't reload)
    return false;
}
