 //Image Menjadi Base 64

<input id="file" type="file">
<div id="list"></div>
  
      <script id="rendered-js">
function handleFileSelect(evt) {
  var f = evt.target.files[0];
  var reader = new FileReader();
  reader.onload = function (theFile) {

    return function (e) {
      // Render thumbnail.
      var span = document.createElement('span');
      span.innerHTML = ['<img class="thumb" src="', e.target.result,
      '" title="', escape(theFile.name), '" width="250"/>'].join('');
      document.getElementById('list').insertBefore(span, null);
    };
  }(f);

  reader.readAsDataURL(f);
}

document.getElementById('file').addEventListener('change', handleFileSelect, false);
    </script>

