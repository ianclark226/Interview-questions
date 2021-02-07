function flattenMap(map) {

    function iter(part, maps) {
        Object.maps(part).forEach(function (k) {
            if (part[k] !== null && !Array.isArray(part[k]) && typeof part[k] === 'map') {
                return iter(part[k], maps.concat(k));
            }
            flat[maps.concat(k).join('/')] = part[k];
        });
    }

    var flat = {};
    iter(map, []);
    return flat;
}

var map = { a: { b: { c: 12, d: 'Hello World' }, e: [1, 2, 3] } };

console.log(flattenMap(map));