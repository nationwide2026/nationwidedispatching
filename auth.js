// Protect pages from unauthorized access
firebase.auth().onAuthStateChanged(user => {
    if (!user) {
        window.location.href = "login.html";
    }
});

// Logout function
function logout() {
    firebase.auth().signOut().then(() => {
        window.location.href = "login.html";
    });
}
