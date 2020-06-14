import React,{useEffect} from 'react';
import { View, FlatList, SafeAreaView } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { NavBar,Text, Input } from 'galio-framework';



const UserCard =(props) => {
  return (
    <View style={{flexDirection: 'row',borderColor:'black', alignItems:'center', borderBottomWidth: 1,...props.style}}>
    <View style={{flex: 2}}> 
        <Text size={16} bold style={{marginBottom: 8}}>{props.data.name}</Text>
        <Text >{props.data.email}</Text>
    </View>
    <View style={{flex: 3}}> 
        <Text >{props.data.address}</Text>
    </View>
  </View>
  )
}


const mapStateToProps = (state, ownProps) =>{

  return {
    data: state.user.data[ownProps.item]
  }
}

export default connect(mapStateToProps, null)(UserCard)