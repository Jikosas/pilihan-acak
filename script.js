document.getElementById('randomButton').addEventListener('click', function() {
    const options = ['Pilihan 1', 'Pilihan 2', 'Pilihan 3', 'Pilihan 4', 'Pilihan 5'];
    const randomIndex = Math.floor(Math.random() * options.length);
    document.getElementById('result').textContent = options[randomIndex];
});
