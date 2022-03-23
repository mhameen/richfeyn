import { StyleSheet } from 'react-native';

export const colors = {
    darkGray: '#4e4e4e',
    lightGray: '#949494',
    gray: '#535353',
    lightBorder: '#e1dcdc',
    richBlack: '#130f26',
    bgColor: '#E5E5E5',
    borderColor: '#E1DCDC',
    white: '#fcfcfc',
    richOrange: '#D74E09',
    richGreen: '#629460',
    buttonGray: '#DADADA',
    counterGray: '#F5F5F8'
};

export const dimensions = {
    cardHeight: 256
};

export const commonStyles = StyleSheet.create({
    flexHalf: {
        flex: 0.5
    },
    flexOne: {
        flex: 1
    },
    flexTwo: {
        flex: 2
    },
    flexThree: {
        flex: 3
    },
    flexFour: {
        flex: 4
    },
    container: {
        flex: 1,
        padding: 20
    },
    safeArea: {
        flex: 1
    },
    row: {
        flexDirection: 'row',
        flex: 1
    },
    marginTop10: {
        marginTop: 10
    },
    marginTop40: {
        marginTop: 40
    },
    marginV10: {
        marginVertical: 10
    },
    marginTop20: {
        marginTop: 20
    },
    padding12: {
        padding: 12
    },
    paddingB10: {
        padding: 10
    },
    font16: {
        fontSize: 16
    },
    jccaie: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    flexOneCenter: { flex: 1, alignItems: 'center' }
});
