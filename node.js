

function calculerMoyenne(notes) {
    let total = 0;
    for (let i = 0; i < notes.length; i++) {
      total = total + notes[i];
    }
    let moyenne = total / notes.length;
    return moyenne;
  }
  
  let notes = [12, 15, 10, 18, 16];
  let moyenne = calculerMoyenne(notes);
  
  console.log("La moyenne est de " + moyenne);
