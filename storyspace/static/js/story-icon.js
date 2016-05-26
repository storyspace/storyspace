function make_story_icon(r, categories) {
    a = a_section = (2 * Math.PI) / categories.length;

    x1 = 2 * r;
    y1 = r;

    svg_string = '<svg class="icon story_icon" viewBox="0 0 ' + x1 + ' ' + x1 + '">';

    if (categories.length > 1) {
        for (i = 0; i < categories.length; ++i) {
            x2 = r + r * Math.cos(a);
            y2 = r + r * Math.sin(a);

            svg_string += '<path class="' + categories[i] + '" d="M' + r + ',' + r + ' L' + x1 + ',' + y1 + ' A' + r + ',' + r + ' 1 0, 1 ' + x2 + ',' + y2 + ' z"></path>';

            x1 = x2;
            y1 = y2;
            a += a_section;
        }
    } else {
        svg_string += '<circle class="' + categories[0] + '" cx="' + r + '" cy="' + r + '" r="' + r + '"></circle>';
    }

    svg_string += '</svg>';

    return svg_string;
}
