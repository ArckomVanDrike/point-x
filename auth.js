// auth.js
// Commenting out the registration and login functionalities for now
// since we are not using them in the current version of the app.

// const registrationForm = document.getElementById("registrationForm");
// const loginForm = document.getElementById("loginForm");

// Funzione per gestire la registrazione
// function handleRegistration(event) {
//     event.preventDefault();
//     const username = document.getElementById("username").value;
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;

//     // Chiamata al metodo di autenticazione di Firebase per creare un nuovo account utente
//     auth.createUserWithEmailAndPassword(email, password)
//         .then((userCredential) => {
//             // Registrazione avvenuta con successo
//             const user = userCredential.user;
//             // Salvataggio dei dati aggiuntivi dell'utente nel database Firestore
//             firestore.collection("users").doc(user.uid).set({
//                 username: username,
//                 email: email,
//                 badges: [] // Inizializziamo l'array dei badge vuoto
//             });
//             alert("Registration successful!");
//         })
//         .catch((error) => {
//             // Gestione degli errori in caso di fallimento della registrazione
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             alert("Error during registration: " + errorMessage);
//         });
// }

// Funzione per gestire l'accesso
// function handleLogin(event) {
//     event.preventDefault();
//     const email = document.getElementById("loginEmail").value;
//     const password = document.getElementById("loginPassword").value;

//     // Chiamata al metodo di autenticazione di Firebase per effettuare l'accesso
//     auth.signInWithEmailAndPassword(email, password)
//         .then((userCredential) => {
//             // Accesso avvenuto con successo
//             const user = userCredential.user;
//             alert("Login successful!");
//         })
//         .catch((error) => {
//             // Gestione degli errori in caso di fallimento dell'accesso
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             alert("Error during login: " + errorMessage);
//         });
// }

// Aggiungi gli event listeners per i form di registrazione e accesso
// registrationForm.addEventListener("submit", handleRegistration);
// loginForm.addEventListener("submit", handleLogin);

// The registration and login functionalities are commented out for now. We will focus on other parts of the app.
// If needed, we can uncomment and implement them later in the development process.
