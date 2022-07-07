import React, {useState} from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    TouchableOpacity 
} from 'react-native';

import {MotiView} from 'moti';
import {Feather} from '@expo/vector-icons';

export default function Balance({saldo, gastos}) {

    const [showValue, setShowValue] = useState(false);
    const [showSpending, setShowSpending] = useState(false);

 return (
   <MotiView 
    style={styles.container}
    from={{
        rotateX: '-100deg',
        opacity: 0
    }}
    animate={{
        rotateX: '0deg',
        opacity: 1
    }}
    transition={{
        type: 'timing',
        delay: 300,
        duration: 900
    }}
    >
        <View style={styles.item}>
            {
                showValue ? (
                    <View style={styles.label}>
                        <Text style={styles.itemTitle}>Saldo</Text>
                        <TouchableOpacity onPress={() => setShowValue(!showValue)}>
                            <Feather name='eye' style={styles.iconEye} size={20} color='#8305b4' />
                        </TouchableOpacity> 
                    </View>
                ) : (
                    <View style={styles.label}>
                        <Text style={styles.itemTitle}>Saldo</Text>
                        <TouchableOpacity onPress={() => setShowValue(!showValue)}>
                            <Feather name='eye-off' style={styles.iconEye} size={20} color='#8305b4' />
                        </TouchableOpacity> 
                    </View>
                )
            }
            <View style={styles.content}>
                { showValue ? (
                    <>
                        <Text style={styles.currencySymbol}>R$</Text>
                        <Text style={styles.balance}>{saldo}</Text>
                    </>
                ): (
                    <View style={styles.skeleton}></View>    
                )}
            </View>
        </View>

        <View style={styles.item}>
        {
                showSpending ? (
                    <View style={styles.label}>
                        <Text style={styles.itemTitle}>Gastos</Text>
                        <TouchableOpacity onPress={() => setShowSpending(!showSpending)}>
                            <Feather name='eye' style={styles.iconEye} size={20} color='#8305b4' />
                        </TouchableOpacity> 
                    </View>
                ) : (
                    <View style={styles.label}>
                        <Text style={styles.itemTitle}>Gastos</Text>
                        <TouchableOpacity onPress={() => setShowSpending(!showSpending)}>
                            <Feather name='eye-off' style={styles.iconEye} size={20} color='#8305b4' />
                        </TouchableOpacity> 
                    </View>
                )
            }
            <View style={styles.content}>
                { showSpending ? (
                    <>
                        <Text style={styles.currencySymbol}>R$</Text>
                        <Text style={styles.expenses}>{gastos}</Text>
                    </>
                ): (
                    <View style={styles.skeleton}></View>    
                )}
            </View>
        </View>
   </MotiView>
  );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 18,
        paddingEnd: 18,
        marginTop: -24,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 4,
        paddingTop: 22,
        paddingBottom: 22,
        zIndex: 99,
    },
    label:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemTitle:{
        fontSize: 20,
        color: '#DADADA',
        marginRight: 14
    },
    content:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    currencySymbol:{
        color: '#DADADA',
        marginRight: 6,
    },
    balance:{
        fontSize: 22,
        color: '#2ECC71'
    },
    expenses:{
        fontSize: 22,
        color: '#E74C3C'
    },
    skeleton:{
        width: 100,
        height: 34,
        backgroundColor: '#DADADA',
        borderRadius: 20,
    }
    
});