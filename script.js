document.getElementById('randomButton').addEventListener('click', function() {
    const options = ['victor', 'sofian', 'marbun', 'rangga', 'aikal'];
    const randomIndex = Math.floor(Math.random() * options.length);
    document.getElementById('result').textContent = options[randomIndex];
});
