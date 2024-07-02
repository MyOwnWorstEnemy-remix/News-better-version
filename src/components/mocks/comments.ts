interface Comment {
    id: number,
    score: number,
    author: string,
    authorLink: string,
    text: string,
    moreComments?: Comment[],
  }

const comments: Comment[] = [
    {
      id: 0,
      score: 229,
      author: "omoikane",
      authorLink: "#",
      text: "Imperdiet pulvinar mauris cras ipsum vel velit urna nec eleifend efficitur sapien sapien lectus et. Ornare mollis orci, integer sodales dui mattis malesuada ut. Arcu hac ornare quis, amet, ex. Augue velit leo, aenean et sit in accumsan dui sodales non nunc sit nulla augue odio. Imperdiet mollis mauris lectu.",
      moreComments: [{
        id: 1,
        score: 229,
        author: "omoikane",
        authorLink: "#",
        text: "Imperdiet pulvinar mauris cras ipsum vel velit urna nec eleifend efficitur sapien sapien lectus et. Ornare mollis orci, integer sodales dui mattis malesuada ut. Arcu hac ornare quis, amet, ex. Augue velit leo, aenean et sit in accumsan dui sodales non nunc sit nulla augue odio. Imperdiet mollis mauris lectu.",
      },
      {
        id: 2,
        score: 229,
        author: "omoikane",
        authorLink: "#",
        text: "Imperdiet pulvinar mauris cras ipsum vel velit urna nec eleifend efficitur sapien sapien lectus et. Ornare mollis orci, integer sodales dui mattis malesuada ut. Arcu hac ornare quis, amet, ex. Augue velit leo, aenean et sit in accumsan dui sodales non nunc sit nulla augue odio. Imperdiet mollis mauris lectu.",
      },
      ]
    },
    {
      id: 1,
      score: 229,
      author: "omoikane",
      authorLink: "#",
      text: "Imperdiet pulvinar mauris cras ipsum vel velit urna nec eleifend efficitur sapien sapien lectus et. Ornare mollis orci, integer sodales dui mattis malesuada ut. Arcu hac ornare quis, amet, ex. Augue velit leo, aenean et sit in accumsan dui sodales non nunc sit nulla augue odio. Imperdiet mollis mauris lectu.",
    },
    {
      id: 2,
      score: 229,
      author: "omoikane",
      authorLink: "#",
      text: "Imperdiet pulvinar mauris cras ipsum vel velit urna nec eleifend efficitur sapien sapien lectus et. Ornare mollis orci, integer sodales dui mattis malesuada ut. Arcu hac ornare quis, amet, ex. Augue velit leo, aenean et sit in accumsan dui sodales non nunc sit nulla augue odio. Imperdiet mollis mauris lectu.",
    },
    {
      id: 3,
      score: 229,
      author: "omoikane",
      authorLink: "#",
      text: "Imperdiet pulvinar mauris cras ipsum vel velit urna nec eleifend efficitur sapien sapien lectus et. Ornare mollis orci, integer sodales dui mattis malesuada ut. Arcu hac ornare quis, amet, ex. Augue velit leo, aenean et sit in accumsan dui sodales non nunc sit nulla augue odio. Imperdiet mollis mauris lectu.",
      moreComments: [{
        id: 31,
        score: 229,
        author: "omoikane",
        authorLink: "#",
        text: "Imperdiet pulvinar mauris cras ipsum vel velit urna nec eleifend efficitur sapien sapien lectus et. Ornare mollis orci, integer sodales dui mattis malesuada ut. Arcu hac ornare quis, amet, ex. Augue velit leo, aenean et sit in accumsan dui sodales non nunc sit nulla augue odio. Imperdiet mollis mauris lectu.",
        moreComments: [{
            id: 31,
            score: 229,
            author: "omoikane",
            authorLink: "#",
            text: "Imperdiet pulvinar mauris cras ipsum vel velit urna nec eleifend efficitur sapien sapien lectus et. Ornare mollis orci, integer sodales dui mattis malesuada ut. Arcu hac ornare quis, amet, ex. Augue velit leo, aenean et sit in accumsan dui sodales non nunc sit nulla augue odio. Imperdiet mollis mauris lectu.",
          },
          ]
      },
      ]
    },
    {
      id: 4,
      score: 229,
      author: "omoikane",
      authorLink: "#",
      text: "Imperdiet pulvinar mauris cras ipsum vel velit urna nec eleifend efficitur sapien sapien lectus et. Ornare mollis orci, integer sodales dui mattis malesuada ut. Arcu hac ornare quis, amet, ex. Augue velit leo, aenean et sit in accumsan dui sodales non nunc sit nulla augue odio. Imperdiet mollis mauris lectu.",
      moreComments: [{
        id: 31,
        score: 229,
        author: "omoikane",
        authorLink: "#",
        text: "Imperdiet pulvinar mauris cras ipsum vel velit urna nec eleifend efficitur sapien sapien lectus et. Ornare mollis orci, integer sodales dui mattis malesuada ut. Arcu hac ornare quis, amet, ex. Augue velit leo, aenean et sit in accumsan dui sodales non nunc sit nulla augue odio. Imperdiet mollis mauris lectu.",
      },
      ]
    },
    {
      id: 5,
      score: 229,
      author: "omoikane",
      authorLink: "#",
      text: "Imperdiet pulvinar mauris cras ipsum vel velit urna nec eleifend efficitur sapien sapien lectus et. Ornare mollis orci, integer sodales dui mattis malesuada ut. Arcu hac ornare quis, amet, ex. Augue velit leo, aenean et sit in accumsan dui sodales non nunc sit nulla augue odio. Imperdiet mollis mauris lectu.",
    },
    {
      id: 6,
      score: 229,
      author: "omoikane",
      authorLink: "#",
      text: "Imperdiet pulvinar mauris cras ipsum vel velit urna nec eleifend efficitur sapien sapien lectus et. Ornare mollis orci, integer sodales dui mattis malesuada ut. Arcu hac ornare quis, amet, ex. Augue velit leo, aenean et sit in accumsan dui sodales non nunc sit nulla augue odio. Imperdiet mollis mauris lectu.",
    },
    {
      id: 7,
      score: 229,
      author: "omoikane",
      authorLink: "#",
      text: "Imperdiet pulvinar mauris cras ipsum vel velit urna nec eleifend efficitur sapien sapien lectus et. Ornare mollis orci, integer sodales dui mattis malesuada ut. Arcu hac ornare quis, amet, ex. Augue velit leo, aenean et sit in accumsan dui sodales non nunc sit nulla augue odio. Imperdiet mollis mauris lectu.",
    },
    {
      id: 8,
      score: 229,
      author: "omoikane",
      authorLink: "#",
      text: "Imperdiet pulvinar mauris cras ipsum vel velit urna nec eleifend efficitur sapien sapien lectus et. Ornare mollis orci, integer sodales dui mattis malesuada ut. Arcu hac ornare quis, amet, ex. Augue velit leo, aenean et sit in accumsan dui sodales non nunc sit nulla augue odio. Imperdiet mollis mauris lectu.",
    },
    {
      id: 9,
      score: 229,
      author: "omoikane",
      authorLink: "#",
      text: "Imperdiet pulvinar mauris cras ipsum vel velit urna nec eleifend efficitur sapien sapien lectus et. Ornare mollis orci, integer sodales dui mattis malesuada ut. Arcu hac ornare quis, amet, ex. Augue velit leo, aenean et sit in accumsan dui sodales non nunc sit nulla augue odio. Imperdiet mollis mauris lectu.",
    },
    {
      id: 10,
      score: 229,
      author: "omoikane",
      authorLink: "#",
      text: "Imperdiet pulvinar mauris cras ipsum vel velit urna nec eleifend efficitur sapien sapien lectus et. Ornare mollis orci, integer sodales dui mattis malesuada ut. Arcu hac ornare quis, amet, ex. Augue velit leo, aenean et sit in accumsan dui sodales non nunc sit nulla augue odio. Imperdiet mollis mauris lectu.",
    },
  ];

  export type {Comment};
  
  export default comments;
  