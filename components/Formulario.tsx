import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const MiFormulario = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');

  const handleEnviarFormulario = () => {
    // Aquí puedes realizar acciones con los datos del formulario
    console.log('Nombre:', nombre);
    console.log('Apellido:', apellido);
    console.log('Teléfono:', telefono);
    console.log('Correo:', correo);
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Nombre"
        value={nombre}
        onChangeText={(text) => setNombre(text)}
      />
      <TextInput
        label="Apellido"
        value={apellido}
        onChangeText={(text) => setApellido(text)}
      />
      <TextInput
        label="Número Telefónico"
        value={telefono}
        onChangeText={(text) => setTelefono(text)}
        keyboardType="phone-pad"
      />
      <TextInput
        label="Correo Electrónico"
        value={correo}
        onChangeText={(text) => setCorreo(text)}
        keyboardType="email-address"
      />

      <Button mode="contained" onPress={handleEnviarFormulario}>
        Enviar
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

export default MiFormulario;