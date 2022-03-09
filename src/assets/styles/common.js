import { StyleSheet } from 'react-native';
export const colors = {
    darkGray: '#4e4e4e',
    lightGray: '#949494',
    gray: '#535353',
    lightBorder: '#e1dcdc',
    richBlack: '#130f26'
};
export const commonStyles = StyleSheet.create({
    flexOne: {
        flex: 1
    },
    flexTwo: {
        flex: 2
    },
    flexThree: {
        flex: 3
    },
    container: {
        flex: 1,
        padding: 20
    },
    row: {
        flexDirection: 'row',
        flex: 1
    },
    marginTop10: {
        marginTop: 10
    },
    marginTop20: {
        marginTop: 20
    },
    paddingCards: {
        padding: 12
    }
});
