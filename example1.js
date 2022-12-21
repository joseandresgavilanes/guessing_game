const hero = {
    name: 'Batman',
    realName: 'Bruce Wayne',
    enemies: {
        joker : ["Harley", "Penguin", "Acertijo"],
        riddler : ["Two faces", "sacrecrow", "Pison"]
    }
  };
  
  const {enemies, ...rest}=hero;
  const {joker, riddler, ...rest2}=enemies

  const[,enemy1, rest3]=joker
  const[,,enemy2]=riddler
  console.log(enemy1)
  console.log(enemy2)
