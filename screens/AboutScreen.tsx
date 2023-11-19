// screens/HomeScreen.tsx
import { View, Text, StyleSheet, Button, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function AboutScreen({ navigation }) {

  return (

    <ScrollView>

      <View style={styles.container}>

        <View style={[styles.card, styles.elevatedCard]}>

          <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
              DISCOVERCIT 2023 Convención Internacional de Turismo
            </Text>
          </View>
          <Image
            source={{
              uri: 'https://eventosecuador.com/wp-content/uploads/2023/03/PDP3.post-fechas-avion-1.jpg',
            }}
            style={styles.cardImage}
          />
          <View style={styles.bodyContainer} >
            <Text numberOfLines={9} style={styles.headingText}>
              “Discover CIT América” es en la actualidad el evento más importante del turismo en Ecuador.
              En su quinta edición, reúne a la industria turística del país en diversos sectores.
              Comienza: Jue noviembre 16
              Finaliza: Sáb noviembre 18
              LOCAL: Centro de Convenciones de Guayaquil

            </Text>
          </View>
        </View>

        <Button
          title="Registrarse"
          onPress={() => navigation.navigate('ContactScreen')}
          color="#ff7f50"
        />

        <View style={[styles.card, styles.elevatedCard]}>
          <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
              Concierto de Marco Antonio Solís
            </Text>
          </View>
          <Image
            source={{
              uri: 'https://media.primicias.ec/2023/11/07163520/MarcoAntonioSolis71123.png',
            }}
            style={styles.cardImage}
          />
          <View style={styles.bodyContainer} >
            <Text numberOfLines={6} style={styles.headingText}>
              El cantante mexicano Marco Antonio Solís se presentará este fin de semana en dos ciudades del país.
              Solís llega al país con su gira 'El Buki World Tour'.
              El concierto en Guayaquil será el 11 de noviembre a las 20:00, en el Estadio Alberto Spencer.

            </Text>
          </View>
        </View>

        <Button
          title="Registrarse"
          onPress={() => navigation.navigate('ContactScreen')}
          color="#ff7f50"
        />


        <View style={[styles.card, styles.elevatedCard]}>
          <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
              Feria "Libre Libro 2023"
            </Text>
          </View>
          <Image
            source={{
              uri: 'https://www.eluniverso.com/resizer/7c4nQQ0DaFEpcJ12uBP6DSFCil4=/1005x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/AP5PHRAEZREFDNVGQN6RXWX4HM.JPG',
            }}
            style={styles.cardImage}
          />
          <View style={styles.bodyContainer} >
            <Text numberOfLines={8} style={styles.headingText}>
              Del 8 al 11 de noviembre, los amantes de la literatura podrán disfrutar de la novena edición de 'Libre Libro'.
              Este evento invita a celebrar el trabajo colectivo de diversos autores y los procesos creativos.
              El evento se realizara en la Escuela de Literatura de la Universidad de las Artes.
            </Text>
          </View>
        </View>

        <Button
          title="Registrarse"
          onPress={() => navigation.navigate('ContactScreen')}
          color="#ff7f50"
        />


        <View style={[styles.card, styles.elevatedCard]}>
          <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
              Concierto de Pablo Alboran.
            </Text>
          </View>
          <Image
            source={{
              uri: 'https://www.eluniverso.com/resizer/nvlJNbCshDUzwpGyPEr9sQgGRDE=/893x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/CZMCBD53BNEEDHXR3SXGSB6AOQ.JPG',
            }}
            style={styles.cardImage}
          />
          <View style={styles.bodyContainer} >
            <Text numberOfLines={8} style={styles.headingText}>
              El artista español Pablo Alborán ha incluido a Ecuador en su más reciente gira musical,
              titulada La Cuart4 Hoja.
              El primer concierto de Pablo Alborán en Ecuador será en Guayaquil, el miércoles 29 de noviembre,
              en el Coliseo Voltaire Paladines Polo.
            </Text>
          </View>
        </View>

        <Button
          title="Registrarse"
          onPress={() => navigation.navigate('ContactScreen')}
          color="#ff7f50"
        />


        <View style={[styles.card, styles.elevatedCard]}>
          <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
              Congreso Latinomericano de Recursos Humanos
            </Text>
          </View>
          <Image
            source={{
              uri: 'https://eventosecuador.com/wp-content/uploads/2023/09/Congreso-Latinoamericano-de-RRHH.jpg',
            }}
            style={styles.cardImage}
          />
          <View style={styles.bodyContainer} >
            <Text numberOfLines={8} style={styles.headingText}>
              El Congreso Latinoamericano de Recursos Humanos es el lugar donde puedes estar a la vanguardia de esta transformación.
              Marca en tu calendario los días 22 y 23 de noviembre de 2023, en el Centro de Convenciones del Mall del Sol.
            </Text>
          </View>
        </View>

        <Button
          title="Registrarse"
          onPress={() => navigation.navigate('ContactScreen')}
          color="#ff7f50"
        />

        <View style={{ marginBottom: 15 }} />


        <Button
          title="Regresar"
          onPress={() => navigation.goBack()}
          color="#841584"
        />


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
    height: 350,
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
