
import './App.css'
import { IoLogoYoutube } from "react-icons/io5";
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [Url, setUrl] = useState("");
  const handleUrl = (e) => {
    e.preventDefault();
    setUrl(e.target.value);
  }

  const DownloadVideo = async () => {
    const options = {
      method: 'GET',
      url: 'https://youtube-data8.p.rapidapi.com/video/streaming-data/',
      params: {id: Url},
      headers: {
        'x-rapidapi-key': '59fcd087d6msh286b1e20b9aeb76p168953jsn99ccbd1183c0',
        'x-rapidapi-host': 'youtube-data8.p.rapidapi.com',
        'content-type' : 'application/json'
      }
    };
    
    try {
      const res = await axios.request(options);
      console.log( res?.data?.formats[Number(0)]?.url);
      
      window.location.href = res?.data?.formats[Number(0)]?.url;
    } catch (err) {
      console.log(err);
    }
    
  }

console.log(Url)
  return (
    <>
         <div className='h-screen w-screen bg-gradient-to-r from-red-300 to-teal-700 flex items-center justify-center flex-col gap-y-2'>

<div className="flex items-center justify-center gap-x-2 text-xl font-bold">
<IoLogoYoutube size={50} className='text-red-600' />
<p>Video Downloader</p>
</div>

<div className="flex gap-2">
  <input type="url"  className="h-10 w-[450px] border-none outline-none px-5 rounded-lg" onChange={handleUrl} value={Url}/>
  <button className="bg-red-600 h-10 px-2 rounded-lg font-bold hover:bg-black text-cyan-50" onClick={DownloadVideo}  >Download</button>
</div>
 
</div>
    </>
  )
}

export default App
