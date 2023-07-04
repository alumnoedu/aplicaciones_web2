import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

function login() {
  signInWithEmailAndPassword(auth, email, password)
  .then(

    (userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    }

  )
  .catch(

    (error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    }

  );
}

function goToDashboard() {
  
}

function login(email, password, callback) {
  // toda mi ejecución
  callback()
}

login("ejemplo@ejemplo.com", "123456", goToDashboard)

// // Función declarativa
// function login() {

// }

// // función de expresión
// const login = function() {

// }

// // función flecha o arrow function
// const login = () => {

// }

callback

function functionName() {
  console.log("Hola bb")
}

functionName();

(function() {
    console.log("Hola bb")
})()


// Función declarativa
// función de expresión
// función flecha o arrow function
// callbacks
// Promesas
// eventos bloqueantes (sincronico)
// eventos no blqueantes (asincronico)
// javascript es mono hilo - multihilo
// polling
// Pilas y Colas
// timers (setTimeout, setImmediate)
// event loop
// IIFE
// parametros y argumentos

function hello() {
  console.log("hola mundo")
}

setTimeout(hello, 500)
setImmediate(hello)

const promise = new Promise(
  (resolve, reject) => {
    try {
      resolve("Hola")
    } catch {
      reject("error")
    }
  }
)

promise
.then(
  (result) => {
    console.log(result)
  }
)
.catch(
  (error) => {
    console.log(error)
  }
)

// .then saber si todo esta okay 
// .catch saber si algo salio mal
