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

// Instant Quotes Domestic Form Api

$(document).ready(function () {
  const today = new Date().toISOString().split("T")[0];
  $("#instantquotes_date").attr("min", today);

  $("#instantquotes_domestic").validate({
    rules: {
      instantquotes_from: {
        required: true,
      },
      instantquotes_to: {
        required: true,
      },
      instantquotes_email1: {
        email: true,
      },
      instantquotes_mobile: {
        required: true,
        digits: true,
        minlength: 8,
        maxlength: 10,
      },
      instantquotes_description: {
        required: true,
        number: true, // Ensures the value is a valid number
        min: 0.1, // Ensures the value is greater than 0
      },
    },
    messages: {
      instantquotes_from: {
        required: "Please enter your from",
      },
      instantquotes_to: {
        required: "Please enter your to",
      },
      instantquotes_email1: {
        required: "Please enter your email",
        email: "Please enter a valid email address",
      },
      instantquotes_mobile: {
        required: "Please enter phone number",
        digits: "Please enter a valid phone number",
        minlength: "Phone number must be at least 8 digits",
        maxlength: "Phone number can't exceed 10 digits",
      },
      instantquotes_description: {
        required: "Please enter the weight",
        number: "Please enter a valid number",
        min: "Weight must be greater than 0",
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
      const fromLocation = $("#instantquotes_from").val();
      const toLocation = $("#instantquotes_to").val();
      const moveDate = $("#instantquotes_date").val();
      const weight = $("#instantquotes_description").val();
      var payload = {
        email: $("#instantquotes_email1").val(),
        descriptionInfo: `A new enquiry has been received for a move from ${fromLocation} to ${toLocation} on ${moveDate}, with a total weight of ${weight}-kg. Please review the details and contact the client to send a quote.`,
        phone: $("#instantquotes_mobile").val(),
        company_id: 41,
        company: "Trucklah",
        lead_status: "PENDING",
        country_code: "91",
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
            $("#instantquotes_domestic")[0].reset();
          } else {
            console.error("Unexpected response or missing leadId:", response);
          }

          $("#instantquotes_domestic")[0].reset();
        },
        error: function (xhr, status, error) {
          console.error("First API call failed:", error);
          $("#errorModal").modal("show");
          $("#instantquotes_domestic")[0].reset();
        },
      });
    },
  });
});

// Instant Quotes International Form Api

$(document).ready(function () {
  const today = new Date().toISOString().split("T")[0];
  $("#instantquotes_date_inter").attr("min", today);

  $("#instantquotes_international").validate({
    rules: {
      instantquotes_from_inter: {
        required: true,
      },
      instantquotes_to_inter: {
        required: true,
      },
      instantquotes_email_inter: {
        email: true,
      },
      instantquotes_mobile_inter: {
        required: true,
        digits: true,
        minlength: 8,
        maxlength: 10,
      },
      instantquotes_description_inter: {
        required: true,
        number: true, // Ensures the value is a valid number
        min: 0.1, // Ensures the value is greater than 0
      },
    },
    messages: {
      instantquotes_from_inter: {
        required: "Please enter your from address",
      },
      instantquotes_to_inter: {
        required: "Please enter your to address",
      },
      instantquotes_email_inter: {
        required: "Please enter your email address",
        email: "Please enter a valid email address",
      },
      instantquotes_mobile_inter: {
        required: "Please enter phone number",
        digits: "Please enter a valid phone number",
        minlength: "Phone number must be at least 8 digits",
        maxlength: "Phone number can't exceed 10 digits",
      },
      instantquotes_description_inter: {
        required: "Please enter the weight",
        number: "Please enter a valid number",
        min: "Weight must be greater than 0",
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
      const fromLocation = $("#instantquotes_from_inter").val();
      const toLocation = $("#instantquotes_to_inter").val();
      const moveDate = $("#instantquotes_date_inter").val();
      const weight = $("#instantquotes_description_inter").val();
      var payload = {
        email: $("#instantquotes_email_inter").val(),
        descriptionInfo: `A new enquiry has been received for a move from ${fromLocation} to ${toLocation} on ${moveDate}, with a total weight of ${weight}-kg. Please review the details and contact the client to send a quote.`,
        phone: $("#instantquotes_mobile_inter").val(),
        company_id: 41,
        company: "Trucklah",
        lead_status: "PENDING",
        country_code: "91",
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
            $("#instantquotes_international")[0].reset();
          } else {
            console.error("Unexpected response or missing leadId:", response);
          }

          $("#instantquotes_international")[0].reset();
        },
        error: function (xhr, status, error) {
          console.error("First API call failed:", error);
          $("#errorModal").modal("show");
          $("#instantquotes_international")[0].reset();
        },
      });
    },
  });
});

// Instant Quotes Demond Form Api

$(document).ready(function () {
  const today = new Date().toISOString().split("T")[0];
  $("#instantquotes_date_demond").attr("min", today);
  $("#instantquotes_ondemond").validate({
    rules: {
      instantquotes_from_demond: {
        required: true,
      },
      instantquotes_to_demond: {
        required: true,
      },
      instantquotes_email_demond: {
        email: true,
      },
      instantquotes_mobile_demond: {
        required: true,
        digits: true,
        minlength: 8,
        maxlength: 10,
      },
      instantquotes_description_demond: {
        required: true,
        number: true, // Ensures the value is a valid number
        min: 0.1, // Ensures the value is greater than 0
      },
    },
    messages: {
      instantquotes_from_demond: {
        required: "Please enter your from",
      },
      instantquotes_to_demond: {
        required: "Please enter your to",
      },
      instantquotes_email_demond: {
        required: "Please enter your email address",
        email: "Please enter a valid email address",
      },
      instantquotes_mobile_demond: {
        required: "Please enter phone number",
        digits: "Please enter a valid phone number",
        minlength: "Phone number must be at least 8 digits",
        maxlength: "Phone number can't exceed 10 digits",
      },
      instantquotes_description_demond: {
        required: "Please enter your message",
        number: "Please enter a valid number",
        min: "Weight must be greater than 0",
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
      const fromLocation = $("#instantquotes_from_demond").val();
      const toLocation = $("#instantquotes_to_demond").val();
      const moveDate = $("#instantquotes_date_demond").val();
      const weight = $("#instantquotes_description_demond").val();
      var payload = {
        email: $("#instantquotes_email_demond").val(),
        descriptionInfo: `A new enquiry has been received for a move from ${fromLocation} to ${toLocation} on ${moveDate}, with a total weight of ${weight}-kg. Please review the details and contact the client to send a quote.`,
        phone: $("#instantquotes_mobile_demond").val(),
        company_id: 41,
        company: "Trucklah",
        lead_status: "PENDING",
        country_code: "91",
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
            $("#instantquotes_ondemond")[0].reset();
          } else {
            console.error("Unexpected response or missing leadId:", response);
          }

          $("#instantquotes_ondemond")[0].reset();
        },
        error: function (xhr, status, error) {
          console.error("First API call failed:", error);
          $("#errorModal").modal("show");
          $("#instantquotes_ondemond")[0].reset();
        },
      });
    },
  });
});

// contact us page form

// Form validation and submission
$("#contactForm").validate({
  rules: {
    first_name: {
      required: true,
      minlength: 2,
    },
    email: {
      required: true,
      email: true,
    },
    mobile: {
      required: true,
      number: true,
      minlength: 8,
      maxlength: 10,
    },
    description_info: {
      required: true,
    },
  },
  messages: {
    first_name: {
      required: "Please enter your first name*",
      minlength: "Your name must be at least 2 characters long",
    },
    email: {
      required: "Please enter your email*",
      email: "Please enter a valid email address",
    },
    mobile: {
      required: "Please enter your phone number*",
      number: "Please enter a valid phone number",
      minlength: "Your phone number must be at least 8 digits long",
      maxlength: "Your phone number must be at most 10 digits long",
    },
    description_info: {
      required: "Please enter your message*",
    },
  },
  errorPlacement: function (error, element) {
    error.appendTo(element.next(".error"));
  },
  submitHandler: function (form) {
    var payload = {
      first_name: $("#first_name").val(),
      last_name: $("#last_name").val(),
      email: $("#email").val(),
      phone: $("#mobile").val(),
      company_id: 41,
      company: "ECSCloudInfotech",
      lead_status: "PENDING",
      description_info: $("#description_info").val(),
      lead_source: "WEBSITE",
      country_code: "91",
      createdBy: $("#first_name").val(),
    };

    // console.log("Form data:", $("#description_info").val());

    // AJAX call to the newClient API
    $.ajax({
      url: "https://crmlah.com/ecscrm/api/newClient",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(payload),
      success: function (response, status, xhr) {
        if (xhr.status === 201 && response) {
          $("#successModal").modal("show");
          $("#contactForm")[0].reset();
        } else {
          console.error("Unexpected response or missing leadId:", response);
        }

        $("#contactForm")[0].reset();
      },
      error: function (xhr, status, error) {
        console.error("First API call failed:", error);
        $("#errorModal").modal("show");
        $("#contactForm")[0].reset();
      },
    });
  },
});

function scrollToSection() {
  document.getElementById("safeSection").scrollIntoView({
    behavior: "smooth",
  });
}
function scrollToSectionHome() {
  document.getElementById("homeSection").scrollIntoView({
    behavior: "smooth",
  });
}
function scrollToSectionCommercial() {
  document.getElementById("commercialSection").scrollIntoView({
    behavior: "smooth",
  });
}
function scrollToSectionCourier() {
  document.getElementById("courierSection").scrollIntoView({
    behavior: "smooth",
  });
}
