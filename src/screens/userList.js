import React,{useEffect, useState} from 'react';
import { View, FlatList, SafeAreaView , StyleSheet} from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {getusers} from '../modules/users/action'
import { NavBar,Text , Input} from 'galio-framework';
import UserCard from '../components/molecules/user-card'
import { LinearGradient } from 'expo-linear-gradient';



let skip = 0
let limit = 10
let timer = null

function UserList(props) {
  const [search, serSearch ] = useState('')
  useEffect(() => {
    freshfetch()
    return () => {
      if(timer) {
        clearTimeout(timer)

      }
    }
  },200)

 const freshfetch = () => {
    fecthdata(0)
  }

  const fetchMore = () => {
    if(!props.loading){
      skip +=1
      fecthdata(skip)
    }
  }

  const fecthdata = (_skip) => {
    props.getusers({search, skip:_skip, limit})
  }

  const handleSearchChange = (e) => {
    serSearch(e)
    if(timer){
      timer = null
    }else{
      timer = setTimeout(() => {
        freshfetch()
        clearTimeout(timer)

      },200)
    }
  }

  return (
    <SafeAreaView style={{backgroundColor:"white", flex: 1}}>    
          <LinearGradient   
        start={{x: 0.0, y: 0.25}} 
        end={{x: 1, y: 1.0}}
        style={{...StyleSheet.absoluteFillObject}} 
        colors={['#02b1e8', '#00d4ff', '#baedf7']}
      />
    <View style={{paddingHorizontal:16, alignItems:"center",  flexDirection:"row"}}>
      <View style={{flex:1, marginRight: 24}}>
      <Input onChangeText={handleSearchChange}> </Input>

      </View>
      <View style={{width:50}}>
        <Text p1>me</Text>
      </View>
    </View>
    <FlatList 
    style={{flex:1}}
    onEndReached={fetchMore}
    onRefresh={freshfetch} 
    refreshing={props.loading} 
    data={props.data} renderItem={(({item}) => <UserCard  key={item} item={item} style={{marginHorizontal:16,paddingVertical: 16}}/>) } />
    </SafeAreaView>
  );
}



const mapStateToProps = (state) =>{
  return {
    loading: state.user.loading,
    data: state.user.order
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({getusers}, dispatch)


export default connect(mapStateToProps,mapDispatchToProps) (UserList);

