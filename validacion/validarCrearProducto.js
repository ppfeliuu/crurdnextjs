export default function validarCrearProducto(valores) {
  let errores = {};
  if (!valores.nombre) {
    errores.nombre = "El Nombre es obligatorio";
  }

  if (!valores.empresa) {
    errores.empresa = "Nombre de empresa es obligatorio";
  }

  if (!valores.url) {
    errores.url = "La url es obligatoria";
  } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(valores.url)) {
    errores.url = "La url tiene un formato no válido";
  }

  if (!valores.descripcion) {
    errores.descripcion = "Descripción del producto es obligatorio";
  }
  return errores;
}
