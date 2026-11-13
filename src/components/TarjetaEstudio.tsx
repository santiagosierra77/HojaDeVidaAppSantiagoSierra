import React from "react";
import { View, Text, StyleSheet } from "react-native";

type Props = {
  titulo: string;
  institucion: string;
  anio: number;
  enCurso: boolean;
};

export default function TarjetaEstudio({
  titulo,
  institucion,
  anio,
  enCurso,
}: Props) {
  return (
    <View
      style={[styles.tarjeta, enCurso ? styles.enCurso : styles.finalizado]}
    >
      <Text style={styles.titulo}>{titulo}</Text>

      {enCurso && (
        <View style={styles.insignia}>
          <Text style={styles.textoInsignia}>En Curso</Text>
        </View>
      )}

      <Text style={styles.subtitulo}>{institucion}</Text>

      <Text style={styles.anio}>{anio}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    padding: 16,
    borderRadius: 12,
    marginVertical: 8,
    borderWidth: 1,
  },
  finalizado: {
    backgroundColor: "#FFFFFF",
    borderColor: "#CCCCCC",
  },
  enCurso: {
    backgroundColor: "#E8F0FF",
    borderColor: "#2563EB",
  },
  titulo: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#1E293B",
  },
  subtitulo: {
    fontSize: 14,
    color: "#475569",
    marginTop: 8,
  },
  anio: {
    fontSize: 12,
    color: "#64748B",
    marginTop: 4,
  },
  insignia: {
    backgroundColor: "#7C3AED",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 5,
    alignSelf: "flex-start",
    marginTop: 8,
  },
  textoInsignia: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
  },
});
