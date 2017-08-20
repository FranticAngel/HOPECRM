(function ($) {
	var options = {
		pdfOpenParams: {
			pagemode: "thumbs",
			navpanes: 0,
			toolbar: 0,
			statusbar: 0,
			view: "FitV"
		}
	};
	var myPDF = PDFObject.embed("touzi.pdf",document.body);
})(jQuery);