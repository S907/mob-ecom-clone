import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Svg, Ellipse, Path, Rect, Polygon, Circle } from 'react-native-svg';
const SemicircleView = ({ children, backgroundColor }) => {
    return (
        <View style={[styles.container, { backgroundColor }]}>
            <View style={styles.semicircle} />
            <View style={styles.content}>{children}</View>
        </View>
    );
};

const SemicircleView2 = ({ children, backgroundColor }) => {
    return (
        <View style={[styles.container, { backgroundColor }]}>
            <View style={styles.upperSection} />
            <View style={styles.lowerSection}>
                <View style={styles.semicircle} />
                <View style={styles.content}>{children}</View>
            </View>
        </View>
    );
};
const WavySemicircleBackground = ({ backgroundColor, waveColor, height }) => {
    return (
        <View style={[styles.container2, { height }]}>
            <Svg
                height="100%"
                width="100%"
                viewBox={`0 0 ${height * 2} ${height}`}
                style={{ position: 'absolute', top: 0, left: 0 }}
            >
                <Path
                    d={`M0,${height} C${height / 4},${height / 2} ${height * 3 / 4},${height / 2} ${height},${height} L${height},0 L0,0 Z`}
                    fill={waveColor}
                />
            </Svg>
            <View style={[styles.content2, { backgroundColor }]} />
        </View>
    );
};
const RoundedCorner = () => {
    return (
        <View style={styles.container}>
            <View style={styles.rectangle} />
            <View style={styles.oval} />
        </View>
    );
};
const screenWidth = Dimensions.get('window').width;
const MyProfile = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'green' }}>
            <View
                style={{
                    width: '100%',
                    backgroundColor: 'gray',
                    height: 130,
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                }}>
                {/* <Svg height={200}
                    width={Dimensions.get('screen').width}
                    viewBox="0 0 1440 320"
                    >
                        <Svg.Path fill='blue' 
                        d='' 
                        /> 
                    </Svg> */}
                <Svg
                    width={Dimensions.get('screen').width}
                    height='200'
                    viewBox="0 0 1440 320"
                >
                    <Path d="M16.993 6.667H3.227l6.883 6.883 6.883-6.883z" fill="#000" />
                </Svg>
                <Text>Profile</Text>
            </View>
            <SemicircleView backgroundColor="skyblue">
                <Text style={styles.text}>Contents in the Middle</Text>
            </SemicircleView>
            <View style={{
                backgroundColor: 'red', height: 100, borderRadius: 30,
                backgroundColor: 'orange',
                transform: [{ scaleX: 1 }]
            }}>
                {/* <View style={{ backgroundColor: 'yellow', height: 50, borderEndStartRadius: 50, borderBottomEndRadius: 50 }}>

                </View> */}
            </View>



            {/* <SemicircleView2 backgroundColor="skyblue">
                <Text style={styles.text}>Contents in the Middle</Text>
            </SemicircleView2>

            <View style={styles.appContainer}>
                <WavySemicircleBackground backgroundColor="skyblue" waveColor="white" height={200} />
            </View> */}

            <View style={{
                width:'100%',
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                // overflow:'hidden'
            }}>
                <Text style={styles.headerText}>Oval Shape</Text>
                <View style={styles.OvalShapeView} />
            </View>
        </View>
    )
}

export default MyProfile

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container2: {
        width: '100%',
        overflow: 'hidden',
    },
    content2: {
        flex: 1,
        backgroundColor: 'skyblue', // Background color of the content area
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        overflow: 'hidden',
    },
    semicircle: {
        width: 200,
        height: 100,
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
        backgroundColor: 'white',
    },
    content: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    container2: {
        overflow: 'hidden',
    },
    rectangle: {
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent',
    },
    headerText: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        fontWeight: "bold"
    },
    OvalShapeView: {
        marginTop: 20,
        width: 150,
        width:'50%',
        height: 200,
        backgroundColor: '#FF9800',
        borderRadius: 120, // Half of the width and height for a perfect oval
        transform: [{ scaleX: 2 }], // ScaleX may need to be adjusted depending on the aspect ratio
    },

})