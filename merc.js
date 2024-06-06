document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('myVideo');

    // Tạo IntersectionObserver
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                video.play();
            } else {
                video.pause();
            }
        });
    });

    // Bắt đầu quan sát video
    observer.observe(video);
});