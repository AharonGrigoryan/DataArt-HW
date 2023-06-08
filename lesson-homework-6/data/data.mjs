const cardsData = [
  {
    heading: "Oh yeah, it’s that good.",
    subheading: "See for yourself",
    content: `Another featurette? Of course. More placeholder content here to give
            you an idea of how this layout would work with some actual
            real-world content in place.`,
  },
  {
    heading: "And lastly, this one.",
    subheading: "Checkmate.",
    content: `And yes, this is the last block of representative placeholder
            content. Again, not really intended to be actually read, simply here
            to give you a better view of what this would look like with some
            actual content. Your content.`,
  },
];

// Create additional card objects
for (let i = 2; i < 70; i++) {
  const index = i % 2 === 0 ? 1 : 0;
  // Determine the index of the existing cards to be used
  const newCard = {
    heading: `${cardsData[index].heading} `,
    subheading: `${cardsData[index].subheading}`,
    content: `${cardsData[index].content}`,
  };
  cardsData.push(newCard);
}

const cardData = [
  {
    cardText:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    btn1DataTarget: "#modalSheet-1",
    btn1Text: "View",
    btn2DataTarget: "#modalSheet-2",
    btn2Text: "Edit",
    time: "9 mins",
  },
  {
    cardText:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    btn1DataTarget: "#modalSheet-1",
    btn1Text: "View",
    btn2DataTarget: "#modalSheet-2",
    btn2Text: "Edit",
    time: "9 mins",
  },
  {
    cardText:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    btn1DataTarget: "#modalSheet-1",
    btn1Text: "View",
    btn2DataTarget: "#modalSheet-2",
    btn2Text: "Edit",
    time: "9 mins",
  },
  {
    cardText:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    btn1DataTarget: "#modalSheet-1",
    btn1Text: "View",
    btn2DataTarget: "#modalSheet-2",
    btn2Text: "Edit",
    time: "9 mins",
  },
  {
    cardText:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    btn1DataTarget: "#modalSheet-1",
    btn1Text: "View",
    btn2DataTarget: "#modalSheet-2",
    btn2Text: "Edit",
    time: "9 mins",
  },
  {
    cardText:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    btn1DataTarget: "#modalSheet-1",
    btn1Text: "View",
    btn2DataTarget: "#modalSheet-2",
    btn2Text: "Edit",
    time: "9 mins",
  },
  {
    cardText:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    btn1DataTarget: "#modalSheet-1",
    btn1Text: "View",
    btn2DataTarget: "#modalSheet-2",
    btn2Text: "Edit",
    time: "9 mins",
  },
  {
    cardText:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    btn1DataTarget: "#modalSheet-1",
    btn1Text: "View",
    btn2DataTarget: "#modalSheet-2",
    btn2Text: "Edit",
    time: "9 mins",
  },

];

const myExport = {
  cardsData,
  cardData,
};

export default myExport;
