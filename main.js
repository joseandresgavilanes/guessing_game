const insertNum = () => {
  return new Promise((resolve, reject) => {
    const numUser = Number(window.prompt("Type a number (from 1 to 10):"));
    const random = Math.floor(Math.random() * 10 + 1);

    if (isNaN(numUser)) {
      reject(new Error("Invalid value"));
    }

    if (numUser === random) {
      resolve({
        points: 2,
        random,
      });
    } else if (numUser === random - 1 || numUser === random + 1) {
      resolve({
        points: 1,
        random,
      });
    } else if (numUser === 7) {
      resolve({
        points: 7,
        random,
      });
    } else {
      resolve({
        points: 0,
        random,
      });
    }
  });
};

const continueGame = () => {
  return new Promise((resolve) => {
    if (window.confirm("Wanna continue?")) {
      resolve(true);
    } else {
      resolve(false);
    }
  });
};

const start = async () => {
  try {
    const result = await insertNum();

    result.points == 7
      ? alert(`You got the lucky number, you have: ${result.points} points`)
      : alert(`Number: ${result.random}: you got ${result.points} points`);

    const isPlaying = await continueGame();

    isPlaying ? start() : alert("Game Over");
  } catch (error) {
    alert(error);
  }
};

start();
