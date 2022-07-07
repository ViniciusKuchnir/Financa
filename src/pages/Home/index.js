import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';


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


export default function Home() {
  return (
    <View style={styles.container}>
        <Header name="Vinícius Kuchnir" />
        <Balance saldo='9.250,90' gastos='-527,00' />

        <Text style={styles.title} >Últimas movimentações</Text>
        <FlatList 
            style={styles.list}
            data={list}
            keyExtractor={(item) => String(item.id)}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => <Movements data={item}>TESTE</Movements>}
        />
    </View>
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
    marginLeft: 14,
    marginRight: 14,
    marginTop: 14,
  },
  list:{
    marginStart: 14,
    marginEnd: 14
  }
});
