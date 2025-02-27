function checkAge() {
    // write your code here 

    // Get user input
    const userAge = document.getElementById('ageInput').value;

    // Get result p
    const p = document.getElementById('result');

    let category;

    // Check if user is child, teenager, or adult. Otherwise, invalid
    if (userAge > -1 && userAge < 13) {
        category = "You are a(n): Child";
    } else if (userAge > 12 && userAge < 20) {
        category = "You are a(n): Teenager";
    } else if (userAge > 20) {
        category = "You are a(n): Adult";
    } else {
        category = "Invalid age. Please enter a valid number."
    }

    p.innerHTML = category;

}
