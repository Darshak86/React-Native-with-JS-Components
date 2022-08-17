import CONFIG from './config';

const COLORS = {
    DEFAULT: {
        GREEN: '#00AC5E',
        WHITE: '#FFFFFF',
        BLUE: '#2773B0',
        LIGHT_GREEN: '#E5F2EA',
        GREY: '#808080',
        LIGHT_GREY: '#E5E5E5',
        VERY_LIGHT_GREY: '#CCCCCC',
        BLACK: '#404040',
        T_BLUE: '#49B3E2',
        RED: '#EB5757',
        LIGHT_WHITE:'#F7F7F7',
        SPLASH_GREEN:'#023F23'
    },
    DARK: {
       
    }
}

const getColor = (color) => {
    return (typeof COLORS[CONFIG.default_theme][color] === 'undefined') ? COLORS['DEFAULT'][color] : COLORS[CONFIG.default_theme][color];
};

export default getColor;