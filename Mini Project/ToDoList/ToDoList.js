let saveAlert = document.getElementById('saveAlert');
      let copyAlert = document.getElementById('copyAlert')

            $(function () {
              $('#saveBtn').on('click', function () {
                html2canvas(document.querySelector('#capture')).then(canvas => {
                  saveAs(canvas.toDataURL('image/png'), 'To-Do.png')
                })
                saveAlert.style.display='inline-block';
                setTimeout(function(){
                  saveAlert.style.display='none';
                }, 5000);
              })
              function saveAs(uri, filename) {
                var link = document.createElement('a')
                if (typeof link.download === 'string') {
                  link.href = uri
                  link.download = filename
                  document.body.appendChild(link)
                  link.click()
                  document.body.removeChild(link)
                } else {
                  window.open(uri)
                }
              }
            })


            $(function () {
              $('#copyBtn').on('click', function () {
                html2canvas(document.querySelector('#capture')).then(canvas => {
                  canvas.toBlob(blob=>{
                    navigator.clipboard.write([
                      new ClipboardItem({
                        'image/png': blob
                      })
                    ]);
                  });
                });
                copyAlert.style.display='inline-block';
                setTimeout(function(){
                  copyAlert.style.display='none'
                }, 5000);
              })
            })
