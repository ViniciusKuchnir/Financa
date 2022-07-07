import { StyleSheet, Text, View, FlatList, ScrollView, StatusBar } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';
import LineGraph from '../../components/LineGraph';

const list = [
    {
        id: 1,
        label: 'Boleto conta luz',
        value: '300,90',
        date: '02/07/2022',
        type: 0 //Despesas
    },
    {
        id: 2,
        label: 'PIX Cliente Joaquim',
        value: '2.500,00',
        date: '03/07/2022',
        type: 1 //Receita / Entradas
    },
    {
        id: 3,
        label: 'Salário',
        value: '7.200,00',
        date: '06/07/2022',
        type: 1 //Receita / Entradas
    },
]

const data = [
    297.00,
    350.00,
    600.82,
    2500.23,
    2550.23,
    2555.11,
    2800.53
  ]

export default function Home() {
  return (
    <ScrollView style={styles.container} verticalScroll={true} showsVerticalScrollIndicator={false}>
        <StatusBar
          hidden={false}
          animated={true}
          backgroundColor='#8305b4'
          barStyle='light-content'
          showHideTransition={'fade'}
        />
        
        <Header name="Vinícius Kuchnir" />
        
        <Balance saldo='2800.53' gastos='-527,00' />

        <Actions />

        <LineGraph data={data}/>

        <Text style={styles.title} >Últimas movimentações</Text>
        <FlatList 
            style={styles.list}
            data={list}
            keyExtractor={(item) => String(item.id)}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => <Movements data={item}>TESTE</Movements>}
        />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14
  },
  list:{
    marginStart: 14,
    marginEnd: 14
  }
});
