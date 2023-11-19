// screens/HomeScreen.tsx
import { View, Text, StyleSheet, Button, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'


export default function HomeScreen({ navigation }) {

  return (
    <ScrollView>

      <View style={styles.container}>

        <View style={[styles.card, styles.elevatedCard]}>
          <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
              Eventos en Guayaquil - Noviembre 2023
            </Text>
          </View>
          <Image
            source={{
              uri: 'https://albadelbosque.com.ec/wp-content/uploads/2023/04/lugaresparavivir-gye.webp',
            }}
            style={styles.cardImage}
          />
          <View style={styles.bodyContainer} >
            <Text numberOfLines={5} style={styles.headingText}>
              Encuentra informacion sobre todos los eventos a realizarse en la ciudad de  Guayaquil y
               sus alrededores en el mes de noviembre, inclyendo conciertos, ferias, convenciones y
                muchas actividades mas.
            </Text>
          </View>
        </View>

        <View style={[styles.card, styles.elevatedCard]}>
          <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
              ¿Que actividades se puede realizar en Guayaquil?
            </Text>
          </View>
          <Image
            source={{
              uri: 'https://blog.uber-cdn.com/cdn-cgi/image/width=2160,quality=80,onerror=redirect,format=auto/wp-content/uploads/2018/12/EC_D%C3%A9jate-sorprender-con-6-cosas-que-puedes-hacer-en-Guayaquil-.jpg',
            }}
            style={styles.cardImage}
          />
          <View style={styles.bodyContainer} >
            <Text numberOfLines={6} style={styles.headingText}>
              La ciudad de Guayaquil es una de las ciudades mas grandes e importantes de Ecuador. Por tal motivo,
              existen numerosas acividades que podemos realizar aqui, como visitar museos, parques, catedrales y
              valiosos monumentos historicos.
            </Text>
          </View>
        </View>

        <Button
          title="Empezar"
          onPress={() => navigation.navigate('AboutScreen')}
          color="#841584"
        />

        <View style={[styles.cardSupport, styles.elevatedCard]}>
          <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
              Contacto y soporte          </Text>
          </View>
          <View style={styles.bodyContainersupport} >
            <Text numberOfLines={1} style={styles.headingTextSupport}>Jorge Asanza jorge.asanza@alumnos.viu.es</Text>
            <Text numberOfLines={1} style={styles.headingTextSupport}>Christian Aguilar christian.aguilar@alumnos.viu.es</Text>
            <Text numberOfLines={1} style={styles.headingTextSupport}>Paulet Obregon paulet.obregon@alumnos.viu.es</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6495ed',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headingText: {
    color: '#242B2E',
    fontSize: 14,
    marginTop: 6,
  },
  headingTextSupport: {
    color: '#242B2E',
    fontSize: 14,
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600'
  },
  cardImage: {
    height: 150

  },
  bodyContainer: {
    padding: 15
  },
  bodyContainersupport: {
    padding: 5
  },
  card: {
    width: 350,
    height: 330,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16
  },
  cardSupport: {
    width: 350,
    height: 130,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16
  },
  elevatedCard: {
    backgroundColor: '#ffffff',
  },

})
