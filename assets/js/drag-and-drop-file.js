const drop_zones = document.querySelectorAll('.drop-zone-wrap');

drop_zones.forEach(zone_wrap => {

  const zone = zone_wrap.querySelector('.drop-zone');
  const message = zone_wrap.querySelector('.drop-zone-message');
  const input = zone_wrap.querySelector('input[type=file]');
  const submit = zone_wrap.querySelector('input[type=submit');

  zone.addEventListener("drop", (event) => {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    event.stopPropagation();

    // allowed file types
    const allowed_types = ['application/pdf','image/jpeg','image/png','image/gif'];

    // get the details of the the dropped file
    let dt = event.dataTransfer;
    let files = dt.files;
    let file = files[0];
    let file_name = file.name;
    let file_size = file.size / 1000000;
    let file_size_decimals = file_size.toFixed(2);
    let file_type = file.type;

    // check if the file is too large
    if (file_size > 16){
      message.innerHTML = "* Your file is too large ("+file_size_decimals+"MB). Files must be 16MB or smaller.";
      message.classList.remove('text-accent-blue');
      message.classList.add('text-dark-red');
      zone.classList.remove('drop-zone--blue');
      zone.classList.add('drop-zone--red');
      submit.classList.add('d-none');
    }
    // check if the file is the right format
    else if (!allowed_types.includes(file_type)){
      message.innerHTML = "This file format is not allowed. We accept the following formats - gif, jpg, png, pdf and jpeg.";
      message.classList.remove('text-accent-blue');
      message.classList.add('text-dark-red');
      zone.classList.remove('drop-zone--blue');
      zone.classList.add('drop-zone--red');
      submit.classList.add('d-none');
    }
    // if file is the right size and format do this
    else{
      message.classList.remove('text-accent-blue');
      message.classList.remove('text-dark-red');
      zone.classList.add('drop-zone--blue');
      zone.classList.remove('drop-zone--red');
      message.innerHTML = '<span class="material-symbols-outlined me-1 text-accent-blue">folder_shared</span><span>'+file_name+'</span>';
      submit.classList.remove('d-none');
    }

  });

  zone.addEventListener("dragleave", (event) => {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    event.stopPropagation();
    zone.classList.remove('drop-zone--blue');
  });

  zone.addEventListener("dragover", (event) => {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    event.stopPropagation();
    zone.classList.add('drop-zone--blue');
  });

  zone.addEventListener("dragenter", (event) => {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    event.stopPropagation();
    zone.classList.add('drop-zone--blue');
  });

  input.addEventListener("change", (event) => {
    // allowed file types
    const allowed_types = ['application/pdf','image/jpeg','image/png','image/gif'];

    let file = input.files[0];
    let file_name = file.name;
    let file_size = file.size / 1000000;
    let file_size_decimals = file_size.toFixed(2);
    let file_type = file.type;

    // check if the file is too large
    if (file_size > 16){
      message.innerHTML = "* Your file is too large ("+file_size_decimals+"MB). Files must be 16MB or smaller.";
      message.classList.remove('text-accent-blue');
      message.classList.add('text-dark-red');
      zone.classList.remove('drop-zone--blue');
      zone.classList.add('drop-zone--red');
      submit.classList.add('d-none');
    }
    // check if the file is the right format
    else if (!allowed_types.includes(file_type)){
      message.innerHTML = "This file format is not allowed. We accept the following formats - gif, jpg, png, pdf and jpeg.";
      message.classList.remove('text-accent-blue');
      message.classList.add('text-dark-red');
      zone.classList.remove('drop-zone--blue');
      zone.classList.add('drop-zone--red');
      submit.classList.add('d-none');
    }
    // if file is the right size and format do this
    else{
      message.classList.remove('text-accent-blue');
      message.classList.remove('text-dark-red');
      zone.classList.add('drop-zone--blue');
      zone.classList.remove('drop-zone--red');
      message.innerHTML = '<span class="material-symbols-outlined me-1 text-accent-blue">folder_shared</span><span>'+file_name+'</span>';
      submit.classList.remove('d-none');
    }

  });

});