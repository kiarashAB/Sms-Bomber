document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btn");
    
    btn.addEventListener("click", () => {
      const inputnumber = document.getElementById("number").value;

    fetch("https://auth.basalam.com/otp-request", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({ mobile: inputnumber })
    })
      .then(response => {
        console.log("✅ status:", response.status);
        return response.text();
      })
      .then(data => {
        console.log("📩 پاسخ سرور:", data);
      })
      .catch(error => {
        console.error("❌ خطا:", error);
      });
  });
});