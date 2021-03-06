document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  let telefono = "+584128023239";

  let cliente1 = document.querySelector("#cliente1").value;
  let cliente2 = document.querySelector("#cliente2").value;
  let cliente3 = document.querySelector("#cliente3").value;
  let servicio1 = document.querySelector("#servicio1").value;
  let empleado = document.querySelector("#empleado").value;
  let resp = document.querySelector("#respuesta");

  resp.classList.remove("fail");
  resp.classList.remove("send");

  let url = `https://api.whatsapp.com/send?phone=${584128023239}&text=
    *_Ponquesitos Aho_*%0A
		*Formulario de rifa 2*%0A%0A
		*¡Ayudemos a mi mamá!*%0A%0A
		*Nombre y apellido*%0A
		${cliente1}%0A
    *Número Celular*%0A
		${cliente2}%0A
    *Correo electronico*%0A
		${cliente3}%0A
		*¡Escoge tu número ganador!*%0A
		${servicio1}%0A
    *Forma de pago*%0A
		${empleado}`;

  if (cliente1 === "" || cliente2 === "" || cliente3 === "") {
    resp.classList.add("fail");
    resp.innerHTML = `Faltan algunos datos, ${cliente1}`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Se ha enviado tu reserva, ${cliente1}`;

  window.open(url);
});
