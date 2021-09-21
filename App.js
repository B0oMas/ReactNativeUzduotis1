/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {Component} from 'react';
 import {View, Text, StyleSheet, Button} from 'react-native';
 
 export default class App extends Component {
   constructor() {
     super();
     this.state = {
       box1: 'red',
       box2: 'blue',
       box3: 'yellow',
       box4: 'purple',
     };
   }
   updateInformation1() {
     if (this.state.box1 === 'red') {
       this.setState({
       box1:'green'
       });
     }else{
       this.setState({
         box1:'red'
       });
     }}
    updateInformation2(){
     if (this.state.box2 === 'blue') {
       this.setState({
         box2:'purple'
       });
       }
       else{
        this.setState({
          box2:'blue'
        })
     }
   }
   updateInformation3(){
    if (this.state.box3 === 'yellow') {
      this.setState({
        box3:'red'
      });
      }
      else{
       this.setState({
         box3:'yellow'
       })
    }
   }
   updateInformation4(){
    if (this.state.box4 === 'purple') {
      this.setState({
        box4:'orange'
      });
      }
      else{
       this.setState({
         box4:'purple'
       })
    }
   }
   render() {
     return (
      <View style={styles.style}>
        <View style={styles.secondstyle}>
          <Button title='Pakeisti spalva' onPress={() => this.updateInformation1()}/>
          <Button title='Pakeisti spalva' onPress={() => this.updateInformation2()}/>
          <Button title='Pakeisti spalva' onPress={() => this.updateInformation3()}/>
          <Button title='Pakeisti spalva' onPress={() => this.updateInformation4()}/>
        </View>
        <View style={styles.secondstyle}>
        <View style={[styles.box, {backgroundColor:this.state.box1}]}/>
          <View style={[styles.box, {backgroundColor:this.state.box2}]}/>
          <View style={[styles.box, {backgroundColor:this.state.box3}]}/>
          <View style={[styles.box, {backgroundColor:this.state.box4}]}/>
          </View>      
      </View>

     );
   }
 }
 const styles = StyleSheet.create({
  
   box: {
     width:100,
     height:100,
   },
   style: {
     flex: 1,
     flexDirection: 'row',
   },
   secondstyle: {
     flex: 1,
     alignItems:'center',
     justifyContent:'space-around',
   },
 });