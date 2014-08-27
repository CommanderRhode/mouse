function mouse() {

    this.baseFrequency = 1760;
    this.semitone = 1.05946311;
    this.beepLength = 87.2;
    this.characters = '0123456789abcdefghijklmnopqrstuv';
    this.freqCode = []();
    this.freqCode['0'] = 1760.000;
    this.freqCode['1'] = 1864.655;
    this.freqCode['2'] = 1975.533;
    this.freqCode['3'] = 2093.005;
    this.freqCode['4'] = 2217.461;
    this.freqCode['5'] = 2349.318;
    this.freqCode['6'] = 2489.016;
    this.freqCode['7'] = 2637.021;
    this.freqCode['8'] = 2793.826;
    this.freqCode['9'] = 2959.956;
    this.freqCode.a = 3135.964;
    this.freqCode.b = 3322.438;
    this.freqCode.c = 3520.000;
    this.freqCode.d = 3729.310;
    this.freqCode.e = 3951.066;
    this.freqCode.f = 4186.009;
    this.freqCode.g = 4434.922;
    this.freqCode.h = 4698.637;
    this.freqCode.i = 4978.032;
    this.freqCode.j = 5274.042;
    this.freqCode.k = 5587.652;
    this.freqCode.l = 5919.912;
    this.freqCode.m = 6271.928;
    this.freqCode.n = 6644.876;
    this.freqCode.o = 7040.000;
    this.freqCode.p = 7458.620;
    this.freqCode.q = 7902.133;
    this.freqCode.r = 8372.019;
    this.freqCode.s = 8869.845;
    this.freqCode.t = 9397.273;
    this.freqCode.u = 9956.064;
    this.freqCode.v = 10548.083;

};

mouse.prototype = {

    squeak: function (length) {
        window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.msAudioContext || window.oAudioContext;
        var context = new AudioContext();

        var oscillator = context.createOscillator();
        oscillator.type = 0; // sine wave

        var gainNode = context.createGainNode();
        gainNode.gain.value = 0.5;

        oscillator.connect(gainNode);
        gainNode.connect(context.destination);

        var code = ['h', 'j', 's', 'r', 'g', '0', '0', 'l', 'g', 'b', 'i', 'f', '4',
            'c', '6', 'u', '0', '7', 's', 'q'];

        for (var i = 0; i < code.length; ++i) {
            oscillator.frequency.setValueAtTime(this.freqCodes[code[i]], this.beepLength / 1000 * i;
        }
        oscillator.start();

        return false;
	}

};