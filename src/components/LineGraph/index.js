import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {Feather} from '@expo/vector-icons';

export default function LineGraph({data}) {

    const [revenueUp, setRevenueUp] = useState(true);
    const [percent, setPercent] = useState(0);

    useEffect(() =>{
        if (verifyPercent(data) < 0) {
            setRevenueUp(false);
        } 
    }, []);

    function verifyPercent(data){
        //Calculo de porcentagem de subida de valor:
        // (100 * (today - yesterday)) / yesterday
        let perc = (100 * (parseFloat(data[6]) - parseFloat(data[5]))) / data[5];
        setPercent(perc.toFixed(2));
    }

 return (
   <View style={styles.container}>
    <View style={styles.headerGraph}>
        <Text style={styles.title}>Receita</Text>
        {
            revenueUp ? (
                <>
                    <Text style={styles.up}>+{percent}%</Text>
                    <Feather name='trending-up' style={styles.icon} size={22} color='#2ECC71'/>
                    <Text style={styles.dayUp}>Hoje</Text>
                </>
            ) :(
                <>
                    <Text style={styles.down}>{percent}%</Text>
                    <Feather name='trending-down' style={styles.icon} size={22} color='#E74C3C'/>
                    <Text style={styles.dayDown}>Hoje</Text>
                </>
            )
        }
        
    </View>

    <LineChart
    data={{
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [{data}]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={220}
    yAxisLabel="R$"
    yAxisSuffix={''} 
    chartConfig={styles.chart}
    bezier
    withInnerLines={false}
    withOuterLines={false}

  />


   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginStart: 14,
        marginEnd: 14,
    },
    headerGraph:{
        flexDirection: 'row',
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 14,
        marginRight: 10
    },
    icon:{
        marginLeft: 4,
        marginRight: 4,
    },
    up:{
        color: '#2ECC71',
        fontWeight: 'bold',
    },
    dayUp:{
        color: '#2ECC71',
        fontWeight: 'bold',
    },
    dayDown:{
        color: '#E74C3C',
        fontWeight: 'bold',
    },
    down:{
        color: '#E74C3C',
        fontWeight: 'bold',
    },
    chart:{
        backgroundColor: "#FAFAFA",
        backgroundGradientFrom: "#FAFAFA",
        backgroundGradientTo: "#FAFAFA",
        decimalPlaces: 1, // optional, defaults to 2dp
        color: () => `#8305b4`,
        labelColor: () => `#8305b4`,
        style: {
          borderRadius: 10
        },
        propsForDots: {
          r: "6",
          strokeWidth: "2",
          stroke: "#FFF"
        }
      }
})