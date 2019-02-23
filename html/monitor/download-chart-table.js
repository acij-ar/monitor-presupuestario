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
        console.log('clicked');
        if (window._monitorTableDownloadData && window._monitorTableDownloadData.length > 0) {
            var data = JSON.stringify(_monitorTableDownloadData, null, 2);
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