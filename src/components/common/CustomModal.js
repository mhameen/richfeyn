import React from 'react';
import { Image, View, Text, StyleSheet, Pressable, Modal } from 'react-native';

import { colors, commonStyles } from '../../assets/styles/common';

const CustomModal = ({
    deleteItem,
    modalVisible,
    modalAction,
    toggleAction,
    setModalVisible,
    modalText = '',
    actionText = 'Delete'
}) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            fade={false}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>
                        {modalText}
                        {deleteItem}
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row'
                        }}
                    >
                        <Pressable
                            style={[styles.button, styles.buttonClose, commonStyles.marginRight10]}
                            onPress={modalAction}
                        >
                            <Text style={{ color: colors.richBlack }}>{actionText}</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonCancel]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Cancel</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: colors.white,
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: colors.richBlack,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 8,
        elevation: 2,
        borderWidth: 0.9,
        borderColor: colors.richBlack
    },
    buttonOpen: {
        backgroundColor: colors.richBlack
    },
    buttonCancel: {
        backgroundColor: colors.richBlack
    },
    textStyle: {
        color: colors.white,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '500'
    }
});

export default CustomModal;
