// Contact US Form Api
$(document).ready(function () {
  $("#contactUsForm").validate({
    rules: {
      contact_us_first_name: {
        required: true,
      },
      contact_us_email: {
        email: true,
      },
      contact_us_phone: {
        required: true,
        digits: true,
        minlength: 8,
        maxlength: 10,
      },
      contact_us_message: {
        required: true,
      },
    },
    messages: {
      contact_us_first_name: {
        required: "Please enter your first name",
      },
      contact_us_email: {
        email: "Please enter a valid email address",
      },
      contact_us_phone: {
        required: "Please enter your phone number",
        digits: "Please enter a valid phone number",
        minlength: "Phone number must be at least 8 digits",
        maxlength: "Phone number can't exceed 10 digits",
      },
      contact_us_message: {
        required: "Please enter your message",
      },
    },

    errorPlacement: function (error, element) {
      // Insert error after the .error div next to each input
      error.appendTo(element.closest(".input-group").find(".error"));
    },
    errorPlacement: function (error, element) {
      error.insertAfter(element);
    },
    highlight: function (element, errorClass) {
      $(element).addClass("is-invalid");
    },
    unhighlight: function (element, errorClass) {
      $(element).removeClass("is-invalid");
    },
    submitHandler: function (form) {
      var payload = {
        first_name: $("#contact_us_first_name").val(),
        last_name: $("#contact_us_last_name").val(),
        email: $("#contact_us_email").val(),
        description_info: $("#contact_us_message").val(),
        phone: $("#contact_us_phone").val(),
        company_id: 41,
        company: "Trucklah",
        lead_status: "PENDING",
        country_code: "65",
        lead_source: "contact us",
      };

      $.ajax({
        url: "https://crmlah.com/ecscrm/api/newClient",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(payload),
        success: function (response, status, xhr) {
          if (xhr.status === 201 && response) {
            $("#successModal").modal("show");
            $("#contactUsForm")[0].reset();
          } else {
            console.error("Unexpected response or missing leadId:", response);
          }

          $("#contactUsForm")[0].reset();
        },
        error: function (xhr, status, error) {
          console.error("First API call failed:", error);
          $("#errorModal").modal("show");
          $("#contactUsForm")[0].reset();
        },
      });
    },
  });
});
