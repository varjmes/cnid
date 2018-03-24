document.addEventListener("DOMContentLoaded", function(event) {
  const images = document.querySelectorAll(".js-image")
  const config = {
    rootMargin: "50px 0px",
    threshold: 0.01
  }

  let observer = new IntersectionObserver(onIntersection, config)
  images.forEach(image => {
    observer.observe(image)
  })

  function onIntersection(entries) {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        observer.unobserve(entry.target)
        entry.target.src = entry.target.dataset.src
      }
    })
  }
})
