		window.onload = function() {

			for (var index = 0; index < 7; index++) {

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