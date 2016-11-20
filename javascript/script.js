	
	$(document).ready(function()
	{
		$(".skills").hide();
		$(".experience").hide();
		$(".tabs-menu a").click(function(event) 
		{
			event.preventDefault();
			$(this).parent().addClass("current");
			$(this).parent().siblings().removeClass("current");
			$(this).parent().addClass("active");
			$(this).parent().siblings().removeClass("active");
			var tab = $(this).attr("href");
			$(".tab-content").not(tab).css("display", "none");
			$(tab).fadeIn(1200);
		});
	});
