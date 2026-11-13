
import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  titulo: string;
  descripcion: string;
  detalle: string;
  icono: keyof typeof Ionicons.glyphMap;
};

export default function TarjetaHobby({
  titulo,
  descripcion,
  detalle,
  icono,
}: Props) {
  return (
    <TouchableOpacity
      style={styles.tarjeta}
      activeOpacity={0.7}
      onPress={() => Alert.alert(titulo, detalle)}
    >
      <Ionicons
        name={icono}
        size={35}
        color="#2563EB"
      />

      <Text style={styles.titulo}>{titulo}</Text>

      <Text style={styles.descripcion}>
        {descripcion}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 15,
    marginVertical: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    elevation: 3,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#214D80',
    marginTop: 10,
  },
  descripcion: {
    fontSize: 14,
    color: '#475569',
    textAlign: 'center',
    marginTop: 8,
    lineHeight: 21,
  },
});
