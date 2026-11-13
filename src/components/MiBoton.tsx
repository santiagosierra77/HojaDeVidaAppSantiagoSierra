
import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
} from 'react-native';

type Props = {
  textoBoton: string;
  colorBoton: string;
  mensaje: string;
};

export default function MiBoton({
  textoBoton,
  colorBoton,
  mensaje,
}: Props) {
  return (
    <TouchableOpacity
      style={[styles.boton, { backgroundColor: colorBoton }]}
      onPress={() => Alert.alert('Contacto', mensaje)}
    >
      <Text style={styles.texto}>{textoBoton}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  boton: {
    padding: 15,
    borderRadius: 10,
    marginVertical: 6,
    alignItems: 'center',
  },
  texto: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
