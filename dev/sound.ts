namespace SoundBuilder {
export class SoundBuilder {
        static getSound(name: String) {
            var sound = new Howl({
                    src: ['sounds/'+ name +'.wav'],
                    volume: 0.2
                });
        sound.play();     
        }
        static getSoundOnce(name: String) {
            var sound = new Howl({
                    src: ['sounds/'+ name +'.wav']
                });

            sound.play();

            sound.on('end', function() {
                sound.stop();
            });
        }
    }
}