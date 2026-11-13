
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import TarjetaEstudio from '../components/TarjetaEstudio';

export default function Estudios() {
  return (
    <ScrollView style={styles.contenedor}>
      <View style={styles.encabezado}>
        <Ionicons
          name="school"
          size={85}
          color="#2563EB"
        />

        <Text style={styles.titulo}>
          Formación Académica
        </Text>

        <Text style={styles.descripcion}>
          Mis estudios y formación profesional
        </Text>
      </View>

      <View style={styles.seccion}>
        <TarjetaEstudio
          titulo="Bachiller Académico"
          institucion="Institución Educativa"
          anio={2023}
          enCurso={false}
        />

        <TarjetaEstudio
          titulo="Curso de Inglés"
          institucion="Instituto de Idiomas"
          anio={2025}
          enCurso={false}
        />

        <TarjetaEstudio
          titulo="Tecnólogo en Análisis y Desarrollo de Software"
          institucion="SENA - CGMLTI"
          anio={2026}
          enCurso={true}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#F1F5F9',
  },
  encabezado: {
    alignItems: 'center',
    padding: 25,
    backgroundColor: '#FFFFFF',
    marginBottom: 15,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#214D80',
    marginTop: 12,
  },
  descripcion: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 8,
    textAlign: 'center',
  },
  seccion: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
});
