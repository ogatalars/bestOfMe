// process.stdout.write("alguma coisa"); // por debaixo dos panos, o console log faz o process.stdout.write

const questions = [
  "O que aprendi hoje?",
  "O que me deixou mal?",
  "O que eu gostaria de aprender hoje?",
  "Quantas pessoas ajudei hoje?",
  "O que eu poderia fazer para melhorar o dia de hoje?",
];
// console.log(questions[1]);

const ask = (index = 0) => {
  process.stdout.write(`\n\n\n ${questions[index]}`);
};

ask();

const answers = [];
process.stdin.on("data", (data) => {
  // tem assincronimismo aqui
  //   process.stdout.write(data.toString().trim() + "\n");
  answers.push(data.toString().trim());
  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    console.log(answers);
    process.exit();
  }
}); // ouvindo eventos

process.on("exit", () => {
  console.log(
    `Massa!, O que você aprendeu hoje foi: ${answers[0]}, O que te aborreceu hoje foi: ${answers[1]}, O que você gostaria de aprender hoje foi: ${answers[2]}, Quantas pessoas ajudei hoje foi: ${answers[3]}, O que eu poderia fazer para melhorar o dia de hoje foi: ${answers[4]}`
  );
});
