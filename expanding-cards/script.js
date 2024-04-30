// variables
const userReview = document.querySelector(".userReview");

// reviewsss - an api would be better for this..
const anime = [
  {
    title: "onePunchMan",
    reviews: [
      "While the story is sorta all over the place every episode, it makes you wanting more. Unknown enemies usually come every episode, which makes a new hype for the heros to beat it.",
      "One Punch Man is the first anime I ever watched, and what got me hooked in watching more anime, it left a good taste in my mouth! The story picks up a lot after season one but by no means is the story of this season bad.",
      " I also thought the predictable ending of every fight would ruin it for me since, we all know how the show got it's name. But honestly I was excited to jump into every episode to see what happens next. I also felt the show was very funny.",
    ],
    username: ["SandySushi", "Gruolpo4747", "Vorosh"],
    userIcon: [
      "https://www.anime-planet.com/images/users/avatars/275121.jpg?t=1515820071",
      "https://www.anime-planet.com/images/users/avatars/2004139.jpg?t=1576433221",
      "https://www.anime-planet.com/images/users/avatars/350348.jpg?t=1533338022",
    ],
  },

  {
    title: "myHeroAcademia",
    reviews: [
      "This is the first superhero-themed anime that I have watched and I am VERY impressed! The characters are so likeable and the story is fun.",
      "watched all episodes so far.  I was very impressed by the character progression.  The humor melds in beautifully rather than sticking out like a sore thumb.  animation is nice, music is fantastic.",
      "I just finished watching the first season, and I have to say that this is one of the most entertaining shows that I have watched in a very long time. ",
    ],
    username: ["KElle", "theSentinel", "Jei"],
    userIcon: [
      "animeplanet-default.png",
      "https://www.anime-planet.com/images/users/avatars/203295.jpg?t=1366348797",
      "https://www.anime-planet.com/images/users/avatars/73118.jpg?t=1279291841",
    ],
  },

  {
    title: "spyXFamily",
    reviews: [
      "Goes without saying, but this is a BIG contender for anime of the year.",
      "You must definitely watch this anime. It's very good. The background music, characters, story, everything is absolutely top class. The best part is the relationship between ayna and her father. ",
      "I really like spy x family, it's charming, funny, well animated and fun for everyone. But there's so much filler that it becomes frustrating, especially when the story barely progresses in twelve episodes.",
    ],
    username: ["drx89", "Aratakun", "molopower"],
    userIcon: [
      "https://www.anime-planet.com/images/users/avatars/2717021.jpg?t=1679346839",
      "https://www.anime-planet.com/images/users/avatars/2567085.jpg?t=1693064197",
      "animeplanet-default.png",
    ],
  },

  {
    title: "demonSlayer",
    reviews: [
      "It sounds like a very typical shounen story. It is. So, what's so special about it? Like I said, it's your shounen anime done right. It follows that typical, familiar shounen-esque storyline (and comedy), but the combination of characters, background, and pacing really come to enhance the story.",
      "At first glance, it might look like an another classic shonen story, well it is, but it's a damn good one.",
      "I honestly have to say this is a must watch. Give it a good 3 or 4 ep. If you don't like it by then, then it isn't for you.",
    ],
    username: ["kurishiri", "Pcnumero1", "crua9"],
    userIcon: [
      "https://www.anime-planet.com/images/users/avatars/1441601.jpg?t=1553660944",
      "https://www.anime-planet.com/images/users/avatars/1460763.jpg?t=1589604092",
      "https://www.anime-planet.com/images/users/avatars/1386550.jpg?t=1551512701",
    ],
  },

  {
    title: "deathNote",
    reviews: [
      "It's one of those gems that graces the anime world only every so often and certainly deserves a considerable amount of respect.",
      "Death Note is a cat-and-mouse suspense-thriller with a paranormal twist and hints of schizophrenia in its concept design.",
      "If you're starting to watch an anime. this is anime you want to start first, this is still one of the best anime to watch I've watched this like 6 to 7 times when I'm bored and when I got nothing to do.",
    ],
    username: ["Sheex", "VivisQueen", "Araalvi786"],
    userIcon: [
      "https://www.anime-planet.com/images/users/avatars/5050.jpg?t=1591683934",
      "https://www.anime-planet.com/images/users/avatars/402.jpg?t=1315257009",
      "https://www.anime-planet.com/images/users/avatars/2460654.jpg?t=1605350462",
    ],
  },
];

// function to display random review
function displayReview() {
  for (let i = 0; i < anime.length; i++) {
    let randomIndex = Math.floor(Math.random() * 3);
    let panel = document.querySelector(`.${anime[i].title}Review`);
    panel.innerHTML = `
    <div class="reviewBox">
        <img src="${anime[i].userIcon[randomIndex]}" class="icon" alt="User Icon">  
        <div class="username">${anime[i].username[randomIndex]}</div> 
        <img src="animeplanet.png" class="animePlanet">
        <div class="review">${anime[i].reviews[randomIndex]}</div>
    </div>`;
  }
}

displayReview();

// panel variable
const panels = document.querySelectorAll(".panel");

// add event listeners to each panel
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    // remove active class before setting current panel
    panels.forEach((panelElem) => {
      panelElem.classList.remove("active");
    });

    panel.classList.add("active");

    // hide every text element
    document
      .querySelectorAll(".animeTitle a")
      .forEach((title) => (title.style.opacity = 0));
    document
      .querySelectorAll(".animeDesc")
      .forEach((desc) => (desc.style.opacity = 0));
    document
      .querySelectorAll(".animeYear")
      .forEach((year) => (year.style.opacity = 0));
    document
      .querySelectorAll(".reviewBox")
      .forEach((box) => (box.style.opacity = 0));

    // show text elements for active panel only
    panel.querySelector(".animeTitle a").style.opacity = 1;
    panel.querySelector(".animeDesc").style.opacity = 1;
    panel.querySelector(".animeYear").style.opacity = 1;
    panel.querySelector(".reviewBox").style.opacity = 1;
  });
});
