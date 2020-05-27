$(document).ready(function () {

	// bower i jquery-validation --save-dev

	//validate
	jQuery.validator.addMethod("getPhone", function (value, element) {
		// allow any non-whitespace characters as the host part
		return this.optional(element) || /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){5,18}(\s*)?$/.test(value);
	}, 'Введите правильный номер телефона');
	$('.validate-form').each(function () {
		var curentForm = $(this);
		$(this).validate({
			highlight: function (element) { //даем родителю класс если есть ошибка
				$(element).parent().addClass("input-row--error");
			},
			unhighlight: function (element) {
				$(element).parent().removeClass("input-row--error");
			},
			rules: { //правила для полей
				name: {
					required: true,
				},
				phone: {
					required: true,
					minlength: 5,
					getPhone: true
				},
				mail: {
					required: true,
				},
				comment: {
					required: true,
					minlength: 5,
				},
				agree: {
					required: true
				}
			},
			messages: {
				name: {
					required: 'Обязательное поле',
				},
				phone: {
					required: 'Обязательное поле',
					number: 'Введите правильный номер',
					minlength: 'Номер должен быть длиннее',
				},
				mail: {
					required: 'Обязательное поле',
				},
				comment: {
					required: 'Обязательное поле',
					minlength: 'Сообщение должно быть длиннее',
				},
				agree: {
					required: false,
				}
			},
			submitHandler: function (form) {
				$.ajax({ //отправка ajax
					type: "POST",
					url: "sender.php",
					data: $(form).serialize(),
					timeout: 3000,
				});
				window.condition.initModal("trueMsg");
				setTimeout(function () {
					window.condition.closeModal();
					$(':input', '.validate-form') //очитска формы от данных
						.not(':button, :submit, :reset, :hidden')
						.val('')
						.removeAttr('checked')
						.removeAttr('selected')
				}, 80500)

			}
		});
	});
});