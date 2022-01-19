const sentence = "hello there from lighthouse labs";


function animated(str,time) {
  setTimeout(() => {
    process.stdout.write(str);
  }, time);
};

const str = () => {
  for (let i = 0; i < sentence.length; i++) {
    animated(sentence[i],i * 50);
  }
};

str();