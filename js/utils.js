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
    const getHashByLocation = () => {
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
    /**
     * @description 时间戳转为date
     * @param {Number} 需要转换的时间戳
     * @returns {String}
     */
    const formatTimestampToDate = timestamp => {
        if (!isNaN(timestamp)) {
            const date = new Date(timestamp);
            const Y = date.getFullYear();
            let M = date.getMonth() + 1;
            M = M < 10 ? '0' + M : M;
            let D = date.getDate();
            D = D < 10 ? '0' + D : D;
            return `${Y}-${M}-${D}`;
        }
    }


    /**
     * @description 判断数组中是否包含传入的元素
     * @param arr
     * @param element
     * @returns {boolean}
     */
    arrayHasElement = (arr, element) => {
        const temp = new Set(arr.slice());
        return temp.has(element);
    }

    w._utils = {
        getHashByLocation,
        formatTimestampToDate,
    }
})(window, undefined)