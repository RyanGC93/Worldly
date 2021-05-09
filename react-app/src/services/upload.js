export async function getSignedRequest(photo){
    let res = await fetch('/sign_s3/?file_name='+photo.name+"&file_type="+photo.type);
    if (res.ok) {
      res = await res.json()
      console.log(res)
      uploadFile(photo, res.data, res.url);
    } else {
      console.error('could not get url')
    }
    return res.data.url + res.data.fields.key
  }
  
  export async function uploadFile(file, s3Data, url){
    const data = new FormData()
    for(const key in s3Data.fields){
      data.append(key, s3Data.fields[key]);
    }
    data.append('file', file)
    const res = await fetch(url, {
      method:'POST',
      body: data
    })
    return res
  }
  