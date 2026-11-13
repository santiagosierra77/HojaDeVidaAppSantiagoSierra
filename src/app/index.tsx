
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MiBoton from '../components/MiBoton';

export default function Inicio() {
  return (
    <ScrollView
      style={styles.contenedor}
      contentContainerStyle={styles.contenido}
    >
      <View style={styles.perfil}>
        <Ionicons
          name="person-circle"
          size={110}
          color="#214D80"
        />

        <Text style={styles.nombre}>
          Santiago
        </Text>

        <Text style={styles.titulo}>
          Tecnólogo en Análisis y Desarrollo de Software
        </Text>

        <Text style={styles.institucion}>
          SENA - CGMLTI
        </Text>
      </View>

      <View style={styles.seccion}>
        <Text style={styles.subtitulo}>
          Sobre mí
        </Text>

        <Text style={styles.descripcion}>
          Soy estudiante de Análisis y Desarrollo de
          Software en el SENA, con interés en el
          desarrollo de aplicaciones web y móviles.

          Me gusta aprender nuevas tecnologías,
          desarrollar proyectos de software y
          fortalecer mis conocimientos en programación.
        </Text>
      </View>

      <View style={styles.seccion}>
        <Text style={styles.subtitulo}>
          Información de contacto
        </Text>

        <MiBoton
          textoBoton="Enviar correo"
          colorBoton="#2563EB"
          mensaje="Correo: ejemplo@gmail.com"
        />

        <MiBoton
          textoBoton="Llamar"
          colorBoton="#16A34A"
          mensaje="Teléfono: 3001234567"
        />

        <MiBoton
          textoBoton="Mi LinkedIn"
          colorBoton="#7C3AED"
          mensaje="LinkedIn: Perfil profesional"
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
  contenido: {
    padding: 20,
    paddingBottom: 35,
  },
  perfil: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 25,
    borderRadius: 15,
    marginBottom: 20,
    elevation: 3,
  },
  nombre: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#214D80',
    marginTop: 10,
  },
  titulo: {
    fontSize: 16,
    fontWeight: '600',
    color: '#334155',
    textAlign: 'center',
    marginTop: 8,
  },
  institucion: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 6,
  },
  seccion: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    elevation: 2,
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#214D80',
    marginBottom: 12,
  },
  descripcion: {
    fontSize: 15,
    color: '#475569',
    lineHeight: 24,
    textAlign: 'justify',
  },
});
