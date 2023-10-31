function sonMayores(a, b) {
  let p = new Promise((resolve, reject) => {
    if (a > 0 && b > 0) {
      resolve();
    } else {
      reject();
    }
  });

  return p;
}

function sonPositivos() {
  console.log("Son positivos");
}

function noSonPositivos() {
  console.log("no son positivos");
}

function noSonPositivosDos() {
  console.log("no son positivos dos");
}

sonMayores(1, 2).then(sonPositivos).catch(noSonPositivos);
sonMayores(-1, 2).then(sonPositivos).catch(noSonPositivosDos);
