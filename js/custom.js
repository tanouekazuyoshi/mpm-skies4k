
$(document).ready(function () {

	var $category_show = $('#main-category-toggler'),
		$main_category = $('#main-category'),
		$main_category_toggler_close = $('#main-category-toggler-close'),
		$main_category_toggler = $('#main-category-toggler');

	$category_show.click(function () {
		$main_category.slideDown();
		$main_category_toggler_close.show();
		$main_category_toggler.hide();
	});


	$main_category_toggler_close.click(function () {
		$main_category.slideUp();
		$main_category_toggler_close.hide();
		$main_category_toggler.slideDown();
	});

	$('[data-toggle="tooltip"]').tooltip();


	var $container = $('.masonry-container');
	$container.imagesLoaded(function () {
		$container.masonry({
			columnWidth: '.item',
			itemSelector: '.item'
		});
	});


	//フォーム、ファイル選択の画像表示対応
	$('#custom-movie-input').on('change', handleFileSelect1);
	function handleFileSelect1(evt) {
		$('#preview').remove();// 繰り返し実行時の処理
		$(this).parents('.input-group').after('<div id="preview"></div>');
		var files = evt.target.files;
		for (var i = 0, f; f = files[i]; i++) {
			var reader = new FileReader();
			reader.onload = (function (theFile) {
				return function (e) {
					if (theFile.type.match('image.*')) {
						var $html = ['<div class="d-inline-block mr-1 mt-1"><img class="img-thumbnail" src="', e.target.result, '" title="', escape(theFile.name), '" style="height:100px;" /><div class="small text-muted text-center">', escape(theFile.name), '</div></div>'].join('');// 画像では画像のプレビューとファイル名の表示
					} else {
						var $html = ['<div class="d-inline-block mr-1"><span class="small">', escape(theFile.name), '</span></div>'].join('');//画像以外はファイル名のみの表示
					}
					$('#preview').append($html);
				};
			})(f);
			reader.readAsDataURL(f);
		}
		$(this).next('.custom-file-label').html(+ files.length + '個のファイルを選択しました');
	}
	$('.reset').click(function () {
		$(this).parent().prev().children('.custom-file-label').html('ファイル選択...');
		$('.custom-file-input').val('');
		$('#preview').remove('');
	})


	//フォーム、ファイル選択の画像表示対応、その２
	$('#custom-thum-input').on('change', handleFileSelect2);
	function handleFileSelect2(evt) {
		$('#preview2').remove();// 繰り返し実行時の処理
		$(this).parents('.input-group').after('<div id="preview2"></div>');
		var files = evt.target.files;
		for (var i = 0, f; f = files[i]; i++) {
			var reader = new FileReader();
			reader.onload = (function (theFile) {
				return function (e) {
					if (theFile.type.match('image.*')) {
						var $html = ['<div class="d-inline-block mr-1 mt-1"><img class="img-thumbnail" src="', e.target.result, '" title="', escape(theFile.name), '" style="height:100px;" /><div class="small text-muted text-center">', escape(theFile.name), '</div></div>'].join('');// 画像では画像のプレビューとファイル名の表示
					} else {
						var $html = ['<div class="d-inline-block mr-1"><span class="small">', escape(theFile.name), '</span></div>'].join('');//画像以外はファイル名のみの表示
					}
					$('#preview2').append($html);
				};
			})(f);
			reader.readAsDataURL(f);
		}
		$(this).next('.custom-file-label').html(+ files.length + '個のファイルを選択しました');
	}
	//ファイルの取消
	$('.reset2').click(function () {
		$(this).parent().prev().children('.custom-file-label').html('ファイル選択...');
		$('.custom-file-input').val('');
		$('#preview2').remove('');
	})



	//フォームの入力検証
	window.addEventListener('load', function () {
		// カスタムブートストラップ検証スタイルを適用するすべてのフォームを取得
		var forms = document.getElementsByClassName('needs-validation');
		// ループして帰順を防ぐ
		var validation = Array.prototype.filter.call(forms, function (form) {
			form.addEventListener('submit', function (event) {
				if (form.checkValidity() === false) {
					event.preventDefault();
					event.stopPropagation();
				}
				form.classList.add('was-validated');
			}, false);
		});
	}, false);

	//データピッカー
	$('#editPageEndDate').datepicker({
		format: 'yyyy/mm/dd',
		language: 'ja',
		startView: 1,
	});

	$('#editOpenResDate').datepicker({
		format: 'yyyy/mm/dd',
		language: 'ja',
		startView: 1,
	});

	$('#editEventStartDate').datepicker({
		format: 'yyyy/mm/dd',
		language: 'ja',
		startView: 1,
	});
	
	$('#editEventEndDate').datepicker({
		format: 'yyyy/mm/dd',
		language: 'ja',
		startView: 1,
	});
	

	$('#realperson-check').realperson();

});
