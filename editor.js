const input = document.getElementById("input");
const submit = document.getElementById("submit");
const output = document.getElementById("output");


const editor = document.querySelector('.editor');
const textarea = editor.querySelector('textarea');


textarea.addEventListener('input', function() {
});


submit.addEventListener("click", () => {
  const text = input.value;
  // const text = textarea.value;
  fetch('https://api.openai.com/v1/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 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'
    },
    body: JSON.stringify({
        "model": "text-davinci-003",
        "prompt": "Correct this to standard English:\n" + text,
        "max_tokens": 60,
        "temperature": 0
      })
  })
  .then(response => response.json())
  .then(data => {
    const jsonString = JSON.stringify(data);
    console.log(jsonString);
    // console.error("logs error " + data);
    const output = document.querySelector('#output');
    output.innerHTML = data.choices[0].text;
  })
  .catch(error => console.error(error));
  output.innerHTML = "Response from ChatGPT";
});