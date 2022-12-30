function isObjectEmpty(ob){for(var key in ob){if(ob.hasOwnProperty(key)){return false;}}
return true;}
function trim(text){text=text.replace(/^\s\s*/,'');var ws=/\s/,i=text.length;while(ws.test(text.charAt(i--)));return text.slice(0,i+1);}
function showNotify(message){showInfoModalGlobal({header:message});}
function showInfoModalGlobal(ob){var $modal=$('#global_information_modal');$modal.find('.js-header-information-modal').html(ob.header);$modal.modal('show');}