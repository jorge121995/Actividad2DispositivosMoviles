import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import { TextInput, Button as PaperButton } from 'react-native-paper';

export default function ContactScreen({ navigation }) {

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setemail] = useState('');
  const [historialFormularios, setHistorialFormularios] = useState([]);

  //creacion de formulario 
  
  const handleEnviarFormulario = () => {
    if (!nombre || !apellido || !telefono || !email) {
      Alert.alert('Error', 'Por favor, complete todos los campos.');
      return;
    }

    const nuevoFormulario = {
      nombre,
      apellido,
      telefono,
      email,
    };

    setHistorialFormularios([...historialFormularios, nuevoFormulario]);

    Alert.alert(
      'Información Enviada',
      'La información se guardó correctamente. ¿Desea realizar otra acción?',
      [
        {
          text: 'Sí',
          onPress: () => {
            console.log('El usuario seleccionó Sí');
            setNombre('');
            setApellido('');
            setTelefono('');
            setemail('');
          },
        },
        {
          text: 'No',
          onPress: () => {
            console.log('El usuario seleccionó No');
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.fuente}>FORMULARIO DE REGISTRO</Text>

      <TextInput
        label="Nombre"
        value={nombre}
        onChangeText={(text) => setNombre(text)}
        style={styles.input}
      />
      <TextInput
        label="Apellido"
        value={apellido}
        onChangeText={(text) => setApellido(text)}
        style={styles.input}
      />
      <TextInput
        label="Número Telefónico"
        value={telefono}
        onChangeText={(text) => setTelefono(text)}
        keyboardType="phone-pad"
        style={styles.input}
      />
      <TextInput
        label="email Electrónico"
        value={email}
        onChangeText={(text) => setemail(text)}
        keyboardType="email-address"
        style={styles.input}
      />

      <PaperButton mode="contained" onPress={handleEnviarFormulario} style={styles.boton}>
        Enviar
      </PaperButton>

      <View style={styles.historialContainer}>
        <Text style={styles.historialTitulo}>Historial de Formularios</Text>
        {historialFormularios.map((formulario, index) => (
          <Text key={index} style={styles.historialItem}>
            {`Registro ${index + 1}: ${formulario.nombre} ${formulario.apellido}, Teléfono: ${formulario.telefono}, email: ${formulario.email}`}
          </Text>
        ))}
      </View>
      <View style={{ marginBottom: 15 }} />
      <Button
        title="Ir a Inicio"
        onPress={() => navigation.navigate('HomeScreen')}
      />
      <View style={{ marginBottom: 15 }} />
      <Button
        title="Regresar"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8a2be2',
  },
  fuente: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    marginBottom: 12,
    width: '100%',
  },
  boton: {
    marginTop: 20,
  },
  historialContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  historialTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  historialItem: {
    fontSize: 16,
    marginBottom: 5,
  },
});
