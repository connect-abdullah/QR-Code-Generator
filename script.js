const qrGenerator = () => {
    const qrDiv = document.getElementById("qr-code");
    const inputText = document.getElementById("text-input").value;

    // Clear previous QR code and show loading animation
    qrDiv.innerHTML = "";
    qrDiv.classList.add("loading");

    if (!inputText) {
        alert("Please enter some text!");
        qrDiv.classList.remove("loading");
        return;
    }

    // Generate the QR code after a delay to mimic "loading"
    setTimeout(() => {
        const qrImage = `https://api.qrserver.com/v1/create-qr-code/?data=${inputText}&size=200x200`;
        qrDiv.innerHTML = `<img src="${qrImage}" alt="QR Code">`;
        qrDiv.classList.remove("loading");
        qrDiv.classList.add("fade-in"); // Add fade-in animation
    }, 1000); // Simulate loading time
};

// Add event listener to the button
document.getElementById("btn").addEventListener("click", qrGenerator);
