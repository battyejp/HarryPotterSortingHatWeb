class AudioHelper {
    constructor(audioFilesLocation) {
        this.audioFilesLocation = audioFilesLocation;
    }

    playRandomSoundForHouse(houseName, onFinished) {
        let houseFile = this.audioFilesLocation + houseName + ".wav";
        let randomAudioFile = this.audioFilesLocation + this.getRandomStartFile();
        let audio = new Audio(randomAudioFile);
        audio.play();
        audio.addEventListener('ended', function () {
            window.setTimeout(function () {
                let houseAudio = new Audio(houseFile)
                houseAudio.play();
                houseAudio.addEventListener('ended', function () {
                    onFinished();
                });
            }, 1000);
        });        
    }

    getRandomStartFile(){
        let randomNumber = window.Math.floor(Math.random() * 5);
        switch (randomNumber) {
            case 0:
                return 'ahright.wav';
            case 1:
                return 'difficult.wav';
            case 2:
                return 'itsallhere.wav';
            case 3:
                return 'rightok.wav';
            case 4:
                return 'wheretoputyou.wav';
        }
    }
}