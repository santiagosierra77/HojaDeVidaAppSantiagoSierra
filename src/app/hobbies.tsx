
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import TarjetaHobby from '../components/TarjetaHobby';

export default function Hobbies() {
  return (
    <ScrollView style={styles.contenedor}>
      <View style={styles.encabezado}>
        <Ionicons
          name="heart"
          size={85}
          color="#2563EB"
        />

        <Text style={styles.titulo}>
          Mis Hobbies
        </Text>

        <Text style={styles.descripcion}>
          Actividades que disfruto en mi tiempo libre
        </Text>
      </View>

      <View style={styles.seccion}>
        <TarjetaHobby
          titulo="Videojuegos"
          descripcion="Me gusta jugar videojuegos."
          detalle="Disfruto los videojuegos de estrategia, aventura y multijugador."
          icono="game-controller"
        />

        <TarjetaHobby
          titulo="Música"
          descripcion="Me gusta escuchar música."
          detalle="Escuchar música es una de mis actividades favoritas para relajarme."
          icono="musical-notes"
        />

        <TarjetaHobby
          titulo="Tecnología"
          descripcion="Me gusta aprender sobre tecnología."
          detalle="Disfruto investigar nuevas herramientas y aprender sobre programación."
          icono="laptop"
        />

        <TarjetaHobby
          titulo="Deportes"
          descripcion="Me gusta realizar actividades deportivas."
          detalle="Disfruto practicar deportes y realizar actividades recreativas."
          icono="football"
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
