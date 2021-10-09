const task = (el, options) => {

  const render = () => {
    el.append("<li>Item<li>")
  }

  render()

  el.addEventListener("click",() => {

  })
}

/**
 * addEventListener의 Event 종류
 * https://developer.mozilla.org/ko/docs/Web/Events
 * 
 */