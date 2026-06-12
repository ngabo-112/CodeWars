/* const abc1 = "abcdefghijklmnopqrstuvwxyz";
const abc2 = "etaoinshrdlucmfwypvbgkjqxz";

const sub = new SubstitutionCipher(abc1, abc2);
sub.encode("abc") // => "eta"
sub.encode("xyz") // => "qxz"
sub.encode("aeiou") // => "eirfg"

sub.decode("eta") // => "abc"
sub.decode("qxz") // => "xyz"
sub.decode("eirfg") // => "aeiou" */


class SubstitutionCipher {
    constructor(abc1, abc2) {
        this.abc1 = abc1;
        this.abc2 = abc2;
    }

    encode(plaintext) {
        let arr = [];
        let arr2 = [];
        let result = "";

        arr = this.abc1.split("");
        arr2 = plaintext.split("");

        for (let i = 0; i < arr2.length; i++) {
            let num = arr.indexOf(arr2[i]);
            result += this.abc2[num];
        }

        return result;
    }

    decode(ciphertext) {
        let arr = [];
        let arr2 = [];
        let result = "";

        arr = this.abc2.split("");
        arr2 = ciphertext.split("");

        for (let i = 0; i < arr2.length; i++) {
            let num = arr.indexOf(arr2[i]);
            result += this.abc1[num];
        }

        return result;
    }
}x