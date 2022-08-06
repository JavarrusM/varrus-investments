import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import CustomForm from "./CustomForm";

const MailchimpFormContainer = (props) => {
  const postUrl = `https://Varrus.us12.list-manage.com/subscribe/post?u=${process.env.NEXT_PUBLIC_MAIL_CHIMP_API_U}&id=${process.env.NEXT_PUBLIC_MAIL_CHIMP_API_ID}`;

  return (
    <div className="mc__form-container">
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </div>
  );
};

export default MailchimpFormContainer;
