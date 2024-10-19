const modalWrapper = document.querySelector(".modal-wrapper")
const modalImageWrapper = document.querySelector(".modal-wrapper .modal")
const gridImageWrappers = document.querySelectorAll(".grid .img-wrapper")
let latestModalImage = null

function openModal(modalImage) {
  modalWrapper.classList.remove("hidden")
  latestModalImage = modalImage
  modalImageWrapper.appendChild(modalImage)
}
async function closeModal() {
  const imageIDAttribute = latestModalImage.getAttribute("data-imgID")
  const imageWrapper = document.querySelector(`#${imageIDAttribute}`)
  imageWrapper.appendChild(latestModalImage)
  modalWrapper.classList.add("hidden")
}

// EVent listeners
gridImageWrappers.forEach((imgWrapper) => {
  imgWrapper.addEventListener("click", async () => {
    const image = imgWrapper.querySelector("img")

    image.style.viewTransitionName = "modal-img"
    const viewTransition = await document.startViewTransition(() =>
      openModal(image)
    )
    await viewTransition.finished
    latestModalImage.style.viewTransitionName = "none"
  })
})

modalWrapper.addEventListener("click", async () => {
  const image = modalImageWrapper.querySelector("img")

  image.style.viewTransitionName = "modal-img"
  const viewTransition = document.startViewTransition(() => closeModal())
  await viewTransition.finished
  latestModalImage.style.viewTransitionName = "none"
})
