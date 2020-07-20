window.addEventListener('load', function () {
  const anyAnchorTarget = window.location.href.split("/#/")[1]
  if (!anyAnchorTarget) {
    const newURL = `${window.location.href}/#/welcome`
    history.pushState({}, "", newURL)
    const articleLink = document.querySelector("article > a")
    if (articleLink)
      articleLink.dispatchEvent(new Event("click"))
  }
})
