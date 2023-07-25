document.getElementById('downloadBtn').addEventListener('click', function () {
    const videoUrl = document.getElementById('videoUrl').value;
    const videoId = extractVideoId(videoUrl);
  
    if (videoId) {
      const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
      document.getElementById('thumbnailImage').src = thumbnailUrl;
    } else {
      alert('Invalid YouTube video URL!');
    }
  });
  
  function extractVideoId(url) {
    const videoIdRegex = /(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^?&\n]+)/;
    const match = url.match(videoIdRegex);
    return match ? match[1] : null;
  }
  