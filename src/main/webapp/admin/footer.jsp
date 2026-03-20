<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>



		<footer class="main-footer">
			Session ID : ${pageContext.session.id}
			<div class="float-right d-none d-sm-block">
				<b>Version</b> 3.0.5
			</div>
			&nbsp;
		</footer>

	</div>

	<c:if test="${not empty command.toastMessage}">
		<script>
			var Toast = Swal.mixin({
			  toast: true,
			  position: 'top',
			  showConfirmButton: false,
			  timer: 2000,
			  width: 390,
			  timerProgressBar: true
			});
		
			Toast.fire({icon: '${command.toastIcon}', title: '${command.toastMessage}' });
			
		</script>
	</c:if>

<script>

	$( document ).ready(function() {
		
		$('.select2bs4').select2({
	    	theme: 'bootstrap4'
		});
		
		$('[data-mask]').inputmask();
	
		$('.date-picker').daterangepicker({
			singleDatePicker: true,
		    autoApply: true,
		    autoClose: true,
			locale: {
			      format: 'DD/MM/YYYY'
			}
		});

		$('.date-time-picker').daterangepicker({
			singleDatePicker: true,
			timePicker: true,
		    timePickerIncrement: 1,
		    autoApply: true,
		    autoClose: true,
		    timePicker24Hour: true,
		    locale: {
	        	format: 'DD/MM/YYYY HH:mm:ss'
	      	}
		});

		$('.upper-case').keyup(function() {
			$(this).val($(this).val().toUpperCase());
		});

		$(".allow-decimal").on("keypress keyup blur", function(event) {
			$(this).val($(this).val().replace(/[^0-9\.]/g, ''));
			if ((event.which != 46 || $(this).val().indexOf('.') != -1)
					&& (event.which < 48 || event.which > 57)) {
				event.preventDefault();
			}
		});
		
		$(".allow-integer").on("keypress keyup blur", function(event) {
			$(this).val($(this).val().replace(/[^\d].+/, ""));
			if ((event.which < 48 || event.which > 57)) {
				event.preventDefault();
			}
		});
	
		$(".allow-negative-integer").on("keypress keyup blur", function(event) {
		    let value = $(this).val();
		    $(this).val(value.replace(/[^0-9\-]/g, ""));

		    if (
		        (event.which < 48 || event.which > 57) && event.which !== 45 && event.which !== 8
		    ) {
		        event.preventDefault();
		    }

		    if (event.which === 45 && value.indexOf("-") !== -1) {
		        event.preventDefault();
		    }

		    if (event.which === 45 && this.selectionStart !== 0) {
		        event.preventDefault();
		    }
		});		
		$(".allow-integer-negative").on("keypress keyup blur", function(event) {
			$(this).val($(this).val().replace(/[-?][^\d].+/, ""));
			if ((event.which < 48 || event.which > 57) && (event.which != 45)) {
				event.preventDefault();
				
			}
		});
		
		$(".allow-decimal-negative").on("keypress keyup blur", function(event) {
			$(this).val($(this).val().replace(/[-?][^0-9\.]/g, ''));
			if ((event.which != 46 || $(this).val().indexOf('.') != -1)
					&& ((event.which < 48 || event.which > 57) && (event.which != 45))) {
				event.preventDefault();
			}
		});
		
		
		$("div[class*='color-picker-']").colorpicker();
		$("div[class*='color-picker-']").on('colorpickerChange', function(event) {
			$(this).find('.fa-square').css('color', event.color.toString());
		});
		
		$('.color-picker').colorpicker();
		$('.color-picker').on('colorpickerChange', function(event) {
			$('.color-picker .fa-square').css('color', event.color.toString());
		});
		
		$(document).ajaxError(function globalUnauthorizedAjaxHandler(event, xhr, ajaxOptions, thrownError) {
			if(xhr.status == 403) {
				window.location = '<c:out value="${pageContext.request.contextPath}"/>/logout.html';
			}
		});
		
		$("input[data-bootstrap-switch]").each(function() {
		    $(this).bootstrapSwitch();
		});

		bsCustomFileInput.init();
		
		 $('[data-toggle="tooltip"]').tooltip();
	});
  
</script>

<style>
	/*Select2 ReadOnly Start*/
    select[readonly="true"].select2-hidden-accessible + .select2-container {
        pointer-events: none;
        touch-action: none;
    }

    select[readonly="true"].select2-hidden-accessible + .select2-container .select2-selection {
        background: #eee;
        box-shadow: none;
    }

    select[readonly="true"].select2-hidden-accessible + .select2-container .select2-selection__arrow, select[readonly].select2-hidden-accessible + .select2-container .select2-selection__clear {
        display: none;
    }
    
	select[readonly].select2-hidden-accessible + .select2-container {
    	pointer-events: none;
    	touch-action: none;

    	.select2-selection {
        	background: #eee;
        	box-shadow: none;
    	}

    	.select2-selection__arrow, select[readonly].select2-hidden-accessible + .select2-container .select2-selection__clear {
        	display: none;
    	}
	}
</style>


</body>
</html>
