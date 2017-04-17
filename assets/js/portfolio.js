window.onload = function() {

	for (var index = 0; index < 14; index++) {

		var modal = document.getElementsByClassName("modalDiv")[index];

		// Get the image and insert it inside the modal - use its "alt" text as a caption
		var img = document.getElementsByClassName("modalImgPre")[index];
		var modalImg = document.getElementsByClassName("modalImg")[index];
		var captionText = document.getElementsByClassName("modalCaption")[index];
		img.onclick = function(){
			modal.style.display = "block";
			modalImg.src = this.src;
			captionText.innerHTML = this.alt;
		}

		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[index];

		// When the user clicks on <span> (x), close the modal
		span.onclick = function() { 
			modal.style.display = "none";
		}
	}

}

function portDisplay() {
    var selectedCategory = $("#portSelect option:selected").text();
    var Banners = document.getElementById("portBanners");
    var Overlays = document.getElementById("portOverlays");
    var Packages = document.getElementById("portPackages");
    var Thumbnails = document.getElementById("portThumbnails");

    if (selectedCategory == "Everything") {
        Banners.style.display = "block";
        Overlays.style.display = "block";
        Packages.style.display = "block";
        Thumbnails.style.display = "block";
    }

    if (selectedCategory == "Banners") {
        Banners.style.display = "block";
        Overlays.style.display = "none";
        Packages.style.display = "none";
        Thumbnails.style.display = "none";
    }

    if (selectedCategory == "Overlays") {
        Banners.style.display = "none";
        Overlays.style.display = "block";
        Packages.style.display = "none";
        Thumbnails.style.display = "none";
    }

    if (selectedCategory == "Full Packages") {
        Banners.style.display = "none";
        Overlays.style.display = "none";
        Packages.style.display = "block";
        Thumbnails.style.display = "none";
    }

    if (selectedCategory == "Thumbnails") {
        Banners.style.display = "none";
        Overlays.style.display = "none";
        Packages.style.display = "none";
        Thumbnails.style.display = "block";
    }
}