window.onload = (_event) => {
  const feedSection = document.getElementById("feeds-section");

  const feeds = [
    { id: 0, title: "Front" },
    { id: 1, title: "Back" },
  ];

  feeds.forEach((feed) => {
    const newFeed = document.createElement("section");
    newFeed.innerHTML = `
            <h2>${feed.title}</h2>
        `;
    feedSection.appendChild(newFeed);
  });
};
