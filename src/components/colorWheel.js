// Liste von Klassen
const classNamesList = [
  "block bg-gradient-to-br from-fitness-color-turkis to-fitness-color-light-green text-white text-3xl my-4 pt-16 pb-8 h-44 w-full rounded-3xl",
  "block bg-gradient-to-br from-fitness-color-yellow to-fitness-color-light-pink text-white text-3xl my-4 pt-16 pb-8 h-44 w-full rounded-3xl",
  "block bg-gradient-to-br from-fitness-color-dark-blue to-fitness-color-mint text-white text-3xl my-4 pt-16 pb-8 h-44 w-full rounded-3xl",
];

// Index der zuletzt verwendeten Klasse
let lastIndex = 0;

// Funktion, die eine Klasse aus der Liste zurückgibt
function getNextClass() {
  // Inkrementiere den Index
  lastIndex = (lastIndex + 1) % classNamesList.length;
  // Gib die nächste Klasse zurück
  return classNamesList[lastIndex];
}

export default getNextClass;
