/**
 * To split arrays into fixed size chunks.
 *
 * @param array arr
 * @param number chunk_size
 * @returns any
 */
function array_chunk(arr, chunk_size) {
    is_array(arr);
    if (typeof chunk_size != "number") {
        throw new TypeError("chunk_size should be a integer!");
    }

    let length = arr.length;
    chunk_size = Math.abs(Math.round(chunk_size));

    if (chunk_size > length || [0, null, NaN].includes(chunk_size)) {
        return arr;
    } else {
        let modified_array = [];
        for (let index = 0; index < length; index += chunk_size) {
            modified_array.push(arr.slice(index, index + chunk_size));
        }
        arr = modified_array;
        return arr;
    }
}

export {
    array_chunk,
};