  <script>
  function guess_the_Button(input) {
    const x = document.getElementById('showmessage');
    x.innerHTML="";
    const winner = document.createElement('div');
    winner.textContent = 'You guessed the winner button!';
    const loser = document.createElement('div');
    loser.textContent = 'You pressed the looser button!';
    let random = Math.floor(Math.random() * 3);
    if (input == random) {
      x.appendChild(winner);
    } else {
      x.appendChild(loser)
    }
  }
</script>
