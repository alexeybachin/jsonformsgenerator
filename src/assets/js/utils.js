/**
 * Generates random ID
 * @returns {string}
 * @constructor
 */
export const ID = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
}

/**
 * Formats date as required for input[type="date"]
 * @param date
 * @returns {string}
 */
export const formattedDate = ( date ) => {
    let d = new Date( date ),
        day = ( d.getDate() ).toString(),
        month = ( d.getMonth() + 1 ).toString(),
        year = ( d.getFullYear() ).toString();

    if ( month.length < 2 ) month = '0' + month;
    if ( day.length < 2 ) day = '0' + day;

    return [ year, month, day ].join( '-' );
}

/**
 * Checks if given string is valid JSON
 * @param str
 * @returns {boolean}
 */
export const isJSON = ( str ) => {
    try {
        JSON.parse( str );
    } catch ( e ) {
        return false;
    }
    return true;
}