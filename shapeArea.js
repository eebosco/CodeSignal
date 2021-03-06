function shapeArea(n) {
    var area, area1, area2;
    if (n == 1) {
        area = 1;
    } else {
        area1 = Math.pow(n, 2);
        area2 = Math.pow(n - 1, 2);
        area = area1 + area2;
    }
    return area;
}
