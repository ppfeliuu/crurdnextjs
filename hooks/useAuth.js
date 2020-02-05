import React, { useEffect, useState } from "react";
import firebase from "../firebase";

function useAuth() {
  const [usuarioAuth, guardarUsuarioAuth] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth.onAuthStateChanged(usuario => {
      if (usuario) {
        guardarUsuarioAuth(usuario);
      } else {
        guardarUsuarioAuth(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return usuarioAuth;
}

export default useAuth;
