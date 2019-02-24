(function () {
    function _triggerDownload(filename, text) {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }

    function _downloadMonitorTableData() {
        if (window._monitorTableDownloadData && window._monitorTableDownloadData.length > 0) {
            var headers = [];
            for (var i=0; i<_monitorTableDownloadData.length; i++) {
                var rowObject = _monitorTableDownloadData[i];
                for (var variable in rowObject) {
                    if (rowObject.hasOwnProperty(variable) && headers.indexOf(variable) < 0) {
                        headers.push(variable)
                    }
                }
            }
            var rows = [headers.join(',')];
            for (var n=0; n<_monitorTableDownloadData.length; n++) {
                var row = [];
                for (var j=0; j<headers.length; j++) {
                    var header = headers[j];
                    var value = _monitorTableDownloadData[n][header];
                    row.push(value === undefined ? '' : value)
                }
                rows.push(row.join(','))
            }
            var data = rows.join('\n');
            _triggerDownload('datos.csv', data)
        }
    }

    function _downloadMonitorTreemapData() {
        console.log('treemap data')
    }

    function _downloadMonitorChartData() {
        console.log('monitor chart data')
    }

    function _downloadComparadorChartData() {
        console.log('comparador chart data')
    }

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

    _bindSelector('.monitor-download-chart', _downloadMonitorTableData);
    _bindSelector('div.is-pulled-left + .dropdown .dropdown-menu a:nth-child(2)', _downloadMonitorTreemapData);
    _bindSelector('h2.is-pulled-left + .dropdown .dropdown-menu a:nth-child(2)', _downloadMonitorChartData);
    _bindSelector('.field + .dropdown .dropdown-menu a:nth-child(2)', _downloadComparadorChartData);
})();