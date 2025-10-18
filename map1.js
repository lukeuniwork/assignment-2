var vg_1 = "map1.json";

vegaEmbed("#map1", vg_1, {actions: false}).then(function(result) {
    const view = result.view;

    const slider = document.getElementById('month-slider');
    slider.addEventListener('input', () => {
        view.signal('monthIndex', +slider.value).run();
    });

    const dropdown = document.getElementById('state-dropdown');
    dropdown.addEventListener('change', () => {
        view.signal('stateZoom', dropdown.value).run();
    });
}).catch(console.error);


var vg_2 = "map2.json";
vegaEmbed("#map2", vg_2).catch(console.error);

var vg_3 = "stacked-bar2.json";
vegaEmbed("#plot1", vg_3).catch(console.error);

var vg_4 = "dbd.json";
vegaEmbed("#dbd", vg_4).catch(console.error);

var vg_5 = "fire-ages.json";
vegaEmbed("#fire-ages", vg_5).catch(console.error);

var vg_6 = "fire-indegenous.json";
vegaEmbed("#fire-indigenous", vg_6).catch(console.error);
