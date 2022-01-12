'use strict';

const gProjs = [
    {
        id: 'pacman',
        name: 'Pacman',
        title: 'Pacman is a maze action game developed and released by Namco for arcades in 1980.',
        desc: 'Your objective is that Pac-Man eat all of the pellets (white circles), while avoiding the ghosts that pursue him. If a ghost ever catches Pac-Man then Pac-Man is defeated.',
        img: './img/portfolio/pacman.jpg',
        url: 'https://yanivrichman.github.io/pacman/',
        publishedAt: '30/09/21',
        labels: ['Matrixes', 'keyboard events'],
    },
    {
        id: 'minesweeper',
        name: 'Minesweeper',
        title: 'Minesweeper is a single-player puzzle video game.',
        desc: 'The objective of the game is to clear a rectangular board containing hidden "mines" or bombs without detonating any of them, with help from clues about the number of neighboring mines in each field.',
        img: './img/portfolio/minesweeper.jpg',
        url: 'https://yanivrichman.github.io/Minesweeper/',
        publishedAt: '9/10/21',
        labels: ['Matrixes', 'keyboard events'],
    },
    {
        id: 'touchNums',
        name: 'Touch the Numbers',
        title: 'Touch the Numbers is a multi-player measure time game.',
        desc: 'The objective of the game is to finish quik touching all the numbers.',
        img: './img/portfolio/‏‏touchNums.jpg',
        url: 'https://yanivrichman.github.io/Ex-touch-nums/',
        publishedAt: '26/09/21',
        labels: ['Matrixes', 'keyboard events'],
    },
    {
        id: 'balloons',
        name: 'Balloons',
        title: 'Balloons is a fun game.',
        desc: 'The objective of the game is to pop up all the balloons.',
        img: './img/portfolio/balloons.jpg',
        url: 'https://yanivrichman.github.io/Ex-balloon/',
        publishedAt: '23/09/21',
        labels: ['Matrixes', 'keyboard events'],
    },
    {
        id: 'inPicture',
        name: 'What is In the Picture',
        title: 'What is In the Picture is a single-player questions game.',
        desc: 'The objective of the game is to answer 3 correct quations.',
        img: './img/portfolio/‏‏inPicture.jpg',
        url: 'https://yanivrichman.github.io/Ex-in-picture/',
        publishedAt: '26/09/21',
        labels: ['Matrixes', 'keyboard events'],
    },
    {
        id: 'ballBoard',
        name: 'Ball board',
        title: 'Ball board is a single-player measure ball game.',
        desc: 'The objective of the game is to collet all the balls in the board.',
        img: './img/portfolio/ballBoard.jpg',
        url: 'https://yanivrichman.github.io/balll-board/',
        publishedAt: '27/09/21',
        labels: ['Matrixes', 'keyboard events'],
    },
    {
        id: 'Chess',
        name: 'Chess',
        title: 'Chess is a board game played between two players.',
        desc: 'The object of the game is to checkmate the opponent\'s king, whereby the king is under immediate attack (in "check") and there is no way for it to escape.',
        img: './img/portfolio/chess.jpg',
        url: 'https://yanivrichman.github.io/chess/',
        publishedAt: '27/09/21',
        labels: ['Matrixes', 'keyboard events'],
    },
    {
        id: 'Todos',
        name: 'Todos',
        title: 'Todos is a website of list of tasks to be completed.',
        desc: 'Task lists are used in self-management, When one of the items on a task list is accomplished, the task is checked or crossed off.',
        img: './img/portfolio/todos.jpg',
        url: 'https://yanivrichman.github.io/proj-todos/',
        publishedAt: '12/10/21',
        labels: ['Matrixes', 'keyboard events'],
    },
    {
        id: 'bookShop',
        name: 'Book shop',
        title: 'Bookshop is an online book marketplace.',
        desc: 'The objective of the Bookshop is for celling books online.',
        img: './img/portfolio/bookShop.jpg',
        url: 'https://yanivrichman.github.io/Book-Shop/',
        publishedAt: '13/10/21',
        labels: ['Matrixes', 'keyboard events'],
    }
];

function getProjs() {
    return gProjs;
}

function getProjById(projId) {
    return gProjs.find((proj) => proj.id === projId);
}
