




const images = document.querySelectorAll('img[data-src]')

const preloadingImage = (img) => {
  const src = img.getAttribute('data-src')
  img.src = src
}

const imgOptions = {
  threshold: 0.8,
}

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return
    } else {
      preloadingImage(entry.target)
      imgObserver.unobserve(entry.target)
      entry.target.style.filter = 'blur(0em)'
    }
  })
}, imgOptions)

images.forEach((image) => {
  imgObserver.observe(image)
})
