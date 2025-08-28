function showScreen(screenId) {
    document.querySelectorAll(".card").forEach(c => c.classList.add("hidden"));
    document.getElementById(screenId).classList.remove("hidden");
}

function signUp() {
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
    const confirmPassword = document.getElementById("signupConfirmPassword").value;
    const terms = document.getElementById("termsCheck").checked;

    if (!email || !password || !confirmPassword) {
        alert("Please fill in all fields.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    if (!terms) {
        alert("Please agree with the privacy policy.");
        return;
    }

    console.log("Signed up with:", email, password);
    alert("Sign-up successful!");
    showScreen("loginScreen");
}

function login() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    if (!email || !password) {
        alert("Please fill in all fields.");
        return;
    }

    console.log("Login attempt:", email, password);
    alert("Login successful!");
}

function forgotPassword() {
    const email = document.getElementById("forgotPasswordEmail").value;

    if (!email) {
        alert("Please enter your email.");
        return;
    }

    console.log("Reset link sent to:", email);
    alert("Password reset link has been sent to your email!");
    showScreen("loginScreen");
}