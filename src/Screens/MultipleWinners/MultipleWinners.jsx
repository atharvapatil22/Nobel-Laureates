import React from "react";
import WinnerInfo from "../../Components/WinnerInfo/WinnerInfo";
import "./MultipleWinners.css";

function MultipleWinners() {
  return (
    <div className="card">
      {data.map((item) => (
        <WinnerInfo data={item} />
      ))}
    </div>
  );
}

export default MultipleWinners;

const data = [
  {
    name: "Marie Curie",
    awards: [
      { year: 1903, category: "Physics" },
      { year: 1911, category: "Chemistry" },
    ],
    description:
      "The first person in history to accomplish the feat of twice receiving a Nobel Prize was the Polish scientist Marie Skłodowska Curie (7th November, 1867- 4th  July, 1934), first awarded the prize in Physics and, later, in Chemistry. What few people know is that she came close to not receiving the first of these awards. In 1903, the French Academy of Sciences proposed only Henri Becquerel and Pierre Curie as candidates for the Nobel Prize in Physics. Outraged to learn of the nomination, the mathematician Gösta Mittag-Leffler advised Pierre, who was unequivocal in his response: ” ",
  },
  {
    name: "Linus Pauling",
    awards: [
      { year: 1954, category: "Peace" },
      { year: 1962, category: "Chemistry" },
    ],
    description:
      "The only person twice decorated with a Nobel Prize not shared with anyone else was Linus Pauling (28th February, 1901 – 19th August, 1994). The first award, the 1954 Nobel Prize in Chemistry, recognized his research into the nature of chemical bonding. And eight years later, his militant pacifism during the Cold War, focused primarily on combating nuclear weapons, earned him the Nobel Peace Prize (1962). ",
  },
  {
    name: "John Bardeen",
    awards: [
      { year: 1956, category: "Physics" },
      { year: 1972, category: "Physics" },
    ],
    description:
      "The fact that today we can listen to the latest music hits on the radio, watch television, talk by mobile phone or comfortably surf the Internet using computers and tablets owes much to John Bardeen (23rd May, 1908 – 30th January, 1991), the only scientist in history to have received two Nobel Prizes in the Physics category.",
  },
  {
    name: "Frederick Sanger",
    awards: [
      { year: 1958, category: "Chemistry" },
      { year: 1980, category: "Chemistry" },
    ],
    description:
      "The fact that today we can listen to the latest music hits on the radio, watch television, talk by mobile phone or comfortably surf the Internet using computers and tablets owes much to John Bardeen (23rd May, 1908 – 30th January, 1991), the only scientist in history to have received two Nobel Prizes in the Physics category.",
  },
];
