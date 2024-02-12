import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const MyOrderCard = ({ key }) => {
  return (
    <View style={styles.innerContainer} key={key}>
      <View style={styles.innnerContent}>
        <Text style={styles.fontBold}>Order Id:PP1233YU</Text>
        <Text style={styles.fontGray}>Dec 13,2023,09:00AM</Text>
      </View>
      <View style={styles.secondInnerContent}>
        <Text style={styles.fontDesc}>Description of Printed Documents</Text>
        <View>
          <Text style={styles.fontDesc}>Success</Text>
        </View>
      </View>
      <View>
        <Text style={styles.fontDesc}>Total Pages:100</Text>
        <Text style={styles.fontDesc}>Total Pages:100</Text>
      </View>
      <View>
        <View style={styles.innerContentHolder}>
          <TouchableOpacity style={{ borderWidth: 1, flex: 2, borderRadius: 7 }}>
            <View style={{ padding: 10 }}>
              <Text style={{ textAlign: 'center' }}>View Details</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ borderWidth: 1, borderRadius: 7 }}>
            <View style={{ padding: 10 }}>
              <Text>View Qr</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ borderWidth: 1, flex: 2, borderRadius: 7 }}>
            <View style={{ padding: 10 }}>
              <Text style={{ textAlign: 'center' }}>Rate Order</Text>
            </View>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

export default MyOrderCard

const styles = StyleSheet.create({
  innerContainer: {
    borderWidth: 1,
    borderRadius: 6,
    margin: 10,
    padding: 10,
    gap: 6
  },
  innnerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // flex:1
  },
  secondInnerContent: {
    // borderWidth:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  innerContentHolder: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 2
  },
  fontBold: {
    fontFamily: 'Mb-bold',
    fontSize: 17,
    color: '#000'
  },
  fontGray: {
    fontFamily: 'Mb-bold',
    color: '#D3D3D3'
  },
  fontDesc: {
    fontFamily: 'Mb-sbold',
    fontSize: 15
  },

})