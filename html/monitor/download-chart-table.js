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
            _triggerDownload('datos.json', data)
        }
    }

    function _bindSelector() {
        var selector = document.querySelector('.monitor-download-chart');
        if (!selector) {
            setTimeout(_bindSelector, 500);
        } else {
            selector.addEventListener('click', _downloadMonitorTableData);
        }
    }

    _bindSelector();
})();