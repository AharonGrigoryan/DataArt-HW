$(function () {
  $(".btn").click(function () {
    $($(this).attr("data-target")).modal("show");
  });

  $('[data-dismiss="modal"]').click(function () {
    $("#" + $(this).closest(".modal").attr("id")).modal("hide");
  });
});
