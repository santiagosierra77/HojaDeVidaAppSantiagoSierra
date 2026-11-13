
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  cargo: string;
  empresa: string;
  periodo: string;
  descripcion: string;
};

export default function TarjetaExperiencia({
  cargo,
  empresa,
  periodo,
  descripcion,
}: Props) {
  return (
    <View style={styles.tarjeta}>
      <Text style={styles.cargo}>{cargo}</Text>
      <Text style={styles.empresa}>{empresa}</Text>
      <Text style={styles.periodo}>{periodo}</Text>
      <Text style={styles.descripcion}>{descripcion}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 12,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#CBD5E1',
    elevation: 3,
  },
  cargo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#214D80',
  },
  empresa: {
    fontSize: 15,
    fontWeight: '600',
    color: '#334155',
    marginTop: 5,
  },
  periodo: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 4,
  },
  descripcion: {
    fontSize: 14,
    color: '#475569',
    marginTop: 10,
    lineHeight: 21,
  },
});
