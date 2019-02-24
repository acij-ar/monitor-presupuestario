(function () {
    function _bindSelector(selector, callback) {
        var element = document.querySelector(selector);
        if (element && element.getAttribute('data-callback') !== 'set') {
            element.addEventListener('click', callback);
            element.setAttribute('data-callback', 'set');
        }
        setTimeout(function () {
            _bindSelector(selector, callback)
        }, 1000);
    }

    _bindSelector('.monitor-chart-selector', _showChartForOption);

    window._updateChartSelector = function (options) {
        options = options.concat([]);
        options.sort(function (a, b) {
            var nameA = (a.programa_desc || a.jurisdiccion_desc).toLowerCase();
            var nameB = (b.programa_desc || b.jurisdiccion_desc).toLowerCase();
            if (nameA < nameB)
                return -1;
            if (nameA > nameB)
                return 1;
            return 0;
        });
        var selector = document.querySelector('.monitor-chart-selector');
        while (selector.firstChild) {
            selector.removeChild(selector.firstChild);
        }
        selector.options[selector.options.length] = new Option('', '');
        for (var i = 0; i < options.length; i++) {
            var name = options[i].programa_desc || options[i].jurisdiccion_desc;
            var optionElement = new Option(name, name);
            optionElement.setAttribute('data-jurisdiction', options[i].jurisdiccion_desc);
            optionElement.setAttribute('data-program', name);
            optionElement.setAttribute('data-id', options[i].programa_id);
            selector.options[selector.options.length] = optionElement;
        }
    };

    function _showChartForOption() {
        var selector = document.querySelector('.monitor-chart-selector');
        var selectedOption = selector.options[selector.selectedIndex];
        var jurisdiction = selectedOption.getAttribute('data-jurisdiction');
        var program = selectedOption.getAttribute('data-program');
        var id = selectedOption.getAttribute('data-id') ? parseInt(selectedOption.getAttribute('data-id')) : undefined;
        console.log(program, jurisdiction, id);
        _loadChartData(program, jurisdiction, id);
    }
})();