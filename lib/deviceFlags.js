
module.exports = {
    'DSP-W215': {
        type: 'Smart plug',
        canSwitchOnOff: true,
        hasTemp: true,
        hasPower: true,
        hasTotalPower: true,
        hasLastDetected: false
    },
    'DCH-S150': {
        type: 'Motion detection',
        canSwitchOnOff: false,
        hasTemp: false,
        hasPower: false,
        hasTotalPower: false,
        hasLastDetected: true
    },
    'DCH-S160': {
        type: 'Water detection',
        canSwitchOnOff: false,
        hasTemp: false,
        hasPower: false,
        hasTotalPower: false,
        hasLastDetected: true
    },
    'DSP-W115': {
        type: 'Smart plug',
        canSwitchOnOff: true,
        hasTemp: false,
        hasPower: false,
        hasTotalPower: false,
        hasLastDetected: false
    }
};
