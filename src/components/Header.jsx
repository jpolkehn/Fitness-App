import reactImg from "../Images/titelbild.png";

const reactDescriptions = [
  "Sportskanone",
  "Olympionike",
  "Weltmeister",
  "Sportliebhaber",
  "Athlet",
  "Sportler",
];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = reactDescriptions[genRandomInt(5)];

  return (
    <header>
      <h1 className="text-white font-bold text-size-xxl text-left ">
        Hallo {description}!
      </h1>
      <br></br>
      <img
        src={reactImg}
        alt="fitness-Startbild"
        className="h-72 justify-center text-center mx-auto mt-5 "
      />
    </header>
  );
}
