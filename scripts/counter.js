// counter
let submissions = Number(window.localStorage.getItem("submissions")); // 0

submissions++;

window.localStorage.setItem("submissions", submissions);

// function to get ordinal suffix
function getOrdinal(n) {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

// Display the count with ordinal suffix
document.getElementById("counter").innerText = getOrdinal(submissions);