/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Table, Row, Rows} from 'react-native-table-component';

export default class TableComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff', flex: 1}}>
          <Row
            widthArr={this.props.width}
            data={this.props.tableHead}
            style={styles.head}
            textStyle={styles.text}
          />
          <Rows
            widthArr={this.props.width}
            data={this.props.tableData}
            textStyle={styles.text}
          />
        </Table>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {padding: 5, backgroundColor: '#fff'},
  head: {height: 40, backgroundColor: '#f1f8ff'},
  text: {margin: 6, textAlign: 'center'},
});
