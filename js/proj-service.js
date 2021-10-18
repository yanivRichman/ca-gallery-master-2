'use strict';

const gProjs = [
    {
        id: 'pacman',
        name: 'Pacman',
        title: 'Pacman is a maze action game developed and released by Namco for arcades in 1980',
        desc: 'Your objective is that Pac-Man eat all of the pellets (white circles), while avoiding the ghosts that pursue him. If a ghost ever catches Pac-Man then Pac-Man is defeated',
        img: './img/portfolio/pacman.jpg',
        url: 'https://yanivrichman.github.io/pacman/',
        publishedAt: '30/09/21',
        labels: ['Matrixes', 'keyboard events'],
    },
    {
      id: 'minesweeper',
      name: 'Minesweeper',
      title: 'Minesweeper is a single-player puzzle video game.',
      desc: 'The objective of the game is to clear a rectangular board containing hidden "mines" or bombs without detonating any of them, with help from clues about the number of neighboring mines in each field',
      img: './img/portfolio/minesweeper.jpg',
      url: 'https://yanivrichman.github.io/Minesweeper/',
      publishedAt: '9/10/21',
      labels: ['Matrixes', 'keyboard events'],
  }
];

function getProjs() {
    return gProjs;
}

function getProjById(projId) {
  return gProjs.find((proj) => proj.id === projId);
}