
  const users = {
    "e": "niceshoes",
    "****": "****",
    "username": "pw1",
    "bob": "cool",
    "sweetiefox": "negro"
  };

  function login() {
    const u = document.getElementById("username").value;
    const p = document.getElementById("password").value;

    if (users[u] && users[u] === p) {
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("user", u);

      window.location.href = "Premium.html";
    } else {
      document.getElementById("msg").textContent = "No";
    }
  }
