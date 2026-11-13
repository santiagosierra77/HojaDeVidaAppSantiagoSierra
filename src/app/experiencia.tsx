
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import TarjetaExperiencia from '../components/TarjetaExperiencia';

export default function Experiencia() {
  return (
    <ScrollView style={styles.contenedor}>
      <View style={styles.encabezado}>
        <Ionicons
          name="briefcase"
          size={85}
          color="#2563EB"
        />

        <Text style={styles.titulo}>
          Mi Experiencia
        </Text>

        <Text style={styles.descripcion}>
          Experiencia y proyectos desarrollados
        </Text>
      </View>

      <View style={styles.seccion}>
        <TarjetaExperiencia
          cargo="Desarrollador Frontend"
          empresa="Proyecto académico - SENA"
          periodo="2026 - Actualidad"
          descripcion="Desarrollo de interfaces web utilizando React, TypeScript, HTML y CSS."
        />

        <TarjetaExperiencia
          cargo="Desarrollador de Software"
          empresa="Proyecto DataVentor"
          periodo="2025 - 2026"
          descripcion="Participación en el desarrollo de una aplicación para gestionar equipos tecnológicos y reportar novedades en los ambientes de formación."
        />

        <TarjetaExperiencia
          cargo="Desarrollo de Aplicaciones"
          empresa="Formación académica - SENA"
          periodo="2025 - 2026"
          descripcion="Creación de aplicaciones utilizando herramientas de programación, bases de datos y metodologías de desarrollo de software."
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
