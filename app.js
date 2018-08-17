var url = "https://api.nasa.gov/planetary/apod?api_key=Cki5FT1UIQ3V3lAm07eRJUKO5miIprlw4krBz0N4";


$.ajax({
    url: url,
    success: function (result) {
        $("#apod_img_id").attr("src", result.url);
    }
});