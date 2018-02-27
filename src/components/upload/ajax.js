const getBody = (xhr) => {
  const text = xhr.responseText || xhr.response;
  if(!text){
    return text
  }
  try {
    return JSON.parse(text)
  } catch (error) {
    return text
  }
}

export default function upload(option) {
  if (typeof XMLHttpRequest === 'undefined') {
    return;
  }

  const xhr = new XMLHttpRequest();
  const action = option.action;

  if (xhr.upload) {
    xhr.upload.onprogress = (e) => {
      if (e.total > 0) {
        e.percent = e.loaded / e.total * 100
      }
      option.onProgress(e)
    }
  }
  const formData = new FormData();
  const filename = option.file.name || `${Date.now()}.png`;
  formData.append(option.name, option.file, filename)
  if (option.data) {
    Object.keys(option.data).forEach(key => {
      formData.append(key, option.data[key]);
    });
  }
  xhr.open('POST', option.action, true);
  xhr.send(formData);
  // onload
  xhr.onload = function onload() {
    // success
    if (xhr.readyState === 4 && xhr.status === 200) {
      option.onSuccess(getBody(xhr));
    }
    // error
    if (xhr.status < 200 || xhr.status >= 300) {
      // return option.onError(getError(action, option, xhr), getBody(xhr));
    }
  };
}
