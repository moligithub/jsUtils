/**
 * @file 原生js工具库
 * @author moligithub
 * @date 2018-3-2
 * @version 1.0.0
 */
;((w, u) => {


    /**
     * @description 获取当前地址的hash
     * @param {null}
     * @returns {String} 当前地址的hash
     */
    getHashByLocation = () => {
        let originHASH = window.location.hash;
        if (originHASH && originHASH.length) {
            let HASH = originHASH;
            if (originHASH.indexOf('#') === 0) {
                HASH = originHASH.substring(1);
            }
            if (HASH.indexOf('/') === 0 && HASH.length > 1) {
                return HASH.substring(1);
            }
            return HASH;
        }
        return originHASH;
    }

    w._utils = {
        getHashByLocation
    }
})(window, undefined)