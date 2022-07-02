//infor 的換頁
$(document).ready(function() {
    $(".dot").hover(function() {
        var cur = $(this);
        var dest = cur.position().left;
        var t = 0.6;
        TweenMax.to($(".select"), t, { x: dest, ease: Back.easeOut })
    });
    var Location = $(".select").position().left;

    function updatescope() {
        var pos = $(".select").position().left;

        var speed = Math.abs(pos - Location);
        var d = 44;
        var set = -20;
        var hd = d / 2;
        var scope = (set + pos) % d;
        if (scope > hd) {
            scope = hd - (scope - hd);
        }
        scope = 1 - ((scope / hd) * 0.35);
        TweenMax.to($(".select"), 0.1, { scopeY: scope, scopeX: 1 + (speed * 0.06) })

        Location = pos;
        requestAnimationFrame(updatescope);
    }
    requestAnimationFrame(updatescope);
    $(".dot:eq(0)").trigger("mouseover");
})