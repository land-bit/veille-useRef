// import React, { useRef, useEffect } from "react";

// function FormulaireInscription() {
//   const nomRef = useRef(null);

//   useEffect(() => {
//     nomRef.current.focus();
//   }, []);

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//         width: "100vw",
//         gap: "20px",
//       }}
//     >
//       <input type="text" ref={nomRef} placeholder="Ton nom" />
//       <input type="text" placeholder="Ton prénom" />
//       <input type="text" placeholder="Ton email" />
//     </div>
//   );
// }
// import React, { useRef, useState } from "react";

// function Chronometre() {
//   const intervalRef = useRef(null);
//   const [temps, setTemps] = useState(0);

//   const demarrerChronometre = () => {
//     intervalRef.current = setInterval(() => {
//       setTemps((prevTemps) => prevTemps + 1);
//     }, 1000);
//   };

//   const arreterChronometre = () => {
//     clearInterval(intervalRef.current);
//   };

//   return (
//     <div>
//       <p>Temps écoulé : {temps} secondes</p>
//       <button onClick={demarrerChronometre}>Démarrer</button>
//       <button onClick={arreterChronometre}>Arrêter</button>
//     </div>
//   );
// }

// import React, { useRef, useState } from "react";

// function ChatEnTempsReel() {
//   const chatRef = useRef(null);
//   const [messages, setMessages] = useState([]);

//   const ajouterMessage = (nouveauMessage) => {
//     setMessages((prevMessages) => [...prevMessages, nouveauMessage]);
//     chatRef.current.scrollTop = chatRef.current.scrollHeight;
//   };

//   // Messages factices pour la démonstration
//   const messagesFictifs = [
//     "Bienvenue dans le chat en temps réel !",
//     "Salut ! Comment ça va ?",
//     "Ça va bien, merci ! Et toi ?",
//     "Super ! On peut discuter ici en direct.",
//     "C'est génial ! 🎉",
//     "Bienvenue dans le chat en temps réel !",
//     "Salut ! Comment ça va ?",
//     "Ça va bien, merci ! Et toi ?",
//     "Super ! On peut discuter ici en direct.",
//     "C'est génial ! 🎉",
//   ];

//   return (
//     <div ref={chatRef} style={{ height: "300px", overflowY: "auto" }}>
//       <h1>Chat en Temps Réel</h1>
//       {messages.map((message, index) => (
//         <div key={index}>{message}</div>
//       ))}
//       {/* Affichage des messages factices */}
//       {messagesFictifs.map((message, index) => (
//         <div key={index}>{message}</div>
//       ))}
//     </div>
//   );
// }

import React, { useRef } from "react";

function MonRobot() {
  const boutonRef = useRef(null);
  const robotRef = useRef(null);

  const faireSauterRobot = () => {
    // Fais sauter le robot ici !
    robotRef.current.style.transform = "translateX(50px)";
  };

  return (
    <div>
      <button onClick={faireSauterRobot} ref={boutonRef}>
        Appuie pour faire sauter le robot !
      </button>
      <div ref={robotRef}>🤖</div>
    </div>
  );
}

// Utilisation du composant ChatEnTempsReel

function App() {
  return (
    <MonRobot />
    // <ChatEnTempsReel />
    // <Chronometre />
    // <FormulaireInscription />
  );
}

export default App;
