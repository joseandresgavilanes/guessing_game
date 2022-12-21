return new Promise((resolve, reject) => {
    const numUsuario = Number(window.prompt("Introduce un número (1 - 6):")); 
      // Pide al usuario que introduzca un número
    const aleatorio = Math.floor(Math.random() * 6 + 1); 
      // Elige un número aleatorio del 1 al 6
  
    if (isNaN(numUsuario)) {
      reject(new Error("Tipo de entrada incorrecta")); 
          // Si el usuario introduce un valor que no es un número, 
          // ejecuta reject con un error
    }
  
    if (numUsuario === aleatorio) {
      // Si el número del usuario coincide con el número aleatorio, 
      // devuelve 2 puntos
      resolve({
        puntos: 2,
        aleatorio,
      });
    } else if (numUsuario === aleatorio - 1 || numUsuario === aleatorio + 1) {
      // Si el número del usuario es diferente al número aleatorio por 1, 
      // devuelve 1 punto
      resolve({
        puntos: 1,
        aleatorio,
      });
    } else {
      // Si no, devuelve 0 puntos
      resolve({
        puntos: 0,
        aleatorio,
      });
    }
  });
  
  const continuarJuego = () => {
    return new Promise((resolve) => {
      if (window.confirm("¿Quieres continuar?")) { 
          // Pregunta si el usuario quiere continuar el juego
          // con un modal de confirmación
        resolve(true);
      } else {
        resolve(false);
      }
    });
  };
  
  
  const suponer = async () => {
    try {
      const result = await insertaNum(); 
        // En lugar del método 'then', podemos obtener el resultado 
        // directamente, poniendo 'await' antes de la promesa
      alert(`Dado: ${result.aleatorio}: obtuviste ${result.puntos} puntos`);
  
      const estaContinuando = await continuarJuego();
  
      if (estaContinuando) {
        suponer();
      } else {
        alert("Terminó el juego");
      }
    } catch (error) { 
        // En lugar del método 'catch', podemos usar la sintaxis 'try/catch'
      alert(error);
    }
  };