
const qrGenerator = () => {
    let url = document.getElementById("text-input").value;

    const api = `https://api.qrserver.com/v1/create-qr-code/?data=${url}&size=160x160`;

    let img = `<img src="${api}" alt="qrCode">`;

    const qrDiv = document.getElementById("qr-code");
    qrDiv.innerHTML = img
}

const button = document.getElementById("btn")
button.addEventListener("click", () =>{
    qrGenerator();
})