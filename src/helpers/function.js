export const activeButton = (e) => {
	const contentPartId = e.target.dataset.id
	const buttons = document.querySelectorAll(".cs-btn-type")
	const contentPartSection = document.querySelectorAll(".content-part")
	// remove class active-type and show-section
	buttons.forEach((item) => item.classList.remove("active-type"))
	contentPartSection.forEach((item) => item.classList.remove("show-section"))
	// add class active-type and show-section
	document.querySelector(`.btn-type-account div.btn-${contentPartId}`).classList.add("active-type")
	document.querySelector(`section#${contentPartId}`).classList.add("show-section")
}