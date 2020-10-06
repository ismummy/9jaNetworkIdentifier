class Network {
    static getNetwork = (number) => {
        //source: https://www.5starsmsng.com/nigerian-phone-prefixes/
        const mtn = /^(234803|0803|234703|0703|234903|0903|234806|0806|234706|0706|234813|0813|234810|0810|234814|0814|234816|0816|234906|0906)/
        const airtel = /^(234802|0802|234902|0902|234701|0701|234808|0808|234708|0708|234812|0812|234907|0907|234901|0901)/
        const glo = /^(234805|0805|234705|0705|234905|0905|234807|0807|234815|0815|234811|0811)/
        const etisalat = /^(234809|0809|234909|0909|234817|0817|234818|0818|234908|0908|)/
        const STARCOMMS = /^(234819|0819|2347028|07028|2347029|07029)/
        const MULTILINKS = /^(2347029|2347027|07027|234709|0709)/
        const VISAFONE = /^(234704|0704|2347025|07025|2347026|07026)/
        const NTEL = /^(234804|0804)/
        const ZOOMMOBILE = /^(234707|0707)/
        const smile = /^(234702|0702)/

        if (mtn.test(number)) {
            return 'MTN';
        } else if (airtel.test(number)) {
            return "AIRTEL";
        } else if (glo.test(number)) {
            return "GLO";
        } else if (etisalat.test(number)) {
            return "ETISALAT"
        } else if (STARCOMMS.test(number)) {
            return "STARCOMMS"
        } else if (MULTILINKS.test(number)) {
            return "MULTILINKS"
        } else if (VISAFONE.test(number)) {
            return "VISAFONE"
        } else if (NTEL.test(number)) {
            return "NTEL"
        } else if (ZOOMMOBILE.test(number)) {
            return "ZOOMMOBILE"
        } else if (smile.test(number)) {
            return "SMILE"
        } else {
            return "UNKNOWN"
        }
    }
}

module.exports = Network;