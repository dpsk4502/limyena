 // <div w3-include-header="header.html"></div>
 var header = $('div[w3-include-header]').attr('w3-include-header');
 $('div[w3-include-header]').load(header);

 // <div w3-include-footer="footer.html"></div>
 var footer = $('div[w3-include-footer]').attr('w3-include-footer')
 $('div[w3-include-footer]').load(footer);