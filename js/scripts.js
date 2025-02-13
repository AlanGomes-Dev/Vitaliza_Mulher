document.querySelector(".btn-filter").addEventListener("click", function () {
  const estado = document.getElementById("state-select").value;
  const cidade = document.getElementById("city-select").value;
  const area = document.getElementById("course-select").value;

  alert(`Filtrando por:\nEstado: ${estado}\nCidade: ${cidade}\nÁrea: ${area}`);
});
